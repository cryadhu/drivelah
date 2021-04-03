import * as Localization from "expo-localization";
import i18n from "i18n-js";

import en from "./en.json";

i18n.fallbacks = true;
i18n.translations = { en };
i18n.locale = Localization.locale;
i18n.locale = "en";

export const string = (value, param) => i18n.t(value, param);

export default i18n;
