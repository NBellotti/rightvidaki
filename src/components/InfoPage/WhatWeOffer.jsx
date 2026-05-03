"use client";
import Image from "next/image";
import research from "../../../public/assets/info-page/research.png";
import bullhorn from "../../../public/assets/info-page/bullhorn.png";
import money from "../../../public/assets/info-page/money.png";
import partnership from "../../../public/assets/info-page/partnership.png";
import monitor from "../../../public/assets/info-page/monitor.png";


const WhatWeOffer = () => {
  return (
    <section className="container py-5">
      <div className=" mb-5">
        <h2
          className="fw-bold mb-4"
          style={{
            fontFamily: "DM Serif Display, serif",
            fontWeight: 400,
            fontSize: "clamp(36px, 5vw, 48px)",
            lineHeight: "1.2",
            color: "#3658BF",
          }}
        >
          <span style={{ color: "#3658BF" }}>What We</span>{" "}
          <span style={{ color: "#F26052" }}>Offer</span>
        </h2>
        <p
          className="lead mb-5"
          style={{
            color: "#4a5568",
            fontSize: "clamp(18px, 2.5vw, 20px)",
            lineHeight: "0.5",
            maxWidth: "600px",
            margin: "0 auto 0 auto",
          }}
        >
          As a partner, you'll gain access to:
        </p>
      </div>

      <div className="row justify-content-center g-5">
        {/* Row 1 - Three items equally spaced */}
        <div className="col-lg-4 col-md-6">
          <div className="d-flex align-items-center justify-content-center text-center gap-3">
            <div className="mb-0">
              <Image
                src={research}
                alt="Expanded market reach - bar chart and pie chart with magnifying glass"
                width={80}
                height={80}
                className="img-fluid"
                style={{
                  maxWidth: "80px",
                  filter:
                    "brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)",
                }}
              />
            </div>
            <h4
              className="fw-semibold"
              style={{
                fontSize: "clamp(16px, 2.5vw, 18px)",
                lineHeight: "1.4",
              }}
            >
              Expanded market reach
            </h4>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="d-flex align-items-center justify-content-center text-center gap-3">
            <div className="mb-0">
              <Image
                src={bullhorn}
                alt="Joint marketing opportunities - laptop with megaphone and social media icons"
                width={80}
                height={80}
                className="img-fluid"
                style={{
                  maxWidth: "80px",
                  filter:
                    "brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)",
                }}
              />
            </div>
            <h4
              className="fw-semibold"
              style={{
                fontSize: "clamp(16px, 2.5vw, 18px)",
                lineHeight: "1.4",
              }}
            >
              Joint marketing opportunities
            </h4>
          </div>
        </div>

        <div className="col-lg-4 col-md-4">
          <div className="d-flex align-items-center justify-content-center text-center gap-3">
            <div className="mb-0">
              <Image
                src={money}
                alt="Revenue-sharing models - money bag with dollar sign and coins"
                width={80}
                height={80}
                className="img-fluid"
                style={{
                  maxWidth: "80px",
                  filter:
                    "brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)",
                }}
              />
            </div>
            <h4
              className="fw-semibold"
              style={{
                fontSize: "clamp(16px, 2.5vw, 18px)",
                lineHeight: "1.4",
              }}
            >
              Revenue-sharing models
            </h4>
          </div>
        </div>

        {/* Row 2 - Two items centered */}
        <div className="col-lg-4 col-md-4">
          <div className="d-flex align-items-center justify-content-center text-center gap-3">
            <div className="mb-0">
              <Image
                src={partnership}
                alt="Co-branded campaigns - two hands shaking with package"
                width={80}
                height={80}
                className="img-fluid"
                style={{
                  maxWidth: "80px",
                  filter:
                    "brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)",
                }}
              />
            </div>
            <h4
              className="fw-semibold"
              style={{
                fontSize: "clamp(16px, 2.5vw, 18px)",
                lineHeight: "1.4",
              }}
            >
              Co-branded campaigns
            </h4>
          </div>
        </div>

        <div className="col-lg-4 col-md-4">
          <div className="d-flex align-items-center justify-content-center text-center gap-3">
            <div className="mb-0">
              <Image
                src={monitor}
                alt="Tech and data collaboration - desktop monitor with data visualizations"
                width={80}
                height={80}
                className="img-fluid"
                style={{
                  maxWidth: "80px",
                  filter:
                    "brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)",
                }}
              />
            </div>
            <h4
              className="fw-semibold mb-0"
              style={{
                fontSize: "clamp(16px, 2.5vw, 18px)",
                lineHeight: "1.4",
              }}
            >
              Tech and data collaboration
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
