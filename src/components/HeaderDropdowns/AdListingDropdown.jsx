"use client";
import dynamic from 'next/dynamic';
import { t, truncate } from "@/utils";
import React from "react";
import { Dropdown } from "antd";
import { IoIosAddCircleOutline } from "react-icons/io";
const ProfileDropdown = dynamic(() => import("../Profile/ProfileDropdown.jsx"));

const AdListingDropdown = ({
  closeDrawer,
  settings,
  handleLogout,
  isAdListingClicked,
  handleCheckLogin,
}) => {
  const menuItems = [
    {
      key: "register",
      label: (
        <div className="text-center">
          <button
            className="ad_listing w-100"
            disabled={isAdListingClicked}
            onClick={handleCheckLogin}
          >
            <IoIosAddCircleOutline size={18} className="ad_listing_icon" />
            <span className="adlist_btn" title={t("adListing")}>
              {truncate(t("adListing"), 12)}
            </span>
          </button>
          <hr />
          <ProfileDropdown
            closeDrawer={closeDrawer}
            settings={settings}
            handleLogout={handleLogout}
            isDrawer={false}
          />
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
    <Dropdown {...dropdownProps}>
      <div className="item_add">
        <button
          className="ad_listing"
          //   disabled={isAdListingClicked}
          //   onClick={handleCheckLogin}
        >
          <IoIosAddCircleOutline size={18} className="ad_listing_icon" />
          <span className="adlist_btn" title={t("adListing")}>
            {truncate(t("adListing"), 12)}
          </span>
        </button>
      </div>
    </Dropdown>
  );
};

export default AdListingDropdown;
