import { IVariables } from '@tamm/app-composer';
import fetchCategories from '../../../services/category';
import { getAlertTextAndStatus } from './getAlertTextAndStatus';

export const useFetchCategories = (
  natureId: string | undefined,
  state: IVariables,
  updateStore: Function,
) =>
  fetchCategories(natureId)
    .then((data: any) => {
      if (natureId) {
        updateStore({
          ...state,
          subCategories: data,
          loading: false,
        });
      } else {
        updateStore({
          ...state,
          categories: data,
          showCategories: true,
          loading: false,
        });
      }
    })
    .catch((error: any) => {
      console.error(error);
      if (natureId) {
        updateStore({
          ...state,
          subCategories: [],
          loading: false,
          showError: true,
          ...getAlertTextAndStatus(error),
        });
      } else {
        updateStore({
          ...state,
          categories: [],
          loading: false,
          showError: true,
          showCategories: false,
          ...getAlertTextAndStatus(error),
        });
      }
    });
