import { IVariables } from "@tamm/app-composer";
import { SelectItemType} from './SelectItemType';

export interface IFormFieldType {
    name: string;
    placeholder?: string;
    type: any;
    label?: string;
    twoColumns?:boolean;
    fields?: any;
    defaultValue?: string;
    onChange?: any;
    validation?: any;
    component?: any;
    visible?: (formData: IVariables) => boolean;
    hidden?: (formData: IVariables) => boolean;
    disabled?: (formData: IVariables) => boolean;
    options?: Array<SelectItemType>;
  }