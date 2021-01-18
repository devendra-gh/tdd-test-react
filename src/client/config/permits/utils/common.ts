import moment from 'moment';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const calculateSum = (items: any[], prop: string) => {
  const total = items.reduce((a, b) => {
    // eslint-disable-next-line security/detect-object-injection
    return a + parseFloat(b[prop]);
  }, 0);
  return total;
};

const formatDateForEstimatedFees = (date: string) => {
  return moment(date).format('MMM DD, YYYY');
};
const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
};
export { calculateSum, formatDateForEstimatedFees, slugify };
