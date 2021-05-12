interface IDateProvider {
  compareInHours(start_date: Date, endDate: Date): number;
  convertoUTC(date: Date): string;
  dateNow(): Date;
}

export { IDateProvider };
