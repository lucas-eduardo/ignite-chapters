interface IDateProvider {
  compareInHours(start_date: Date, endDate: Date): number;
  compareInDays(start_date: Date, endDate: Date): number;

  convertoUTC(date: Date): string;
  dateNow(): Date;

  addDays(days: number, reference_date: Date): Date;
  addHours(hours: number, reference_date: Date): Date;

  checkIsBefore(start_date: Date, end_date: Date): boolean;
}

export { IDateProvider };
