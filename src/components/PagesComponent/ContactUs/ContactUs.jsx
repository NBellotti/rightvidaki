"use client";

import QuickAnswerAccordion from "@/components/LandingPage/QuickAnswerAccordion";
import NoData from "@/components/NoDataFound/NoDataFound";
import { settingsData } from "@/redux/reuducer/settingSlice";
import { t, validateForm } from "@/utils";
import { contactUsApi, getFaqApi } from "@/utils/api";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

export default function ContactUs() {
  const systemSettingsData = useSelector(settingsData);
  const [IsLoading, setIsLoading] = useState(false);
  const [Faq, setFaq] = useState([]);
  const [faqIsLoading, setFaqIsLoading] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm(formData)) return;
    try {
      setIsLoading(true);
      const res = await contactUsApi.contactUs(formData);
      res?.data?.error === false
        ? toast.success(t("thankForContacting"))
        : toast.error(t("errorOccurred"));
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      toast.error(t("errorOccurred"));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await getFaqApi.getFaq();
        setFaq(res?.data?.data || []);
      } catch (e) {
        console.error(e);
      } finally {
        setFaqIsLoading(false);
      }
    })();
  }, []);

  return (
    <div
      className="min-vh-100 py-5"
      style={{
        background:
          "linear-gradient(180deg, #ffec8d, rgba(255,255,255,1) 100%)",
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold hero-font-color">
            Contact <span className="text-second">Us</span> 
          </h1>
          <p className="fs-5 text-muted">
            Get in touch with us! Whether you have questions, feedback, or need
            support, we're here to help.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center mb-5">
          <h4 className="fw-semibold text-dark mb-2">Need Help Fast?</h4>
          <p className="text-muted">
            Most questions are answered in our resources:
          </p>
          <div className="d-flex flex-wrap gap-3 justify-content-center mt-3">
            {[
              ["Help Center", "/report-a-problem"],
              ["Safety Guidelines", "/safe-trading-guide"],
              ["Terms of Use", "/pages/terms-and-conditions"],
              ["Privacy Policy", "/pages/privacy-policy"],
            ].map(([label, link]) => (
              <a
                key={label}
                href={link}
                className="text-decoration-none fw-bold text-primary"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="row g-5 align-items-start">
          {/* Left Info */}
          <div className="col-lg-6">
            <h3 className="fw-bold hero-font-color mb-3">Contact Support</h3>
            <hr />
            <div className="mb-4">
              <h5 className="fw-semibold">General Support</h5>
              <p>Questions, account issues, listings, payments</p>
              <div className="d-flex flex-wrap align-items-center gap-3">
                <a href="mailto:support@vidaki.com" className="text-primary">
                  support@vidaki.com
                </a>
                <span className="badge bg-success-subtle text-success fw-semibold">
                  Response: 24–48 hours
                </span>
              </div>
            </div>

            <div className="mb-4">
              <h5 className="fw-semibold">Safety & Security</h5>
              <p>Report scams, fraud, or suspicious activity</p>
              <a href="mailto:safety@vidaki.com" className="text-primary">
                safety@vidaki.com
              </a>
              <div className="mt-2">
                <span className="badge bg-success-subtle text-success fw-semibold">
                  Response: Within 24 hours (priority)
                </span>
              </div>
            </div>

            <div className="mb-4">
              <h5 className="fw-semibold">Legal & Privacy</h5>
              <p>GDPR requests, copyright issues, legal matters</p>
              <div className="d-flex flex-wrap gap-3">
                <a href="mailto:legal@vidaki.com" className="text-primary">
                  legal@vidaki.com
                </a>
                <a href="mailto:privacy@vidaki.com" className="text-primary">
                  privacy@vidaki.com
                </a>
              </div>
              <span className="badge bg-success-subtle text-success fw-semibold mt-2">
                Response: 2–5 business days
              </span>
            </div>

            <div className="mb-4">
              <h5 className="fw-semibold">Business Inquiries</h5>
              <p>Partnerships, advertising, media</p>
              <a href="mailto:business@vidaki.com" className="text-primary">
                business@vidaki.com
              </a>
              <div className="mt-2">
                <span className="badge bg-success-subtle text-success fw-semibold">
                  Response: 2–5 business days
                </span>
              </div>
            </div>

            <div>
              <h5 className="fw-semibold ">Office Address</h5>
              <address>
                Vidaki Online Services OÜ
                <br />
                [Insert Address], [City, Postal Code], Estonia
              </address>
              <small className="text-muted">
                For fastest service, please email us.
              </small>
            </div>
          </div>

          {/* Right Form */}
          <div className="col-lg-6">
            <div className="card shadow-sm border-0">
              <div className="card-body p-4 bg-app-primary text-white rounded-3">
                <h4 className="fw-semibold mb-4">{t("sendMessage")}</h4>
                <form onSubmit={handleSubmit}>
                  {["name", "email", "subject"].map((field) => (
                    <div key={field} className="mb-3">
                      <label className="form-label text-white text-capitalize">
                        {t(field)}
                      </label>
                      <input
                        type={field === "email" ? "email" : "text"}
                        name={field}
                        className="form-control"
                        placeholder={t(
                          `enter${
                            field.charAt(0).toUpperCase() + field.slice(1)
                          }`
                        )}
                        value={formData[field]}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  ))}
                  <div className="mb-3">
                    <label className="form-label text-white">
                      {t("message")}
                    </label>
                    <textarea
                      name="message"
                      className="form-control"
                      rows="5"
                      placeholder={t("enterMessage")}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={IsLoading}
                    className="secondary__btn"
                  >
                    {IsLoading ? "Loading..." : t("submit")}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Language Section */}
        <div className="text-center my-5">
          <h2 className="fw-bold hero-font-color mb-3">Multilingual Support</h2>
          <p className="lead text-muted">
            We support all official languages across our 38 operating countries.
            Please indicate your preferred language in your email subject line.
          </p>
        </div>

        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-header bg-light">
                <h5 className="mb-0 text-dark">European Languages</h5>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Albanian, Belarusian, Bosnian, Bulgarian, Croatian, Czech,
                  Danish, Estonian, Finnish, German, Greek, Hungarian,
                  Icelandic, Latvian, Lithuanian, Macedonian, Montenegrin,
                  Polish, Romanian, Russian, Serbian, Slovak, Slovenian,
                  Swedish, Turkish, Ukrainian
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-header bg-light">
                <h5 className="mb-0 text-dark">Central Asian Languages</h5>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Dari, Kazakh, Kyrgyz, Mongolian, Pashto, Tajik, Turkmen, Uzbek
                </p>
              </div>
            </div>
          </div>
        </div>

           
        <div className="row justify-content-center">
            <div className="col-lg-12">
                <div className="card border-0 shadow bg-transparent">
                    <div className="card-body p-4">
                        <h4 className="card-title fw-bold text-danger">⚠️ Emergency Situations</h4>
                        
                        <h6 className="card-text fw-bold">If you're experiencing immediate danger or criminal activity:</h6>
                        
                        <ol className="list-group list-group-numbered border-0">
                            <li className="list-group-item d-flex align-items-start border-0 bg-transparent">
                              
                                <span>Contact local police or emergency services immediately</span>
                            </li>
                            <li className="list-group-item d-flex align-items-start border-0 bg-transparent">
                                
                                <span>Then report the incident to us at safety@vidaki.com</span>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    

        {/* FAQ */}
        <div className="mt-5">
          <h2 className="fw-bold text-center hero-font-color mb-4">
            Quick Answers
          </h2>
          {faqIsLoading ? (
            <div className="text-center py-4">Loading...</div>
          ) : Faq?.length > 0 ? (
            <QuickAnswerAccordion Faq={Faq} />
          ) : (
            <NoData name={t("faqs")} />
          )}
        </div>
      </div>
    </div>
  );
}
