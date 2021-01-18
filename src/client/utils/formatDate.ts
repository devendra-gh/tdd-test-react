import moment from 'moment';

export const formatDateForTags = (date: string) => {
  return (date.length === 0 ? moment() : moment(date)).format('DD-MMM-YYYY');
};
