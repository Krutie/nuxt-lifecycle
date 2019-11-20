// i18n configuration
const en = require("../lang/en-AU.js");
const hi = require("../lang/hi-IN.js");

const I18N = {
    locales: [
        {
            code: "en",
            iso: "en-AU",
            name: "English",
            file: "en-AU.js"
        },
        {
            code: "hi",
            iso: "hi-IN",
            name: "हिंदी",
            file: "hi-IN.js"
        }
    ],
    defaultLocale: "en",
    strategy: "prefix_except_default",
    lazy: false,
    seo: true,
    parsePages: false,
    langDir: "lang/",
    routes: {},
    vueI18n: {
        fallbackLocale: "en",
        messages: { en, hi }
    }
};

module.exports = {
    I18N
};
