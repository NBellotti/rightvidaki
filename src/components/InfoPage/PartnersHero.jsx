"use client";
import heroFour1 from "../../../public/assets/info-page/partner-hero-1.png";
import heroFour2 from "../../../public/assets/info-page/partner-hero-2.png";
import Image from "next/image";

const PartnersHero = () => {
  return (
    <section
      className="py-5 position-relative gradientBg"
    >
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            {/* Text Content */}
            <h2
              className="fw-bold mb-4"
              style={{
                fontFamily: "DM Serif Display, serif",
                fontWeight: 400,
                fontSize: "clamp(36px, 5vw, 60px)",
                lineHeight: "1.1",
                marginBottom: "2rem",
              }}
            >
              <span className="text-primary">Partner With </span>{" "}
              <span className="text-second">Vidaki</span>.
            </h2>

            <p className="lead mb-5 mx-auto text-center max-w-3xl text-gray-700 text-[clamp(16px,2.5vw,18px)] leading-relaxed">
             Join us in empowering local trade and sustainability across Eurasia. Build your business  reach through trusted advertising and verified partnerships
            </p>

            {/* Circular Images */}
            <div
              className="d-flex justify-content-center align-items-center position-relative flex-wrap"
              style={{ minHeight: "clamp(300px, 50vh, 400px)" }}
            >
              {/* Left Circular Image - Two men shaking hands */}
              <div
                className="rounded-circle overflow-hidden shadow-lg position-relative"
                style={{
                  width: "clamp(200px, 40vw, 250px)",
                  height: "clamp(200px, 40vw, 250px)",
                  zIndex: 3,
                  position: "relative",
                  marginRight: "clamp(-40px, -8vw, -80px)",
                }}
              >
                <Image
                  src={heroFour1}
                  alt="Two men in business suits shaking hands, both smiling"
                  width={220}
                  height={220}
                  className="object-fit-cover w-100 h-100"
                />
                {/* Reddish-orange glow */}
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 rounded-circle"
                  style={{
                    boxShadow: "0 0 clamp(20px, 4vw, 40px) #F26052",
                    zIndex: -1,
                  }}
                />
              </div>

              {/* Right Circular Image - Group of hands stacked */}
              <div
                className="rounded-circle overflow-hidden shadow-lg position-relative"
                style={{
                  width: "clamp(200px, 40vw, 320px)",
                  height: "clamp(200px, 40vw, 320px)",
                  zIndex: 2,
                }}
              >
                <Image
                  src={heroFour2}
                  alt="Top-down view of five people's hands stacked together on wooden table"
                  width={320}
                  height={320}
                  className="object-fit-cover w-100 h-100"
                />
                {/* Light blue glow */}
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 rounded-circle"
                  style={{
                    boxShadow:
                      "0 0 clamp(20px, 4vw, 40px) rgba(54, 88, 191, 0.4)",
                    zIndex: -1,
                  }}
                />
              </div>

              {/* Small decorative circle above and between the main circles - Hidden on mobile */}
              <div
                className="position-absolute rounded-circle d-none d-md-block"
                style={{
                  width: "clamp(30px, 5vw, 50px)",
                  height: "clamp(30px, 5vw, 50px)",
                  background: "rgba(54, 88, 191, 0.1)",
                  top: "10%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 1,
                  boxShadow:
                    "0 0 clamp(10px, 2vw, 20px) rgba(54, 88, 191, 0.3)",
                }}
              />

              {/* Small decorative circle to the right of the right circle - Hidden on mobile */}
              <div
                className="position-absolute rounded-circle d-none d-md-block"
                style={{
                  width: "clamp(25px, 4vw, 40px)",
                  height: "clamp(25px, 4vw, 40px)",
                  background: "rgba(54, 88, 191, 0.1)",
                  top: "20%",
                  right: "10%",
                  zIndex: 1,
                  boxShadow:
                    "0 0 clamp(8px, 1.5vw, 15px) rgba(54, 88, 191, 0.3)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersHero;
