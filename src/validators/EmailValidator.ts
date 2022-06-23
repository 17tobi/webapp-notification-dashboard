import RegexValidator from "@/validators/RegexValidator";
import i18n from "@/plugins/i18n";

export default class EmailValidator extends RegexValidator {

	public static readonly emailPattern = '[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*';

	public constructor(label: string, translateLabel: boolean = true) {
		super(label, translateLabel, new RegExp('^' + EmailValidator.emailPattern + '$'));
	}

	protected validationFailedMessage(label: string): string {
		return i18n.t('validation.invalidEmail', {label: label}).toString();
	}

}
