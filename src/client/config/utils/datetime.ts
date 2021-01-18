export const getDateFromTimeStamp = (timestamp: number) => {
  const date = new Date(timestamp);
  const monthsArr = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const year = date.getFullYear(); // Year
  const month = monthsArr[date.getMonth()]; // Month
  const day = date.getDate(); // Day

  return `${month} ${day}, ${year}`;
};
