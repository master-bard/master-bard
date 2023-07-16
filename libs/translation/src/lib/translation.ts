import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi, { HttpBackendOptions } from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init<HttpBackendOptions>({
    debug: true,
    fallbackLng: undefined,
    lng: 'en',
    defaultNS: 'en',
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/{{ns}}.json',
      allowMultiLoading: true,

    },
    detection: {
      order: [
        'cookie',
        'querystring',
        'localStorage',
        'sessionStorage',
        'navigator',
        'htmlTag',
        'path',
        'subdomain',
      ],
      caches: ['cookie'],
    },
    react: { useSuspense: false },
  });

export default i18n;
