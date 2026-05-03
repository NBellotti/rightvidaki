import { Dropdown } from "antd";
import Image from "next/image";
import { IoMdArrowDropdown } from "react-icons/io";

import { useDispatch, useSelector } from "react-redux";
import {
  CurrentCurrencyData,
  setCurrentCurrency,
} from "@/redux/reuducer/currencySlice";

const CurrencyDropdown = ({ settings }) => {
  const CurrentCurrency = useSelector(CurrentCurrencyData);

  const currencies = settings && settings?.currencies;
  const dispatch = useDispatch();
  const handleLanguageSelect = (prop) => {
    const lang = currencies?.find((item) => item.id === Number(prop.key));
    if (CurrentCurrency.id === lang.id) {
      return;
    }
    dispatch(setCurrentCurrency(lang));
    window?.location?.reload()
  };
  const items =
    currencies &&
    currencies.map((currency) => ({
      label: (
        <span className="lang_options">
          <span>{currency?.code?.toLowerCase()}</span>
          <span>{currency.symbol}</span>
        </span>
      ),
      key: currency.id,
    }));

  const menuProps = {
    items,
    onClick: handleLanguageSelect,
  };

  return (
    <Dropdown menu={menuProps} className="language_dropdown">
      <span className="d-flex align-items-center">
        <span>{CurrentCurrency?.code?.toLowerCase()}</span>
        <span>{CurrentCurrency?.symbol}</span>
        <span>{currencies?.length > 1 ? <IoMdArrowDropdown /> : <></>}</span>
      </span>
    </Dropdown>
  );
};

export default CurrencyDropdown;
