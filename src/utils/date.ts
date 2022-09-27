import { expired_time_map } from '@/constants/expired_time';
import moment from 'moment';

moment.suppressDeprecationWarnings = true;

export const transformDateTime = (org: string) => moment(org).format('YYYY-MM-DD HH:mm:ss');
export const transformDate = (org: string) => moment(org).format('YYYY-MM-DD');
export const transformTime = (org: string) => moment(org).format('HH:mm:ss');

export const compareDate = (
  date1: string,
  date2: string,
  accuracy?: moment.unitOfTime.Diff
): number => moment(date1).diff(date2, accuracy || 'seconds');
export const dateFromNow = (to: string, accuracy?: moment.unitOfTime.Diff) =>
  compareDate(moment().format('YYYY-MM-DD HH:mm:ss'), to, accuracy || 'day');

export const getTimeState = () => {
  const timeNow = new Date();
  const hours = timeNow.getHours();
  if (hours >= 0 && hours <= 12) {
    return `上午好`;
  } else if (hours > 12 && hours <= 18) {
    return `下午好`;
  } else if (hours > 18 && hours <= 24) {
    return `晚上好`;
  }
  return 'Hi';
};

export const transformSecondsToHours = (sec: number) => {
  return expired_time_map.find(item => item.value === sec)?.label;
};
