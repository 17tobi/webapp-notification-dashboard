import i18n from "@/plugins/i18n";
import DateTimeHelper from "@/helpers/DateTimeHelper";

export default class DurationHelper {

	public static durationDifference(date1: Date, date2: Date, absoluteValue: boolean = true): string {
		return this.hoursToDurationString(DateTimeHelper.hoursDifference(date1, date2, absoluteValue));
	}

	//formatDurationString
	public static format(duration: string | null, daysToHours: boolean = false): string | null {
		if (duration === null) return null;

		const isNegative = duration.charAt(0) === '-';
		if (isNegative) {
			duration = duration.substr(1);
		}

		const parts = duration.split(':').map(p => Number.parseFloat(p)); // float is needed for scientific notation (eg. 1E27)
		while (parts.length < 4) parts.unshift(0);

		if (daysToHours) {
			parts[1] += parts[0] * 24;
			parts[0] = 0;
		}

		const ret = [];
		if (isNegative) ret.push('- ');
		if (parts[0] !== 0) ret.push(i18n.t('uiTerms.numDaysDense', {days: parts[0]}));
		if (parts[1] !== 0) ret.push(i18n.t('uiTerms.numHoursDense', {hours: parts[1]}));
		if (parts[2] !== 0) ret.push(i18n.t('uiTerms.numMinutesDense', {minutes: parts[2]}));
		if (parts[3] !== 0) ret.push(i18n.t('uiTerms.numSecondsDense', {seconds: parts[3]}));

		if (ret.length === 0) {
			ret.push(i18n.t('uiTerms.numHoursDense', {hours: 0}));
		}

		return ret.join(' ');
	}

	//isDurationZeroOrEmpty
	public static isZeroOrEmpty(duration: string | null): boolean {
		if (duration === null) return true;
		return !duration.split(':').map(p => Number.parseFloat(p)).some(d => d > 0); // float is needed for scientific notation (eg. 1E27)
	}

	public static hoursToDurationString(numHours: number): string {
		const isNegative = numHours < 0;
		numHours = Math.abs(numHours);
		const hours = Math.floor(numHours);
		const minutes = Math.floor((numHours - hours) * 60);
		const seconds = Math.floor((numHours * 3600) % 60);
		return `${isNegative ? '-' : ''}${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
	}

	public static durationStringToHours(duration: string | null): number | null {
		if (duration === null) return null;

		const isNegative = duration.charAt(0) === '-';
		if (isNegative) {
			duration = duration.substr(1);
		}

		const parts = duration.split(':').map(p => Number.parseFloat(p));
		const ret = parts[0] + parts[1] / 60 + parts[2] / 3600;
		return isNegative ? ret * -1 : ret;
	}

	public static durationStringToMinutes(duration: string | null): number | null {
		if (duration === null) return null;

		const isNegative = duration.charAt(0) === '-';
		if (isNegative) {
			duration = duration.substr(1);
		}

		const parts = duration.split(':').map(p => Number.parseFloat(p)); // float is needed for scientific notation (eg. 1E27)
		const ret = parts[0] * 60 + parts[1] + parts[2] / 60;
		return isNegative ? ret * -1 : ret;
	}

}
