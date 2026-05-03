"use client";
import { t } from "@/utils";
import Link from "next/link";

const SubHeader = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="shopping_items d-flex justify-content-center gap-3 overflow-auto flex-nowrap px-2">
            <Link href="/ad-listing" className="shopping_cat text-nowrap footer_links">
              {t("postAd")}
            </Link>
            <Link href="/ads" className="shopping_cat text-nowrap footer_links">
              {t("myAdsDashboard")}
            </Link>
            <Link href="/favourites" className="shopping_cat text-nowrap footer_links">
              {t("savedSearchAlerts")}
            </Link>
            <Link href="/chat" className="shopping_cat text-nowrap footer_links">
              {t("dealsFreeStuff")}
            </Link>
            <Link href="/reviews" className="shopping_cat text-nowrap footer_links">
              {t("referralsInviteEarn")}
            </Link>
            <Link href="/blogs" className="shopping_cat text-nowrap footer_links">
              {t("blog")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
