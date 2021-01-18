import { IVariables } from '@tamm/app-composer';

const validation = (props: IVariables) => {
  const {
    returnPage: { documents },
  } = props;
  return !!documents.length;
};

export default validation;
