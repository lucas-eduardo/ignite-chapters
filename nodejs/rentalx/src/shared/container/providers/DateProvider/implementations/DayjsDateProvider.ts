import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

import { IDateProvider } from '../IDateProvider';

dayjs.extend(utc);

class DayjsPDateProvider implements IDateProvider {
  dateNow(): Date {
    return dayjs().toDate();
  }

  convertoUTC(date: Date): string {
    return dayjs(date).utc().local().format();
  }

  compareInHours(start_date: Date, endDate: Date): number {
    const end_date_utc = this.convertoUTC(endDate);
    const start_date_utc = this.convertoUTC(start_date);

    return dayjs(end_date_utc).diff(start_date_utc, 'hours');
  }
}

export { DayjsPDateProvider };
