import { IVariables } from '@tamm/app-composer';
import { SelectItemType } from './SelectItemType';

export interface IFormFieldType {
  name: string;
  placeholder?: string;
  type: any;
  label?: string;
  fields?: any;
  children?: any;
  defaultValue?: string;
  onChange?: any;
  validation?: any;
  component?: any;
  visible?: (formData: IVariables) => boolean;
  hidden?: (formData: IVariables) => boolean;
  disabled?: (formData: IVariables) => boolean;
  options?: SelectItemType[];
  props?: IVariables;
}
