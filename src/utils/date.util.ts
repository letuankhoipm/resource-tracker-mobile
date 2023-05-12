import moment from 'moment';

export function getFirstDayOfWeek(): string {
  return moment().startOf('week').format('YYYY-MM-DD');
}

export function getLastDayOfWeek(): string {
  return moment().endOf('week').format('YYYY-MM-DD');
}

export function formatDate(date: any): string {
  return moment(date).format('MMM DD, YYYY');
}
