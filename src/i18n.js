import i18n from "i18next";

import {initReactI18next} from "react-i18next";

import transitionEN from "./locales/en/transitionEN.json";
import transitionTR from "./locales/tr/transitionTR.json";

const resources ={
    en: {
        transition: transitionEN
    },
    tr: {
        transition: transitionTR
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'tr',

        keySeparator: false,

        interpolation: {
            escapeValue: false
        }
    });


export default i18n;