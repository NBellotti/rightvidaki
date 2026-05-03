"use client";
import Image from "next/image";
import simplicityImage from "../../../public/assets/info-page/simplicity.png";
import transperancyImage from "../../../public/assets/info-page/transperancy.png";
import empowermentImage from "../../../public/assets/info-page/empowerment.png";
import responsivenessImage from "../../../public/assets/info-page/responsiveness.png";
import Sustainability from "../../../public/assets/info-page/safetrading-2.png";
const WeStandFor = () => {
  return (
    <section className="py-5">
      <div className="container">
        <h2
          className="text-center mb-4"
          style={{
            fontFamily: "Manrope",
            fontWeight: 400,
            fontStyle: "normal", // Regular → normal
            fontSize: "60px",
            lineHeight: "65px",
            letterSpacing: "0%",
            textAlign: "center",
            color: "#3658BF",
          }}
        >
          What We <span style={{ color: "#F26052" }}>Stand</span> For
        </h2>

        <div className="row g-4 mt-3">
          <div className="col-12 col-md-6 col-lg-3">
            <div
              className="card border-0 shadow h-100 overflow-hidden rounded-3 position-relative"
              style={{ height: 220 }}
            >
              <Image
                src={simplicityImage}
                alt="Simplicity illustration"
                width={640}
                height={400}
                className="w-100 h-100 object-fit-cover"
              />
              <div
                className="position-absolute bottom-0 start-0 w-100"
                style={{
                  height: "55%",
                  background:
                    "linear-gradient(180deg, rgba(4,6,34,0) 0%, rgba(4,6,34,0.75) 100%)",
                }}
              />
              <div className="position-absolute bottom-0 start-0 end-0 p-3">
                <h5 className="text-white mb-1">Simplicity</h5>
                <p className="text-white-50 small mb-1">
                  Intuitive tools that make posting, browsing, and messaging
                  effortless, removing complexity so you can focus on what
                  matters
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div
              className="card border-0 shadow h-100 overflow-hidden rounded-3 position-relative"
              style={{ height: 220 }}
            >
              <Image
                src={transperancyImage}
                alt="Transparency illustration"
                width={640}
                height={400}
                className="w-100 h-100 object-fit-cover"
              />
              <div
                className="position-absolute bottom-0 start-0 w-100"
                style={{
                  height: "55%",
                  background:
                    "linear-gradient(180deg, rgba(4,6,34,0) 0%, rgba(4,6,34,0.75) 100%)",
                }}
              />
              <div className="position-absolute bottom-0 start-0 end-0 p-3">
                <h5 className="text-white mb-1">Security & Transparency</h5>
                <p className="text-white-50 small mb-1">
                  Verified users, clear listings, open communication, and
                  built-in safeguards for trusted exchanges
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div
              className="card border-0 shadow h-100 overflow-hidden rounded-3 position-relative"
              style={{ height: 220 }}
            >
              <Image
                src={empowermentImage}
                alt="Empowerment illustration"
                width={640}
                height={400}
                className="w-100 h-100 object-fit-cover"
              />
              <div
                className="position-absolute bottom-0 start-0 w-100"
                style={{
                  height: "55%",
                  background:
                    "linear-gradient(180deg, rgba(4,6,34,0) 0%, rgba(4,6,34,0.75) 100%)",
                }}
              />
              <div className="position-absolute bottom-0 start-0 end-0 p-3">
                <h5 className="text-white mb-1">Empowerment</h5>
                <p className="text-white-50 small mb-1">
                  Giving Vidas more control through flexible trade options:
                  monetary sales, bartering, and service exchanges
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div
              className="card border-0 shadow h-100 overflow-hidden rounded-3 position-relative"
              style={{ height: 220 }}
            >
              <Image
                src={responsivenessImage}
                alt="Responsiveness illustration"
                width={640}
                height={400}
                className="w-100 h-100 object-fit-cover"
              />
              <div
                className="position-absolute bottom-0 start-0 w-100"
                style={{
                  height: "55%",
                  background:
                    "linear-gradient(180deg, rgba(4,6,34,0) 0%, rgba(4,6,34,0.75) 100%)",
                }}
              />
              <div className="position-absolute bottom-0 start-0 end-0 p-3">
                <h5 className="text-white mb-1">Responsiveness</h5>
                <p className="text-white-50 small mb-1">
                  Acting on feedback from Vidas, fixing problems fast, and
                  continuously improving based on what our community needs.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div
              className="card border-0 shadow h-100 overflow-hidden rounded-3 position-relative"
              style={{ height: 220 }}
            >
              <Image
                src={Sustainability}
                alt="Sustainability illustration"
                width={640}
                height={400}
                className="w-100 h-100 object-fit-cover"
              />
              <div
                className="position-absolute bottom-0 start-0 w-100"
                style={{
                  height: "55%",
                  background:
                    "linear-gradient(180deg, rgba(4,6,34,0) 0%, rgba(4,6,34,0.75) 100%)",
                }}
              />
              <div className="position-absolute bottom-0 start-0 end-0 p-3">
                <h5 className="text-white mb-1">Sustainability</h5>
                <p className="text-white-50 small mb-1">
                  Empowering reuse, local transactions, and circular trade to
                  minimize waste and protect our planet
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeStandFor;
