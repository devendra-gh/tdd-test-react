import { IVariables } from '@tamm/app-composer';
import documents from './documents';
import {
  PERMIT_TYPE_ANNUAL,
  PERMIT_TYPE_EVENT,
} from '../../utils/getPermitTypes';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('documents', () => {
  let props: any;
  beforeEach(() => {
    props = {
      permitDetails: {
        permitType: PERMIT_TYPE_ANNUAL,
      },
    };
  });
  it('should export documents', () => {
    expect(documents).toBeInstanceOf(Object);
  });
  it('should call conditionalBehaviour', () => {
    const DOCUMENTS: Record<string, IVariables> = documents;
    Object.entries(DOCUMENTS).forEach(document => {
      document[1].collection.forEach((doc: IVariables) => {
        if (document[0] === PERMIT_TYPE_ANNUAL)
          expect(doc.conditionalBehaviour(props)).toBeTruthy();
        else if (document[0] === PERMIT_TYPE_EVENT)
          expect(doc.conditionalBehaviour(props)).toBeFalsy();
        else expect(doc.conditionalBehaviour).toBeUndefined();
      });
    });
  });
});
