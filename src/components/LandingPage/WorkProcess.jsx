"use client";
import Image from "next/image";
import React from "react";
import Arrow from "../../../public/assets/Arrow.svg";
import { placeholderImage, t } from "@/utils";
import { settingsData } from "@/redux/reuducer/settingSlice";
import { useSelector } from "react-redux";
import { CurrentLanguageData } from "@/redux/reuducer/languageSlice";
import Image1 from "../../../public/assets/info-page/alarm-icon.png";
import Image2 from "../../../public/assets/info-page/anchor-icon.png";
import Image3 from "../../../public/assets/info-page/listing-icons.png";
import Image4 from "../../../public/assets/info-page/achivement-icons.png";

const WorkProcess = () => {
  const systemSettingsData = useSelector(settingsData);
  const settings = systemSettingsData?.data;
  const CurrentLanguage = useSelector(CurrentLanguageData);

  return (
    <section className="gradientBg" id="work_process">
      <div className="container">
        <div className="main_work">
          <div className="main_work">
            <h1
              className="fw-bold display-5"
              style={{
                fontFamily: "DM Serif Display",
                fontWeight: 400,
                fontStyle: "normal", // Regular → normal in CSS
                fontSize: "60px",
                lineHeight: "65px",
                letterSpacing: "0%",
                textAlign: "center",
                color: "#3658BF",
              }}
            >
              <span>How It</span>{" "}
              <span style={{ color: "#F26052" }}>Works</span>.
            </h1>

            <p>
              {t("unravelingThe")} {""} {settings?.company_name} {""}{" "}
              {t("workProcess")}
            </p>
          </div>
        </div>
        <div className="main_process">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="main_content">
                <span className="count">
                  <Image src={Image3} alt="Listing" width={60} height={60} />
                </span>
                <span className="count_title">{t("listingMadeEasy")}</span>
                <span className="count_decs">{t("createAds")}</span>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="main_content">
                <span className="count">
                  <Image src={Image1} alt="Listing" width={60} height={60} />
                </span>
                <span className="count_title">{t("instantReach")}</span>
                <span className="count_decs">{t("connectVastAudience")}</span>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="main_content">
                <span className="count">
                  {" "}
                  <Image src={Image2} alt="Listing" width={60} height={60} />
                </span>
                <span className="count_title">{t("effortlessConnection")}</span>
                <span className="count_decs">
                  {t("interactSecureMessaging")}
                </span>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="main_content">
                <span className="count">
                  {" "}
                  <Image src={Image4} alt="Listing" width={60} height={60} />
                </span>
                <span className="count_title">{t("enjoyBenefits")}</span>
                <span className="count_decs">{t("reapRewards")}</span>
              </div>
            </div>
          </div>
          <div className="arrow_div">
            <Image
              src={Arrow}
              alt="arrow"
              width={0}
              height={0}
              className="first_arrow"
              onErrorCapture={placeholderImage}
            />
            <Image
              src={Arrow}
              alt="arrow"
              width={0}
              height={0}
              className="sec_arrow"
              onErrorCapture={placeholderImage}
            />
            <Image
              src={Arrow}
              alt="arrow"
              width={0}
              height={0}
              className="third_arrow"
              onErrorCapture={placeholderImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
