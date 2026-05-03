'use client'
import Image from "next/image";
import WorldMapImg from "../../../public/assets/info-page/world-map.png";

function WhereWeWork() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center gy-4">
          <div className="col-12 col-lg-5">
            <h2
              className="mb-2"
              style={{
                fontFamily: "Manrope",
                fontWeight: 400,
                fontStyle: "normal", // Regular → normal
                fontSize: "60px",
                lineHeight: "65px",
                letterSpacing: "0%",
                color: "#3658BF",
              }}
            >
              Where We <span style={{ color: "#F26052" }}>Work</span>
            </h2>

            <p
              className="text-muted mb-2"
              style={{
                fontFamily: "Roboto",
                fontWeight: 400,
                fontStyle: "normal", // Regular → normal
                fontSize: "24px",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              While our team is remote-first, we have roots in:
            </p>
          </div>
          <div className="col-12 col-lg-7">
            <div
              className="position-relative rounded-3 overflow-hidden shadow-sm"
              style={{ minHeight: 380, background: "#fff" }}
            >
              <Image
                src={WorldMapImg}
                alt="World map"
                fill
                className="object-fit-cover"
                style={{
                  opacity: 0.98,
                  filter: "contrast(1.08) saturate(1.02)",
                }}
              />
              {/* Pin markers */}
              {[
                { label: "Estonia", left: "56%", top: "50%" },
                { label: "Denmark", left: "46%", top: "56%" },
                { label: "Serbia", left: "57%", top: "34%" },
                { label: "Turkey", left: "66%", top: "69%" },
              ].map((pin, i) => (
                <div
                  key={i}
                  className="position-absolute"
                  style={{
                    left: pin.left,
                    top: pin.top,
                    transform: "translate(-50%, -100%)",
                  }}
                >
                  <div className="text-center" style={{ width: 84 }}>
                    <span
                      className="d-block"
                      style={{
                        color: "#0F2B5B",
                        fontSize: "12px",
                        fontWeight: 500,
                        textShadow: "0 1px 0 rgba(255,255,255,0.8)",
                      }}
                    >
                      {pin.label}
                    </span>
                    <div
                      className="mx-auto"
                      style={{ width: 2, height: 24, background: "#F26052" }}
                    />
                    <div
                      className="rounded-circle mx-auto"
                      style={{
                        width: 12,
                        height: 12,
                        background: "#F26052",
                        boxShadow: "0 0 0 3px #fff",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhereWeWork;
