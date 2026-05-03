const countryToCurrency = {
  US: "USD", // United States
  CA: "CAD", // Canada
  GB: "GBP", // United Kingdom
  AF: "AFN", // Afghanistan
  AL: "ALL", // Albania
  AM: "AMD", // Armenia
  AZ: "AZN", // Azerbaijan
  BG: "BGN", // Bulgaria
  BA: "BAM", // Bosnia and Herzegovina
  BY: "BYN", // Belarus
  BD:  "BDT", // Bangladesh
  CAN: "CAD", // Canada
  CZ: "CZK", // Czech Republic
  CY: "EUR", // Cyprus
  DE: "EUR", // Germany
  DK: "DKK", // Denmark
  EE: "EUR", // Estonia
  FI: "EUR", // Finland
  GE: "GEL", // Georgia
  GR: "EUR", // Greece
  HR: "EUR", // Croatia
  HU: "HUF", // Hungary
  IS: "ISK", // Iceland
  KZ: "KZT", // Kazakhstan
  KG: "KGS", // Kyrgyzstan
  LT: "EUR", // Lithuania
  LV: "EUR", // Latvia
  ME: "EUR", // Montenegro
  MK: "MKD", // North Macedonia
  MD: "MDL", // Moldova
  MN: "MNT", // Mongolia
  PL: "PLN", // Poland
  RO: "RON", // Romania
  RU: "RUB", // Russia
  RS: "RSD", // Serbia
  SK: "EUR", // Slovakia
  SI: "EUR", // Slovenia
  SE: "SEK", // Sweden
  TJ: "TJS", // Tajikistan
  TM: "TMT", // Turkmenistan
  TR: "TRY", // Turkey
  UA: "UAH", // Ukraine
  UZ: "UZS"  // Uzbekistan,
  
};

export const getCurrencyByCountryCode = (countryCode) => {
  return countryToCurrency[countryCode] || 'USD';
}