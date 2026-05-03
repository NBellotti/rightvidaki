"use client";
import MedalImage from "../../../public/assets/info-page/medal.png";
import CommunityImage from "../../../public/assets/info-page/communities.png";
import wordOfMouthImage from "../../../public/assets/info-page/word-of-mouth.png";
import RequirementsImage from "../../../public/assets/info-page/requirements.png";
import Image from "next/image";

const OurStory = () => {
  return (
    <div className="container my-5">
      {/* Top Row */}
      <div className="row justify-content-between text-center">
        <div className="col-md-3 mb-5">
          <div className="story-card shadow rounded bg-white position-relative p-4">
            {/* Floating Icon */}
            <div className="icon-wrapper">
              <Image src={MedalImage} alt="Trophy" width={50} height={50} />
            </div>
            <p className="story-text mt-4">
              Launching our first MVP in a small coworking space
            </p>
          </div>
        </div>

        <div className="col-md-3 mb-5">
          <div className="story-card shadow rounded bg-white position-relative p-4">
            <div className="icon-wrapper">
              <Image src={CommunityImage} alt="Globe" width={50} height={50} />
            </div>
            <p className="story-text mt-4">
              Expanding across 30+ countries in Europe, Central Asia, and the
              South Caucasus, adapting to diverse cultural and economic
              realities
            </p>
          </div>
        </div>
      </div>

      {/* Center Text */}
      <div className="row justify-content-center text-center mb-5">
        <div className="col-md-10">
          <h2 className="our-story-title mb-4">
            <span style={{ color: "#3658BF" }}>Our</span>{" "}
            <span style={{ color: "#F37545" }}>Story</span>
          </h2>
          <p className="story-paragraph">
            What began as a side project among innovators across Eurasia has
            evolved into a trusted platform serving thousands of Vidas. We
            started with a shared belief that trade should be fair, accessible,
            and meaningful — blending traditional collective exchange with the
            convenience of modern technology to enable not just commerce, but
            connection.
            <br />
            From humble beginnings, Vidaki has grown into a platform that serves Vidas across every
corner of Eurasia, guided by feedback and inspired by the collectives we serve.
            <br />
            Our journey includes:
          </p>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="row justify-content-between text-center">
        <div className="col-md-3 mb-5">
          <div className="story-card shadow rounded bg-white position-relative p-4">
            <div className="icon-wrapper">
              <Image src={wordOfMouthImage} alt="Ear" width={50} height={50} />
            </div>
            <p className="story-text mt-4">
              Scaling through word-of-mouth and authentic connections from Vidas
              around the world
            </p>
          </div>
        </div>

        <div className="col-md-3 mb-5">
          <div className="story-card shadow rounded bg-white position-relative p-4">
            <div className="icon-wrapper">
              <Image
                src={RequirementsImage}
                alt="Shield"
                width={50}
                height={50}
              />
            </div>
            <p className="story-text mt-4">
              Staying independent and user-focused at every step
            </p>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .story-card {
          padding-top: 3rem; /* add extra space for floating icon */
        }
        .icon-wrapper {
          position: absolute;
          top: -25px;
          left: 50%;
          transform: translateX(-50%);
          background: white;
          padding: 10px;
          border-radius: 50%;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        .story-text {
          font-family: "Roboto", sans-serif;
          font-weight: 400;
          font-style: normal;
          font-size: 17.34px;
          line-height: 100%;
          letter-spacing: 0;
          text-align: center;
          padding: 12px;
          height: 150px;
        }
        .our-story-title {
          font-family: "Manrope", sans-serif;
          font-weight: 400;
          font-style: normal;
          font-size: 60px;
          line-height: 65px;
          letter-spacing: 0;
          text-align: center;
        }
        .story-paragraph {
          font-family: "Roboto", sans-serif;
          font-weight: 400;
          font-style: normal;
          font-size: 30px;
          line-height: 100%;
          letter-spacing: 0;
          text-align: center;
          color: #555; /* optional for readability */
        }
      `}</style>
    </div>
  );
};

export default OurStory;
