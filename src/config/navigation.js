// Navigation configuration for different languages
export const navigationConfig = {
  en: {
    pages: [
      { name: 'About Us', href: '/about', icon: '🏢' },
      { name: 'Help Center', href: '/help', icon: '❓' },
      { name: 'Safety Tips', href: '/safety', icon: '🔒' },
      { name: 'Blog', href: '/blog', icon: '📝' },
    ],
    categories: [
      { name: 'Electronics', href: '/electronics', icon: '📱' },
      { name: 'Vehicles', href: '/vehicles', icon: '🚗' },
      { name: 'Real Estate', href: '/real-estate', icon: '🏠' },
      { name: 'Jobs', href: '/jobs', icon: '💼' },
    ]
  },
  ru: {
    pages: [
      { name: 'О нас', href: '/about', icon: '🏢' },
      { name: 'Центр помощи', href: '/help', icon: '❓' },
      { name: 'Советы безопасности', href: '/safety', icon: '🔒' },
      { name: 'Блог', href: '/blog', icon: '📝' },
    ],
    categories: [
      { name: 'Электроника', href: '/electronics', icon: '📱' },
      { name: 'Транспорт', href: '/vehicles', icon: '🚗' },
      { name: 'Недвижимость', href: '/real-estate', icon: '🏠' },
      { name: 'Работа', href: '/jobs', icon: '💼' },
    ]
  },
  kk: {
    pages: [
      { name: 'Біз туралы', href: '/about', icon: '🏢' },
      { name: 'Көмек орталығы', href: '/help', icon: '❓' },
      { name: 'Қауіпсіздік кеңестері', href: '/safety', icon: '🔒' },
      { name: 'Блог', href: '/blog', icon: '📝' },
    ],
    categories: [
      { name: 'Электроника', href: '/electronics', icon: '📱' },
      { name: 'Көліктер', href: '/vehicles', icon: '🚗' },
      { name: 'Жылжымайтын мүлік', href: '/real-estate', icon: '🏠' },
      { name: 'Жұмыс', href: '/jobs', icon: '💼' },
    ]
  },
  uz: {
    pages: [
      { name: 'Biz haqimizda', href: '/about', icon: '🏢' },
      { name: 'Yordam markazi', href: '/help', icon: '❓' },
      { name: 'Xavfsizlik maslahatlari', href: '/safety', icon: '🔒' },
      { name: 'Blog', href: '/blog', icon: '📝' },
    ],
    categories: [
      { name: 'Elektronika', href: '/electronics', icon: '📱' },
      { name: 'Transport', href: '/vehicles', icon: '🚗' },
      { name: 'Ko\'chmas mulk', href: '/real-estate', icon: '🏠' },
      { name: 'Ish', href: '/jobs', icon: '💼' },
    ]
  }
};

// Get navigation items for a specific locale
export function getNavigation(locale = 'en') {
  return navigationConfig[locale] || navigationConfig.en;
}

// Featured locations for SEO
export const featuredLocations = {
  en: [
    { name: 'Used Cars in Uzbekistan', href: '/location/uzbekistan/used-cars', country: 'UZ' },
    { name: 'Electronics in Georgia', href: '/location/georgia/electronics', country: 'GE' },
    { name: 'Jobs in Kazakhstan', href: '/location/kazakhstan/jobs', country: 'KZ' },
    { name: 'Real Estate in Kyrgyzstan', href: '/location/kyrgyzstan/real-estate', country: 'KG' },
  ],
  ru: [
    { name: 'Подержанные авто в Узбекистане', href: '/location/uzbekistan/used-cars', country: 'UZ' },
    { name: 'Электроника в Грузии', href: '/location/georgia/electronics', country: 'GE' },
    { name: 'Работа в Казахстане', href: '/location/kazakhstan/jobs', country: 'KZ' },
    { name: 'Недвижимость в Кыргызстане', href: '/location/kyrgyzstan/real-estate', country: 'KG' },
  ],
  kk: [
    { name: 'Өзбекстандағы қолданылған көліктер', href: '/location/uzbekistan/used-cars', country: 'UZ' },
    { name: 'Грузиядағы электроника', href: '/location/georgia/electronics', country: 'GE' },
    { name: 'Қазақстандағы жұмыс', href: '/location/kazakhstan/jobs', country: 'KZ' },
    { name: 'Қырғызстандағы жылжымайтын мүлік', href: '/location/kyrgyzstan/real-estate', country: 'KG' },
  ],
  uz: [
    { name: 'O\'zbekistonda ishlatilgan mashinalar', href: '/location/uzbekistan/used-cars', country: 'UZ' },
    { name: 'Gruziyada elektronika', href: '/location/georgia/electronics', country: 'GE' },
    { name: 'Qozog\'istonda ish', href: '/location/kazakhstan/jobs', country: 'KZ' },
    { name: 'Qirg\'izistonda ko\'chmas mulk', href: '/location/kyrgyzstan/real-estate', country: 'KG' },
  ]
};

// Get featured locations for a specific locale
export function getFeaturedLocations(locale = 'en') {
  return featuredLocations[locale] || featuredLocations.en;
}
