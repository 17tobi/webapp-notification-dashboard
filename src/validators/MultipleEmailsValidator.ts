import RegexValidator from "@/validators/RegexValidator";
import EmailValidator from "@/validators/EmailValidator";
import i18n from "@/plugins/i18n";

export class MultipleEmailsValidator extends RegexValidator {

	public constructor(label: string, translateLabel: boolean = true) {
		const regex = new RegExp('^\\s*(' + EmailValidator.emailPattern + '\\s*;\\s*)*' + EmailValidator.emailPattern + '\\s*$');
		super(label, translateLabel, regex);
	}

	protected validationFailedMessage(label: string): string {
		return i18n.t('validation.invalidEmails', {label: label}).toString();
	}

}


