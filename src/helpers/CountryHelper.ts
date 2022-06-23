import i18n from "@/plugins/i18n";
import {getName} from "i18n-iso-countries";

export default class CountryHelper {

	public static countryName(isoAbbr: string | null, lang: string | null = null): string | null {
		if (isoAbbr === null) return null;

		if (lang === null) {
			const locale = i18n.locale;
			lang = locale.substr(0, 2).toUpperCase();
		} else {
			lang = lang.toUpperCase();
		}

		return getName(isoAbbr, lang) ?? null;
	}

}
