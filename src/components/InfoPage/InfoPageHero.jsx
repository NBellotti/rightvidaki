"use client";
import HeroImage from "../../../public/assets/info-page/hero-work.jpg";
import HeroImageWork from "../../../public/assets/info-page/hero-team-work.jpg";
import Image from "next/image";

const InfoPageHero = ({
  title = (
    <h1
      className="fw-bold display-5"
      style={{
        fontFamily: "DM Serif Display",
        fontWeight: 400,
        fontStyle: "normal",
        fontSize: "60px",
        lineHeight: "65px",
        letterSpacing: "0%",
        textAlign: "center",
      }}
    >
      Welcome to our world <br />
      where innovation meets{" "}
      <span style={{ color: "#F26052" }}>simplicity.</span>
    </h1>
  ),
  secondTitle = (
    <p className="mt-3 lead mx-auto" style={{ maxWidth: "700px" }}>
      We’re a team of creators, builders, and problem-solvers committed to
      delivering meaningful digital experiences.
    </p>
  ),
}) => {
  return (
    <section
      className="text-center position-relative py-5"
      style={{
        background: "linear-gradient(to bottom, #FFEC8D 0%, #FFFFFF 60%)",
      }}
    >
      <div className="container">
        {/* Title */}
        {title}
        {/* Subtitle */}
        {secondTitle}

        {/* Circle Images */}
        <div className="d-flex justify-content-center align-items-center mt-5 gap-4 flex-wrap">
          <div
            className="rounded-circle overflow-hidden shadow"
            style={{ width: "220px", height: "220px" }}
          >
            <Image
              src={HeroImageWork}
              alt="Team working"
              width={220}
              height={220}
              className="object-fit-cover"
            />
          </div>

          <div
            className="rounded-circle overflow-hidden shadow"
            style={{ width: "280px", height: "280px" }}
          >
            <Image
              src={HeroImage}
              alt="Smiling man"
              width={280}
              height={280}
              className="object-fit-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoPageHero;
