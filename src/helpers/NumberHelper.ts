export default class NumberHelper {

	public static roundToFraction(amount: number, fraction: number): number {
		return Math.round((Math.round(amount / fraction) * fraction) * 100) / 100;
	}

	public static roundToHalf(amount: number): number {
		return this.roundToFraction(amount, 0.5);
	}

	public static roundToQuarter(amount: number): number {
		return this.roundToFraction(amount, 0.25);
	}

}
