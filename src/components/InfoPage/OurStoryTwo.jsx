"use client";
import MedalImage from "../../../public/assets/info-page/medal.png";
import CommunityImage from "../../../public/assets/info-page/communities.png";
import wordOfMouthImage from "../../../public/assets/info-page/word-of-mouth.png";
import RequirementsImage from "../../../public/assets/info-page/requirements.png";
import Image from "next/image";


const OurStoryTwo = () => {
    return (<section
        className="py-5 position-relative"
        style={{
            background: "white",
            backgroundImage: `
            linear-gradient(90deg, rgba(54, 88, 191, 0.05) 0%, transparent 50%, rgba(242, 96, 82, 0.05) 100%)
          `,
            minHeight: "80vh",
            display: "flex",
            alignItems: "center",
        }}
    >
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10 text-center">
                    {/* Header Section */}
                    <h2
                        className="fw-bold mb-4"
                        style={{
                            fontFamily: "DM Serif Display, serif",
                            fontWeight: 400,
                            fontSize: "clamp(36px, 5vw, 60px)",
                            lineHeight: "1.1",
                            color: "#3658BF",
                        }}
                    >
                        <span style={{ color: "#3658BF" }}>Our</span>{" "}
                        <span style={{ color: "#F26052" }}>Story</span>
                    </h2>

                    <p className="lead mb-5 mx-auto text-center max-w-3xl text-gray-700 text-[clamp(16px,2.5vw,18px)] leading-relaxed">
                        What began as a small side project has evolved into a trusted platform serving thousands of users.
                        <br />
                        Along the way, we've learned, iterated, and grown — guided by feedback and inspired by our users.
                        <br />
                        Our journey includes:
                    </p>


                    {/* Four Steps/Cards */}
                    <div className="row g-4 mt-5">
                        {/* First Card */}
                        <div className="col-lg-3 col-md-6">
                            <div className="card border-0 shadow-lg h-100" style={{ borderRadius: "12px" }}>
                                <div className="card-body text-center p-4">
                                    {/* Icon */}
                                    <div className="mb-3">
                                        <Image
                                            src={MedalImage}
                                            alt="Medal icon"
                                            width={60}
                                            height={60}
                                            style={{ margin: "0 auto" }}
                                        />
                                    </div>
                                    <p className="card-text" style={{ color: "#4a5568", fontSize: "14px" }}>
                                        Launching our first MVP in a tiny coworking space
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Second Card */}
                        <div className="col-lg-3 col-md-6">
                            <div className="card border-0 shadow-lg h-100" style={{ borderRadius: "12px" }}>
                                <div className="card-body text-center p-4">
                                    {/* Icon */}
                                    <div className="mb-3">
                                        <Image
                                            src={wordOfMouthImage}
                                            alt="Word of mouth icon"
                                            width={60}
                                            height={60}
                                            style={{ margin: "0 auto" }}
                                        />
                                    </div>
                                    <p className="card-text" style={{ color: "#4a5568", fontSize: "14px" }}>
                                        Scaling through word-of-mouth and authentic connections
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Third Card */}
                        <div className="col-lg-3 col-md-6">
                            <div className="card border-0 shadow-lg h-100" style={{ borderRadius: "12px" }}>
                                <div className="card-body text-center p-4">
                                    {/* Icon */}
                                    <div className="mb-3">
                                        <Image
                                            src={RequirementsImage}
                                            alt="Requirements icon"
                                            width={60}
                                            height={60}
                                            style={{ margin: "0 auto" }}
                                        />
                                    </div>
                                    <p className="card-text" style={{ color: "#4a5568", fontSize: "14px" }}>
                                        Staying independent and user-focused at every step
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Fourth Card */}
                        <div className="col-lg-3 col-md-6">
                            <div className="card border-0 shadow-lg h-100" style={{ borderRadius: "12px" }}>
                                <div className="card-body text-center p-4">
                                    {/* Icon */}
                                    <div className="mb-3">
                                        <Image
                                            src={CommunityImage}
                                            alt="Community icon"
                                            width={60}
                                            height={60}
                                            style={{ margin: "0 auto" }}
                                        />
                                    </div>
                                    <p className="card-text" style={{ color: "#4a5568", fontSize: "14px" }}>
                                        Expanding into new regions and serving diverse communities
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>);
}
export default OurStoryTwo