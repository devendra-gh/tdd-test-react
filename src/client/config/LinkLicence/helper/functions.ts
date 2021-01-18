import { IVariables } from '@tamm/app-composer';
import moment from 'moment';

// TODO: function to redirect
const handleRedirectLink = (props: IVariables, path: any) => {
  const {
    history: { push: redirectTo },
  } = props;
  redirectTo(path);
};

// format the date based on the format
export const getDateFromTimeStamp = (
  dateString?: string,
  dateOutputFormat: string = 'DD MMM YYYY', // date format 2 Aug 2018 =>other options Do MM YYYY
  dateInputFormat: string[] = ['DD MM YYYY'], // ["MM-DD-YYYY", "YYYY-MM-DD", "DD/MM/YYYY"]
) => {
  const dateInstance = moment(dateString, dateInputFormat);
  const dateObject =
    dateString && Date.parse(dateString) ? new Date(dateString) : new Date();
  const newDate = dateInstance.isValid() ? dateInstance : moment(dateObject);
  return newDate.format(dateOutputFormat);
};

export { handleRedirectLink };
