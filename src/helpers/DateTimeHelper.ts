import i18n from "@/plugins/i18n";

export default class DateTimeHelper {

	//sortDates
	public static sort(d1: Date, d2: Date, asc = true): number {
		const stamp1 = d1.getTime();
		const stamp2 = d2.getTime();

		if (stamp1 < stamp2) {
			return asc ? -1 : 1;
		} else if (stamp1 > stamp2) {
			return asc ? 1 : -1;
		} else {
			return 0;
		}
	}

	//getFirstOfMonth
	public static firstOfMonth(date: Date): Date {
		return new Date(date.getFullYear(), date.getMonth(), 1);
	}

	//getLastOfMonth
	public static lastOfMonth(date: Date): Date {
		return new Date(date.getFullYear(), date.getMonth() + 1, 0);
	}

	//getMonday
	public static mondayOfWeek(date: Date): Date {
		const day = date.getDay();
		const diff = date.getDate() - day + (day === 0 ? -6 : 1);
		return new Date(date.setDate(diff));
	}

	//getWeekNumber
	public static weekNumber(date: Date): number {
		// duplicate date
		const dateInternal = new Date(date);
		// ISO week date weeks start on Monday, so correct the day number
		const nDay = (dateInternal.getDay() + 6) % 7;
		// ISO 8601 states that week 1 is the week with the first Thursday of that year
		// Set the target date to the Thursday in the target week
		dateInternal.setDate(dateInternal.getDate() - nDay + 3);
		// Store the millisecond value of the target date
		const n1stThursday = dateInternal.valueOf();
		// Set the target to the first Thursday of the year
		// First, set the target to January 1st
		dateInternal.setMonth(0, 1);
		// Not a Thursday? Correct the date to the next Thursday
		if (dateInternal.getDay() !== 4) {
			dateInternal.setMonth(0, 1 + ((4 - dateInternal.getDay()) + 7) % 7);
		}
		// The week number is the number of weeks between the first Thursday of the year
		// and the Thursday in the target week (604800000 = 7 * 24 * 3600 * 1000)
		return 1 + Math.ceil((n1stThursday - dateInternal.valueOf()) / 604800000);
	}

	//getISO8601DayIndex
	public static dayIndex(date: Date): number {
		const day = date.getDay();
		return day === 0 ? 7 : day;
	}

	public static isSameDay(date1: Date, date2: Date): boolean {
		return date1.getFullYear() === date2.getFullYear()
			&& date1.getMonth() === date2.getMonth()
			&& date1.getDate() === date2.getDate();
	}

	public static isToday(date: Date): boolean {
		return this.isSameDay(date, new Date());
	}

	public static isDateRangeActive(from: Date, to: Date | null): boolean {
		const now = new Date();

		if (from > now) {
			return false;
		}
		if (to !== null && to < now) {
			return false;
		}

		return true;
	}

	public static dayDifference(date1: Date, date2: Date, absoluteValue: boolean = true): number {
		const d1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
		const d2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
		const diff = Math.round((d2.valueOf() - d1.valueOf()) / (24 * 60 * 60 * 1000));
		return absoluteValue ? Math.abs(diff) : diff;
	}

	public static hoursDifference(date1: Date, date2: Date, absoluteValue: boolean = true): number {
		const d1 = Date.UTC(date1.getUTCFullYear(), date1.getUTCMonth(), date1.getUTCDate(), date1.getUTCHours(), date1.getUTCMinutes(), date1.getUTCSeconds(), date1.getUTCMilliseconds());
		const d2 = Date.UTC(date2.getUTCFullYear(), date2.getUTCMonth(), date2.getUTCDate(), date2.getUTCHours(), date2.getUTCMinutes(), date2.getUTCSeconds(), date2.getUTCMilliseconds());

		const diffHours = (d2.valueOf() - d1.valueOf()) / (60 * 60 * 1000);
		return absoluteValue ? Math.abs(diffHours) : diffHours;
	}

	public static toISODateString(date: Date): string {
		const year = i18n.d(date, 'yearNumeric');
		const month = i18n.d(date, 'monthNumeric');
		const day = i18n.d(date, 'dayNumeric');

		return `${year}-${month}-${day}`;
	}

	public static toISOTimeString(date: Date): string {
		return [
			date.getHours().toString().padStart(2, '0'),
			date.getMinutes().toString().padStart(2, '0'),
			date.getSeconds().toString().padStart(2, '0'),
		].join(':');
	}

	public static toISODateTimeString(date: Date): string {
		return date.toISOString();
	}

	public static createDateObjectFromTimeString(time: string | null): Date | null {
		if (time === null) return null;
		const parts = time.split(':').map(p => Number.parseFloat(p)); // float is needed for scientific notation (eg. 1E27)
		const ret = new Date();
		ret.setHours(parts[0]);
		ret.setMinutes(parts[1]);
		ret.setSeconds(parts[2]);
		return ret;
	}

	public static weekdayLabel(weekday: number, short: boolean = false): string {
		let date = new Date();
		while (date.getDay() !== weekday) {
			const newDate = new Date(date);
			newDate.setDate(newDate.getDate() + 1);
			date = newDate;
		}
		return i18n.d(date, short ? 'weekDay' : 'weekDayLong').toString();
	}

}
