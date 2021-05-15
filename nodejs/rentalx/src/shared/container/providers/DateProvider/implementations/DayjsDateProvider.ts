import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

import { IDateProvider } from '../IDateProvider';

dayjs.extend(utc);

class DayjsDateProvider implements IDateProvider {
  checkIsBefore(start_date: Date, end_date: Date): boolean {
    return dayjs(start_date).isBefore(end_date);
  }

  compareInDays(start_date: Date, end_date: Date): number {
    return dayjs(this.convertoUTC(end_date)).diff(
      this.convertoUTC(start_date),
      'days',
    );
  }

  dateNow(): Date {
    return dayjs().toDate();
  }

  addDays(days: number, reference_date: Date = null): Date {
    const date = reference_date ? dayjs(reference_date) : dayjs();
    return date.add(days, 'day').toDate();
  }

  addHours(hours: number, reference_date: Date): Date {
    const date = reference_date ? dayjs(reference_date) : dayjs();
    return date.add(hours, 'hour').toDate();
  }

  convertoUTC(date: Date): string {
    return dayjs(date).utc().local().format();
  }

  compareInHours(start_date: Date, end_date: Date): number {
    return dayjs(this.convertoUTC(end_date)).diff(
      this.convertoUTC(start_date),
      'hours',
    );
  }
}

export { DayjsDateProvider };
