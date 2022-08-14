import moment from 'moment';

export const transformDateTime = (org: string) => moment(org).format('YYYY-MM-DD HH:mm:ss');
export const transformDate = (org: string) => moment(org).format('YYYY-MM-DD');
export const transformTime = (org: string) => moment(org).format('HH:mm:ss');
export const compareDate = (date1: string, date2: string): number =>
  moment(date1).diff(date2, 'seconds');

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
