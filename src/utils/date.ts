import moment from 'moment';

export const transformDateTime = (org: string) => moment(org).format('YYYY-MM-DD HH:mm:ss');
export const transformDate = (org: string) => moment(org).format('YYYY-MM-DD');
export const transformTime = (org: string) => moment(org).format('HH:mm:ss');
export const compareDate = (date1: string, date2: string): number =>
  moment(date1).diff(date2, 'seconds');
