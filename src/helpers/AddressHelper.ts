import StringHelper from "@/helpers/StringHelper";

export default class AddressHelper {

	public static createPhoneString(phone: string | null | undefined, countryCode: string | null = null): string | null {
		if (phone === null || phone === undefined) return null;

		if (countryCode === null) {
			countryCode = 'CH';
		}

		const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();
		const phoneNumberFormat = require('google-libphonenumber').PhoneNumberFormat;
		const number = phoneUtil.parse(phone, countryCode);

		return phoneUtil.format(number, phoneNumberFormat.E164);
	}

	/*private static fieldsToLine(...data: (string | null)[]): string | null {
		const ret = data.filter(e => e !== null).join(' ');
		return StringHelper.isEmpty(ret) ? null : ret;
	}

	public static geocodingString(model: IAddressSimple | AddressCreate | AddressUpdate, separator: string = ',', urlEncode: boolean = true): string {
		const str = [
			model.company,
			model.address1,
			model.address2,
			this.fieldsToLine(model.street, model.houseNumber),
			this.fieldsToLine(model.zip, model.city),
			model.countryCode,
		]
			.filter(l => l !== null)
			.join(separator);

		return urlEncode ? encodeURI(str) : str;
	}

	public static googleMapsLink(model: IAddressSimple | AddressCreate | AddressUpdate): string {
		return `https://www.google.ch/maps/search/${this.geocodingString(model, ',', true)}`;
	}*/

	public static googleMapsLink(location: string): string {
		return `https://www.google.ch/maps/search/${location}`;
	}

}
