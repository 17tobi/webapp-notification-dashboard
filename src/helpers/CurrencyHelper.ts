import i18n from "@/plugins/i18n";
import NumberHelper from "@/helpers/NumberHelper";

export default class CurrencyHelper {

	public static formatCurrency(amount: string | number | null, currency: string = 'CHF'): string | null {
		if (amount === null) return null;
		if (typeof amount === 'string') {
			amount = parseFloat(amount);
			if (isNaN(amount)) return 'NaN';
		}

		return new Intl.NumberFormat(i18n.locale, {
			style: 'currency',
			currency: currency.toLocaleUpperCase(),
		}).format(amount);
	}

	public static roundToFiveCents(amount: number): number {
		return NumberHelper.roundToFraction(amount, 0.05);
	}

}
