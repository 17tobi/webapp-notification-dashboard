export default class StringHelper {

	public static isEmpty(str: string | null | undefined, ignoreWhitespaces: boolean = true): boolean {
		if (str === null || str === undefined) return true;
		if (ignoreWhitespaces) {
			str = str.replace(/\s/, '');
		}

		return str.length === 0;
	}

	public static convertToTag(val: string | null | undefined): string | null {
		if (val === undefined || val === null) return null;
		return val
			.trim()
			.replace(/[-_]/g, ' ')
			.replace(/[^\wäÄöÖüÜéÉàÀèÈêÊ]/g, ' ')
			.split(/\s+/g)
			.map(w => w.charAt(0).toLocaleUpperCase() + w.substr(1))
			.join(' ')
			.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word) {
				return word.toUpperCase();
			})
			.replace(/\s+/g, '');
	}

	public static firstCharsOfWords(str: string | null, toUppercase: boolean = true): string | null {
		if (StringHelper.isEmpty(str) || str === null) return null;

		return str.trim().split(/\s{1,}/).reduce((acc: string, cur: string): string => {
			let char = Array.from(cur)[0]; // unicode works this way :)
			if (toUppercase) char = char.toLocaleUpperCase();
			return acc + char;
		}, '');
	}

}
