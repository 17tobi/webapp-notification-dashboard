import Validator from "@/validators/Validator";
import {ValidationRuleInput} from "@/declarations/ValidationRuleInput";
import i18n from "@/plugins/i18n";
import StringHelper from "@/helpers/StringHelper";

export class NumberValidator extends Validator {

	protected static readonly REASON_NAN = 0;
	protected static readonly REASON_TOO_SMALL = 1;
	protected static readonly REASON_TOO_BIG = 2;

	protected min: number | null = null;
	protected max: number | null = null;

	public constructor(label: string, translateLabel: boolean = true, min: number | null = null, max: number | null = null) {
		super(label, translateLabel);
		this.min = min;
		this.max = max;
	}

	protected validate(value: ValidationRuleInput): boolean | string {
		if (value === null || StringHelper.isEmpty(value.toString())) return this.success();

		const number = Number(value);

		if (isNaN(number)) {
			return this.fail(NumberValidator.REASON_NAN);
		}
		if (this.min !== null && number < this.min) {
			return this.fail(NumberValidator.REASON_TOO_SMALL);
		}
		if (this.max !== null && number > this.max) {
			return this.fail(NumberValidator.REASON_TOO_BIG);
		}

		return this.success();
	}

	protected validationFailedMessage(label: string, reason: number): string {
		switch (reason) {
			case NumberValidator.REASON_TOO_SMALL:
				return i18n.t('validation.numberTooSmall', {field: label, min: this.min}).toString();
			case NumberValidator.REASON_TOO_BIG:
				return i18n.t('validation.numberTooBig', {field: label, max: this.max}).toString();
			case NumberValidator.REASON_NAN:
			default:
				return i18n.t('validation.numberTooSmall', {field: label}).toString();
		}

	}

}
