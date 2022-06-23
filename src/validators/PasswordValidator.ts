import RegexValidator from "@/validators/RegexValidator";
import i18n from "@/plugins/i18n";

export class PasswordValidator extends RegexValidator {

	private static readonly passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^[^a-zA-Z\d])[\s\S]{8,}$/;

	public constructor(label: string, translateLabel: boolean = true) {
		super(label, translateLabel, PasswordValidator.passwordPattern);
	}

	protected validationFailedMessage(label: string): string {
		return i18n.t('validation.invalidPassword', {label: label}).toString();
	}

}
