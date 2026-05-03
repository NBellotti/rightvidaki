'use client'
import Image from "next/image";
import OurMissionImage from "../../../public/assets/info-page/our-mission.jpg";

const  MissionSection = ({missionText = (<p
            className="mt-3"
            style={{
              fontFamily: "Roboto",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "24px",
              lineHeight: "100%",
              letterSpacing: "0",
            }}
          >
            To make technology accessible, useful, and delightful for people and
            businesses around the world. We believe that great digital products
            start with empathy and grow through continuous improvement. Every
            feature we ship, every update we make — it's all rooted in listening
            to our community and responding with care.
          </p>)}) => {
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
              fontSize: "60px",
              lineHeight: "65px",
              letterSpacing: "0%",
            }}
          >
            <span style={{ color: "#3658BF" }}>Our</span>{" "}
            <span style={{ color: "#F37545" }}>Mission</span>
          </h2>

          {missionText}
        </div>

        {/* Image Section - Responsive */}
        <div className="col-md-6 text-center">
          <div className="relative w-100 h-auto">
            <Image
              src={OurMissionImage}
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
}
export default MissionSection