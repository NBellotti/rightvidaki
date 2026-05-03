"use client";
import { setCurrentLanguage } from "@/redux/reuducer/languageSlice";
import { getLanguageApi } from "@/utils/api";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

export default function SettingsSetter({ initialLang, initialCountry }) {
  const dispatch = useDispatch();
  useEffect(async () => {
    let lang = initialLang || "en";
    const res = await getLanguageApi.getLanguage({
      language_code: lang,
      type: "web",
    });
    if (res?.data?.error === true) {
      toast.error(res?.data?.message);
    } else {
      dispatch(setCurrentLanguage(res?.data?.data));
    }
  }, [initialLang]);

  return null; // Component renders nothing
}
