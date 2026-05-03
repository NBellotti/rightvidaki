"use client";
import Image from "next/image";
import PartnerWith from "../../../public/assets/info-page/partnerwith.png";

const WhoWePartnerWith = () => {
  return (
    <section className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h2
            className="text-danger fw-bold"
            style={{
              fontFamily: "DM Serif Display",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "40px",
              lineHeight: "65px",
              letterSpacing: "0%",
            }}
          >
            <span style={{ color: "#3658BF" }}>
              Who We <span style={{ color: "#F37545" }}>Partner</span> With
            </span>{" "}
          </h2>

          <p>Our partners include:</p>
          <ul>
            <li>Manufacturers and suppliers</li>
            <li>Logistics and delivery providers</li>
            <li>Payment and technology platforms </li>
            <li>Marketing and creative agencies</li>
            <li>Community and social impact organizations</li>
          </ul>
        </div>

        {/* Image Section - Responsive */}
        <div className="col-md-6 text-center">
          <div className="relative w-100 h-auto">
            <Image
              src={PartnerWith}
              alt="Mission"
              className="img-fluid rounded-lg shadow"
              style={{
                borderRadius: "10px",
                objectFit: "cover",
              }}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWePartnerWith;
