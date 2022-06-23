import Validator from "@/validators/Validator";
import {ValidationRuleInput} from "@/declarations/ValidationRuleInput";
import i18n from "@/plugins/i18n";
import StringHelper from "@/helpers/StringHelper";

export class StringLengthValidator extends Validator {

	private static readonly REASON_TOO_SHORT = 0;
	private static readonly REASON_TOO_LONG = 1;

	private readonly minLength: number | null;
	private readonly maxLength: number | null;

	public constructor(label: string, translateLabel: boolean = true, minLength: number | null = null, maxLength: number | null = null) {
		super(label, translateLabel);
		this.minLength = minLength;
		this.maxLength = maxLength;
	}

	protected validate(value: ValidationRuleInput): boolean | string {
		if (value === null || StringHelper.isEmpty(value.toString())) return this.success();
		const length = value.toString().length;

		if (this.minLength !== null && length < this.minLength) {
			return this.fail(StringLengthValidator.REASON_TOO_SHORT);
		}
		if (this.maxLength !== null && length > this.maxLength) {
			return this.fail(StringLengthValidator.REASON_TOO_LONG);
		}

		return this.success();
	}

	protected validationFailedMessage(label: string, reason: number | null = null): string {
		if (reason === StringLengthValidator.REASON_TOO_SHORT) {
			return i18n.t('validation.stringLengthTooShort', {field: label, min: this.minLength}).toString();
		}
		return i18n.t('validation.stringLengthTooLong', {field: label, max: this.maxLength}).toString();
	}

}
