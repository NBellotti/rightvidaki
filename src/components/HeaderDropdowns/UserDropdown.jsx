"use client";
import { t } from "@/utils";
import React from "react";
import { Dropdown } from "antd";
import { FiUsers } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
const UserDropdown = ({ onLogin, onRegister }) => {
  const menuItems = [
    {
      key: "register",
      label: (
        <div className="text-center">
          <h5 className="fw-semibold text-dark mb-2">
            {t("welcomeTo")} Vidaki!
          </h5>
          <hr className="my-2" />
          <button className="verf_email_add_btn mb-2" onClick={onRegister}>
            {t("createAccount")}
          </button>
          <div>
            {t("haveAccount")}?{" "}
            <a
              href="#"
              className="theme-primary-color fw-semibold"
              onClick={onLogin}
            >
              {t("logIn")}
            </a>
          </div>
        </div>
      ),
    },
  ];

  const dropdownProps = {
    menu: {
      items: menuItems,
    },
    placement: "bottomRight",
    trigger: ["click"],
    overlayClassName: "user-dropdown-menu",
  };

  return (
    // <Dropdown {...dropdownProps} >
    <button onClick={onLogin} className="verf_email_add_btn rounded-pill d-flex align-items-center ">
      <span className="d-flex align-items-center">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-plus me-1"
            viewBox="0 0 16 16"
          >
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
        </span>

        <FiUsers size={24} />
        <IoMdArrowDropdown />
      </span>
    </button>
    // </Dropdown>
  );
};

export default UserDropdown;
