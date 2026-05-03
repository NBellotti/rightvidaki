import { useRouter } from 'next/router';
import Link from 'next/link';
import { getNavigation, getFeaturedLocations } from '../../config/navigation';
import LanguageSwitcher from '../LanguageSwitcher';

const translations = {
  en: {
    company: 'Company',
    support: 'Support',
    legal: 'Legal',
    connect: 'Connect with us',
    featuredLocations: 'Featured Locations',
    copyright: 'All rights reserved.',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    contactUs: 'Contact Us',
  },
  ru: {
    company: 'Компания',
    support: 'Поддержка',
    legal: 'Юридическая информация',
    connect: 'Связаться с нами',
    featuredLocations: 'Популярные места',
    copyright: 'Все права защищены.',
    privacyPolicy: 'Политика конфиденциальности',
    termsOfService: 'Условия использования',
    contactUs: 'Связаться с нами',
  },
  kk: {
    company: 'Компания',
    support: 'Қолдау',
    legal: 'Заңды ақпарат',
    connect: 'Бізбен байланысыңыз',
    featuredLocations: 'Танымал орындар',
    copyright: 'Барлық құқықтар қорғалған.',
    privacyPolicy: 'Құпиялылық саясаты',
    termsOfService: 'Пайдалану шарттары',
    contactUs: 'Бізбен байланысыңыз',
  },
  uz: {
    company: 'Kompaniya',
    support: 'Qo\'llab-quvvatlash',
    legal: 'Huquqiy ma\'lumot',
    connect: 'Biz bilan bog\'laning',
    featuredLocations: 'Mashhur joylar',
    copyright: 'Barcha huquqlar himoyalangan.',
    privacyPolicy: 'Maxfiylik siyosati',
    termsOfService: 'Foydalanish shartlari',
    contactUs: 'Biz bilan bog\'laning',
  }
};

export default function MultilingualFooter() {
  const router = useRouter();
  const locale = router.locale || 'en';
  const navigation = getNavigation(locale);
  const featuredLocations = getFeaturedLocations(locale);
  const t = translations[locale] || translations.en;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.company}</h3>
            <ul className="space-y-2">
              {navigation.pages.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <span className="mr-2">{page.icon}</span>
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.support}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/help"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  ❓ Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  📞 {t.contactUs}
                </Link>
              </li>
              <li>
                <Link
                  href="/safety"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  🔒 Safety Tips
                </Link>
              </li>
            </ul>
          </div>

          {/* Featured Locations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.featuredLocations}</h3>
            <ul className="space-y-2">
              {featuredLocations.slice(0, 4).map((location) => (
                <li key={location.href}>
                  <Link
                    href={location.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    <span className="mr-2">{location.country}</span>
                    {location.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Language */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.connect}</h3>
            <div className="space-y-4">
              <LanguageSwitcher />
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label="Facebook"
                >
                  📘
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label="Twitter"
                >
                  🐦
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label="Instagram"
                >
                  📷
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} eClassify. {t.copyright}
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                {t.privacyPolicy}
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                {t.termsOfService}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
