import { notFound } from "next/navigation";
import Layout from "@/components/Layout/Layout";
import BreadcrumbComponent from "@/components/Breadcrumb/BreadcrumbComponent";
import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/MDX-Component/mdx-components";

export async function generateMetadata({ params }) {
  try {
    const { data } = await getContent(params.slug);
    return {
      title: data.title || "",
      description: data.description || "",
      keywords: data.keywords || "",
    };
  } catch (error) {
    return {
      title: "Page Not Found",
      description: "The requested page could not be found.",
    };
  }
}

// Helper function to recursively find all directories
async function getAllDirectories(dir) {
  const directories = [];

  try {
    const items = await fs.readdir(dir, { withFileTypes: true });

    for (const item of items) {
      const fullPath = path.join(dir, item.name);

      if (item.isDirectory()) {
        directories.push(fullPath);
        // Recursively get subdirectories
        const subdirs = await getAllDirectories(fullPath);
        directories.push(...subdirs);
      }
    }
  } catch (error) {
    // Directory doesn't exist or can't be read
  }

  return directories;
}

async function getContent(slugArray) {
  const contentRoot = path.join(process.cwd(), "content");

  try {
    // Handle nested paths - join slug array to create file path
    const slugPath = Array.isArray(slugArray) ? slugArray.join("/") : slugArray;
    const filePath = path.join(contentRoot, `${slugPath}.mdx`);

    try {
      const fileContent = await fs.readFile(filePath, "utf8");
      const { data, content } = matter(fileContent);
      return { data, content };
    } catch (error) {
      // If direct path doesn't work, try to find the file in the structure
      // This maintains backward compatibility for existing URLs
      const fileName = Array.isArray(slugArray)
        ? slugArray[slugArray.length - 1]
        : slugArray;

      // Get all directories dynamically
      const allDirectories = [
        contentRoot,
        ...(await getAllDirectories(contentRoot)),
      ];

      // Generate possible paths from all directories
      const possiblePaths = allDirectories.map((dir) =>
        path.join(dir, `${fileName}.mdx`)
      );

      for (const filePath of possiblePaths) {
        try {
          const fileContent = await fs.readFile(filePath, "utf8");
          const { data, content } = matter(fileContent);
          return { data, content };
        } catch (error) {
          // Continue to next path
          continue;
        }
      }

      throw new Error(`Could not find page: ${slugPath}`);
    }
  } catch (error) {
    throw error;
  }
}

export default async function ContentPage({ params }) {
  try {
    const { data, content } = await getContent(params.slug);

    return (
      <Layout>
        <MDXRemote source={content} components={mdxComponents} />
        {/* <BreadcrumbComponent title2={data.title} />
        <section className="static_pages">
          <div className="container">
            <div className="static_div">
              <div className="main_title">
                <span>{data.title}</span>
              </div>
              <div className="page_content">
              </div>
            </div>
          </div>
        </section> */}
      </Layout>
    );
  } catch (error) {
    notFound();
  }
}

// Helper function to recursively find all .mdx files with their folder structure
async function getAllMdxFilesWithPaths(dir, basePath = "") {
  const mdxFiles = [];

  try {
    const items = await fs.readdir(dir, { withFileTypes: true });

    for (const item of items) {
      const fullPath = path.join(dir, item.name);

      if (item.isDirectory()) {
        // Recursively search subdirectories
        const subPath = basePath ? `${basePath}/${item.name}` : item.name;
        const subFiles = await getAllMdxFilesWithPaths(fullPath, subPath);
        mdxFiles.push(...subFiles);
      } else if (item.isFile() && item.name.endsWith(".mdx")) {
        // Remove .mdx extension to get the slug
        const fileName = item.name.replace(".mdx", "");
        const fullSlugPath = basePath ? `${basePath}/${fileName}` : fileName;
        mdxFiles.push(fullSlugPath);
      }
    }
  } catch (error) {
    // Directory doesn't exist or can't be read
  }

  return mdxFiles;
}

export async function generateStaticParams() {
  try {
    const contentRoot = path.join(process.cwd(), "content");
    const allFiles = await getAllMdxFilesWithPaths(contentRoot);

    // Convert paths to slug arrays for Next.js catch-all routes
    return allFiles.map((filePath) => ({
      slug: filePath.split("/"),
    }));
  } catch (error) {
    return [];
  }
}
