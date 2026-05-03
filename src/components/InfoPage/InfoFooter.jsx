"use client";

import { settingsData } from "@/redux/reuducer/settingSlice";
import Link from "next/link";
import { useSelector } from "react-redux";

const InfoFooter = ({ title, secondTitle }) => {
  const systemSettingsData = useSelector(settingsData);
  const settings = systemSettingsData?.data;
  return (
    <section
      className="position-relative"
      style={{
        background: "#FFEC8D",
        padding: "4rem 0",
      }}
    >
      <div className="container position-relative" style={{ zIndex: 3 }}>
        <div className="row align-items-center">
          {/* Left side - Heading */}
          <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">{title}</div>

          {/* Right side - Description and contact */}
          <div className="col-lg-7 col-md-6">{secondTitle}</div>
        </div>
      </div>
    </section>
  );
};

export default InfoFooter;
