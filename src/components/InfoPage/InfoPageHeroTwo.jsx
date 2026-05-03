"use client";
import Image from "next/image";
import HeroImage from "../../../public/assets/info-page/safetrading.png";
import HeroImageWork from "../../../public/assets/info-page/safetrading-1.png";

const InfoPageTwo = () => {
  return (
    <div>
      <section
        className=" py-5 position-relative"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100"
          
        />

        <div
          className="position-absolute top-0 start-0 h-100"
          style={{
            width: "2px",
            background:
              "linear-gradient(180deg, rgba(54, 88, 191, 0.3) 0%, transparent 100%)",
            zIndex: 1,
          }}
        />

        <div
          className="position-absolute top-0 end-0"
          style={{
            width: "300px",
            height: "300px",
            background:
              "radial-gradient(circle, rgba(255, 236, 141, 0.2) 0%, transparent 70%)",
            zIndex: 0,
          }}
        />

        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center">
            <div className="col-lg-6 text-lg-start text-center mb-5 mb-lg-0">
              <h1
                className="fw-bold mb-4"
                style={{
                  fontFamily: "DM Serif Display, serif",
                  fontWeight: 400,
                  fontSize: "clamp(36px, 5vw, 48px)",
                  lineHeight: "1.1",
                  color: "#3658BF",
                  marginBottom: "1.5rem",
                }}
              >
                Safety Tips &  
               Community <span style={{ color: "#F26052" }}> Guidelines</span>.
              </h1>

              <p
                className="lead"
                style={{
                  maxWidth: "380px",
                  color: "#4a5568",
                  fontSize: "clamp(16px, 2.5vw, 12px)",
                  lineHeight: "1.6",
                  margin: "0 auto",
                  marginLeft: "0",
                }}
              >
               At Vidaki, we're committed to building a trusted marketplace where buyers, sellers, and traders  can connect safely across Eurasia. Most users are honest and well-meaning, but taking a few  precautions helps protect everyone.
              </p>
            </div>

            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <div className="position-relative" style={{ minHeight: "450px" }}>
                <div
                  className="rounded-circle overflow-hidden shadow-lg position-relative"
                  style={{
                    width: "280px",
                    height: "280px",
                    zIndex: 3,
                    position: "relative",
                    top: "0px",
                    left: "0px",
                  }}
                >
                  <Image
                    src={HeroImage}
                    alt="Smiling man at desk"
                    width={280}
                    height={280}
                    className="object-fit-cover w-100 h-100"
                  />

                  <div
                    className="position-absolute top-0 start-0 w-100 h-100 rounded-circle"
                    style={{
                      boxShadow: "0 0 20px rgba(255, 236, 141, 0.6)",
                      zIndex: -1,
                    }}
                  />
                </div>

                <div
                  className="position-absolute rounded-circle"
                  style={{
                    width: "40px",
                    height: "40px",
                    border: "2px solid rgba(54, 88, 191, 0.4)",
                    top: "-20px",
                    right: "20px",
                    zIndex: 4,
                    background: "transparent",
                  }}
                />

                <div
                  className="position-absolute rounded-circle"
                  style={{
                    width: "280px",
                    height: "280px",
                    background: "rgba(0, 0, 0, 0.05)",
                    top: "10px",
                    left: "10px",
                    zIndex: 1,
                  }}
                />

                <div
                  className="rounded-circle overflow-hidden shadow-lg position-absolute"
                  style={{
                    width: "200px",
                    height: "200px",
                    bottom: "20px",
                    right: "180px",
                    zIndex: 2,
                  }}
                >
                  <Image
                    src={HeroImageWork}
                    alt="Team working together"
                    width={200}
                    height={200}
                    className="object-fit-cover w-100 h-100"
                  />

                  <div
                    className="position-absolute top-0 start-0 w-100 h-100 rounded-circle"
                    style={{
                      boxShadow: "0 0 20px rgba(242, 96, 82, 0.5)",
                      zIndex: -1,
                    }}
                  />
                </div>

                <div
                  className="position-absolute rounded-circle"
                  style={{
                    width: "35px",
                    height: "35px",
                    border: "2px solid rgba(107, 114, 128, 0.3)",
                    bottom: "180px",
                    right: "180px",
                    zIndex: 4,
                    background: "transparent",
                  }}
                />

                <div
                  className="position-absolute rounded-circle"
                  style={{
                    width: "200px",
                    height: "200px",
                    background: "rgba(0, 0, 0, 0.05)",
                    bottom: "0px",
                    right: "200px",
                    zIndex: 1,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfoPageTwo;
