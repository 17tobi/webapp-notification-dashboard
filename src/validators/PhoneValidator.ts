import Validator from "@/validators/Validator";
import {ValidationRuleInput} from "@/declarations/ValidationRuleInput";
import i18n from "@/plugins/i18n";
import StringHelper from "@/helpers/StringHelper";

export class PhoneValidator extends Validator {

	private readonly countryCode: string | null = null;

	public constructor(label: string, translateLabel: boolean = true, countryCode: string | null = null) {
		super(label, translateLabel);

		if (countryCode === null) {
			this.countryCode = 'CH';
		} else {
			this.countryCode = countryCode;
		}
	}

	protected validate(value: ValidationRuleInput): boolean | string {
		if (value === null || StringHelper.isEmpty(value.toString())) return this.success();

		if (value.toString().length >= 2) {
			const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();
			const number = phoneUtil.parse(value, this.countryCode);
			if (phoneUtil.isValidNumber(number)) return this.success();
		}

		return this.fail();
	}

	protected validationFailedMessage(label: string): string {
		return i18n.t('validation.invalidPhone', {field: label}).toString();
	}

}
