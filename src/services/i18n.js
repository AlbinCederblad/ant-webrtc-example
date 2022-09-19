import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "menu_home": "Home",
      "menu_devices": "Devices",
      "menu_settings": "Settings",
    }
  },
  sv: {
    translation: {
      "menu_home": "Hem",
      "menu_devices": "Enheter",
      "menu_settings": "Inställningar",
    },
  }
};

i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'sv',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    debug: false,
    compatibilityJSON: 'v3'
  });

export default i18next;
