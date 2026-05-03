import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

export async function markdownToHTML(markdown) {
  const p = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: {
        light: "min-light",
        dark: "min-dark",
      },
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(markdown);

  return p.toString();
}

export async function getPost(slug) {

  let filePath = path.join("content", "blog", `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    filePath = path.join("content", `${slug}.mdx`);
  }
  
  if (!fs.existsSync(filePath)) {
    return null;
  }
  
  let source = fs.readFileSync(filePath, "utf-8");
  const { content: rawContent, data: metadata } = matter(source);
  const content = await markdownToHTML(rawContent);
  return {
    source: content,
    metadata,
    slug,
  };
}

async function getAllPosts(dir) {
  let mdxFiles = getMDXFiles(dir);
  return Promise.all(
    mdxFiles.map(async (file) => {
      let slug = path.basename(file, path.extname(file));
      let { metadata, source } = await getPost(slug);
      return {
        metadata,
        slug,
        source,
      };
    })
  );
}

export async function getBlogPosts() {
  const posts = [];
  
  // Get posts from root content directory
  const rootPosts = await getAllPosts(path.join(process.cwd(), "content"));
  posts.push(...rootPosts);
  
  // Get posts from blog subdirectory
  const blogDir = path.join(process.cwd(), "content", "blog");
  if (fs.existsSync(blogDir)) {
    const blogPosts = await getAllPosts(blogDir);
    posts.push(...blogPosts);
  }
  
  return posts;
}

// Get all pages (multilingual content)
export async function getPages(locale = 'en') {
  const pagesDir = path.join(process.cwd(), "content", "pages");
  
  if (!fs.existsSync(pagesDir)) {
    return [];
  }
  
  const categories = fs.readdirSync(pagesDir).filter(dir => 
    fs.statSync(path.join(pagesDir, dir)).isDirectory()
  );
  
  const allPages = [];
  
  for (const category of categories) {
    const categoryDir = path.join(pagesDir, category);
    const files = fs.readdirSync(categoryDir).filter(file => file.endsWith('.mdx'));
    
    for (const file of files) {
      const filePath = path.join(categoryDir, file);
      const source = fs.readFileSync(filePath, "utf-8");
      const { data: metadata } = matter(source);
      
      // Only return pages matching the requested locale
      if (metadata.locale === locale) {
        allPages.push({
          ...metadata,
          category,
          slug: `${category}/${metadata.slug}`,
          filePath: path.join("pages", category, file.replace('.mdx', ''))
        });
      }
    }
  }
  
  return allPages;
}

// Get a specific page by category and locale
export async function getPage(category, locale = 'en') {
  const filePath = path.join("content", "pages", category, `${locale}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }
  
  let source = fs.readFileSync(filePath, "utf-8");
  const { content: rawContent, data: metadata } = matter(source);
  const content = await markdownToHTML(rawContent);
  
  return {
    source: content,
    metadata: {
      ...metadata,
      category
    },
    slug: `${category}`,
  };
}

// Get location-based content
export async function getLocationContent(country, categoryType, locale = 'en') {
  const locationDir = path.join(process.cwd(), "content", "pages", "location");
  
  if (!fs.existsSync(locationDir)) {
    return null;
  }
  
  const fileName = `${country}-${categoryType}-${locale}.mdx`;
  const filePath = path.join(locationDir, fileName);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }
  
  let source = fs.readFileSync(filePath, "utf-8");
  const { content: rawContent, data: metadata } = matter(source);
  const content = await markdownToHTML(rawContent);
  
  return {
    source: content,
    metadata,
    slug: `${country}-${categoryType}`,
  };
}