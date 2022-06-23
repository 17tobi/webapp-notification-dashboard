import i18n from "@/plugins/i18n";

export default class EnumHelper {

	public static toArray(e: any): { key: string; value: number }[] {
		return Object.keys(e)
			.filter(v => isNaN(Number(v)))
			.map((key: string) => {
				return {
					key: key,
					value: e[key],
				};
			});
	}

	public static toSelectItems(e: any, translateTexts: boolean | null = false): { text: string; value: number }[] {
		return this.toArray(e).map(kvp => {
			return {
				text: translateTexts ? i18n.t('constants.' + kvp.key).toString() : kvp.key,
				value: kvp.value,
			};
		});
	}

	public static textFromValue(e: any, v: number | string | null, translateText: boolean | null = false): string | null {
		if (v === null) {
			return null;
		}

		const entry = this.toArray(e).find(o => o.value === v);
		if (entry === undefined) {
			return null;
		}

		return translateText ? i18n.t('constants.' + entry.key).toString() : entry.key;
	}

}
