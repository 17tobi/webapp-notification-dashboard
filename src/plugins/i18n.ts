import Vue from 'vue'
import VueI18n, { DateTimeFormats, LocaleMessages } from 'vue-i18n'

Vue.use(VueI18n)

function loadLocaleMessages(): LocaleMessages {
	const locales = require.context('../locales', true, /[A-Za-z0-9-_,\s]+\.json$/i);
	const messages: LocaleMessages = {};

	locales.keys().forEach(key => {
		const matched = key.match(/([A-Za-z0-9-_]+)\./i);

		if (matched !== null && matched.length > 1) {
			const locale = matched[1];
			messages[locale] = locales(key);
		}
	});

	return messages;
}

function createDateTimeFormats(): DateTimeFormats {
	const foundLocales: string[] = [];
	const locales = require.context('../locales', true, /[A-Za-z0-9-_,\s]+\.json$/i);
	locales.keys().forEach(key => {
		const matched = key.match(/([A-Za-z0-9-_]+)\./i);

		if (matched !== null && matched.length > 1) {
			const locale = matched[1];
			if (!foundLocales.includes(locale)) {
				foundLocales.push(locale);
			}
		}
	});

	const dateTimeFormats: DateTimeFormats = {};
	foundLocales.forEach(locale => {
		dateTimeFormats[locale] = {
			short: {
				year: 'numeric', month: 'short', day: '2-digit'
			},
			long: {
				year: 'numeric', month: 'short', day: '2-digit',
				weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: false
			},
			time: {
				hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
			},
			timeShort: {
				hour: '2-digit', minute: '2-digit', hour12: false,
			},
			dayNumeric: {
				day: '2-digit',
			},
			dayMonth: {
				day: '2-digit', month: 'short',
			},
			dayMonthLong: {
				day: '2-digit', month: 'long',
			},
			dayMonthYearShort: {
				day: '2-digit', month: '2-digit', year: '2-digit',
			},
			dayMonthYear: {
				day: '2-digit', month: '2-digit', year: 'numeric',
			},
			dayMonthYearLong: {
				day: '2-digit', month: 'long', year: 'numeric',
			},
			month: {
				month: 'short',
			},
			monthNumeric: {
				month: '2-digit',
			},
			monthYear: {
				month: 'short', year: 'numeric',
			},
			monthYearLong: {
				month: 'long', year: 'numeric',
			},
			yearNumeric: {
				year: 'numeric',
			},
			weekDay: {
				weekday: 'short',
			},
			weekDayLong: {
				weekday: 'long',
			},
			customString: {
				weekday: "long", day: '2-digit', month: '2-digit', year: 'numeric',
			}
		}
	});

	return dateTimeFormats;
}

export default new VueI18n({
	locale: process.env.VUE_APP_I18N_LOCALE || 'de-CH',
	fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'de-CH',
	messages: loadLocaleMessages(),
	dateTimeFormats: createDateTimeFormats(),
})
