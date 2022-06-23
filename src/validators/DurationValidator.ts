import RegexValidator from "@/validators/RegexValidator";

export class DurationValidator extends RegexValidator {

	private static readonly DURATION_PATTERN_ALLOW_NEGATIVE = /^-?\d+(:([0-9]|[0-5][0-9]))?(:([0-9]|[0-5][0-9]))?$/i;
	private static readonly DURATION_PATTERN_FULL_ALLOW_NEGATIVE = /^-?\d+(:[0-5][0-9])(:[0-5][0-9])$/i;
	private static readonly DURATION_PATTERN = /^\d+(:([0-9]|[0-5][0-9]))?(:([0-9]|[0-5][0-9]))?$/i;
	private static readonly DURATION_PATTERN_FULL = /^\d+(:[0-5][0-9])(:[0-5][0-9])$/i;

	private allowNegative!: boolean;

	public constructor(label: string, translateLabel: boolean = true, fullFormat: boolean = true, allowNegative: boolean = false) {
		let regex: RegExp;
		if (allowNegative) {
			regex = fullFormat ? DurationValidator.DURATION_PATTERN_FULL_ALLOW_NEGATIVE : DurationValidator.DURATION_PATTERN_ALLOW_NEGATIVE;
		} else {
			regex = fullFormat ? DurationValidator.DURATION_PATTERN_FULL : DurationValidator.DURATION_PATTERN;
		}

		super(label, translateLabel, regex);
		this.allowNegative = allowNegative;
	}

}
