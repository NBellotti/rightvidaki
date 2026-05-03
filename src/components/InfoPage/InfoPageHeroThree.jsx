"use client";
import Image from "next/image";
import heroThree1 from "../../../public/assets/info-page/hero-three-1.png";
import heroThree2 from "../../../public/assets/info-page/hero-three-2.png";
import heroThree3 from "../../../public/assets/info-page/hero-three-3.png";
import heroThree4 from "../../../public/assets/info-page/hero-three-4.png";

const InfoPageHeroThree = () => {
    return (<section
        className="py-5 position-relative"
    >
        {/* Left pink/red gradient */}
        <div
            className="position-absolute bottom-0 start-0"
            style={{
                width: "400px",
                height: "400px",
                background: "radial-gradient(circle, rgba(242, 96, 82, 0.05) 0%, transparent 70%)",
                zIndex: 0,
            }}
        />

        {/* Right blue/purple gradient */}
        <div
            className="position-absolute top-0 end-0 h-100"
            style={{
                width: "100px",
                background: "linear-gradient(90deg, transparent 0%, rgba(54, 88, 191, 0.1) 100%)",
                zIndex: 0,
            }}
        />

        <div className="container position-relative" style={{ zIndex: 2 }}>
            <div className="row align-items-center">
                {/* Left side - Text content */}
                <div className="col-lg-6 text-lg-start text-center mb-5 mb-lg-0">
                    <h1
                        className="fw-bold mb-4"
                        style={{
                            fontFamily: "DM Serif Display, serif",
                            fontWeight: 400,
                            fontSize: "clamp(36px, 5vw, 60px)",
                            lineHeight: "1.1",
                            color: "#3658BF",
                            marginBottom: "1.5rem",
                        }}
                    >
                        Welcome to our world <br className="d-none d-md-block" />
                        where innovation meets{" "}
                        <span style={{ color: "#F26052" }}>simplicity.</span>
                    </h1>

                    <p
                        className="lead"
                        style={{
                            maxWidth: "500px",
                            color: "#4a5568",
                            fontSize: "clamp(16px, 2.5vw, 18px)",
                            lineHeight: "1.6",
                            margin: "0 auto",
                            marginLeft: "0",
                        }}
                    >
                        We're a team of creators, builders, and problem-solvers committed to
                        delivering meaningful digital experiences.
                    </p>
                </div>

                {/* Right side - Image Grid */}
                <div className="col-lg-6 d-flex justify-content-center align-items-center">
                    <div className="position-relative" style={{ width: "100%", maxWidth: "600px" }}>
                        <div className="row g-3">
                            {/* Top Image - Large horizontal rectangle */}
                            <div className="col-8">
                                <div
                                    className="rounded-3 overflow-hidden shadow-lg position-relative"

                                >
                                    <Image
                                        src={heroThree4}
                                        alt="Five young Asian professionals collaborating around a table with laptops"
                                        width={600}
                                        height={500}
                                        className="object-fit-cover w-100 h-100"
                                    />
                                </div>
                            </div>

                            {/* Bottom Left Image - Vertical rectangle (woman gesturing) - shorter */}
                            <div className="col-4">
                                <div
                                    className="rounded-3 overflow-hidden shadow-lg position-relative"

                                >
                                    <Image
                                        src={heroThree3}
                                        alt="Woman with curly dark hair and glasses gesturing while speaking"
                                        width={300}
                                        height={600}
                                        className="object-fit-cover w-100 h-100"
                                    />
                                </div>
                            </div>

                            {/* Middle Right Image - Vertical rectangle (2 women at table) - taller */}
                            <div className="col-4">
                                <div
                                    className="rounded-3 overflow-hidden shadow-lg position-relative"

                                >
                                    <Image
                                        src={heroThree2}
                                        alt="Two women seated at a round table in office lounge"
                                        width={300}
                                        height={400}
                                        className="object-fit-cover w-100 h-100"
                                    />
                                </div>
                            </div>

                            {/* Bottom Right Image - Horizontal rectangle (library study group) */}
                            <div className="col-8">
                                <div
                                    className="rounded-3 overflow-hidden shadow-lg position-relative"

                                >
                                    <Image
                                        src={heroThree1}
                                        alt="Four people studying together in library with bookshelves"
                                        width={600}
                                        height={338}
                                        className="object-fit-cover w-100 h-100"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>);
}

export default InfoPageHeroThree