import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { IVariables } from '@tamm/app-composer';
import Form from './index';
import { IFormFieldType } from './Types'
import  * as formTest  from './index'


describe('<Form />', () => {
  it('renders', () => {
    const wrapper = shallow(<MemoryRouter><Form /></MemoryRouter>);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders with props', () => {
    const fields: Array<IFormFieldType> = [
      {
        name: 'tradeNameEn',
        label: 'Trade Name English',
        type: 'input',
        disabled:()=> true
      },
      {
        name: 'tradeNameAr',
        defaultValue: 'testValue',
        label: 'Trade Name Arabic',
        type: 'radio',
        validation: ['required'],
        options:[
          {
            label:'hello omar',
            value:'omar'
          },
          {
            label:'thank',
            value:'mahmoud'
          }
        ],
      },
      {
        name: 'tradeNameAr',
        defaultValue: 'testValue',
        label: 'Trade Name Arabic',
        type: 'checkbox',
        validation: ['required'],
        options:[
          {
            label:'hello omar',
            value:'omar'
          },
          {
            label:'thank',
            value:'mahmoud'
          }
        ],
      },
      {
        name: 'tradeNameAr',
        defaultValue: 'testValue',
        label: 'Trade Name Arabic',
        type: 'select',
        validation: ['required'],
        options:[
          {
            label:'hello omar',
            value:'omar'
          },
          {
            label:'thank',
            value:'mahmoud'
          }
        ],
      },
      {
        name: 'havePartners',
        label: 'Have partners',
        type: 'date',
      },
      {
        name: 'noType',
        label: 'Some text',
        type: 'textarea',
      },
      {
        name: 'noType2',
        label: 'Some text',
        type: 'component',
        component:()=>{}
      },
      {
        name: 'noType3',
        label: 'Some text',
        type: 'section',
        fields:[
          {
            name: 'noType4',
            label: 'Some text',
            type: 'button'
          },
        ]
      },
      {
        name: 'noType4',
        label: 'Some text',
        type: 'button'
      },
      {
        name: 'noType4',
        label: 'Some text',
        type: 'wrong'
      },
      {
        name: 'businessType',
        type: 'select',
        options: [
          { value: 'establishment', label: 'Establishment' },
          { value: 'LLC', label: 'LLC' },
        ],
      },
    ];
    const formProps = {
      onChange:()=>{},
      fields,
      formData:{
        tradeNameEn:'value'
      }
    }
    const wrapper = mount(
      <MemoryRouter>
        <Form form={formProps} />
      </MemoryRouter>,
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('renders with onSubmit', () => {
    const fields: Array<IFormFieldType> = [
      {
        name: 'tradeNameEn',
        label: 'Trade Name English',
        type: 'input',
      },
      {
        name: 'tradeNameAr',
        defaultValue: 'testValue',
        label: 'Trade Name Arabic',
        type: 'input',
      },
      {
        name: 'havePartners',
        label: 'Have partners',
        type: 'input',
      },
      {
        name: 'noType',
        label: 'Some text',
        type: 'textarea',
      },
    ];
    const formProps = {
      onChange:()=>{},
      fields
    }
    const wrapper = mount(
      <MemoryRouter>
        <Form
          form={formProps}
          onSubmit={(inputs: IVariables, props: IVariables) => {
            console.log('inputs', inputs, 'props', props);
          }}
        />
      </MemoryRouter>,
    );
    expect(wrapper.exists()).toBe(true);

    // const form = wrapper.find('form').first();
    // form.simulate('submit');
  });

  describe('isVisibleField', () => {
    it('should return true when field visible return true', () => {
      const field = {
        name:'name',
        type:'radio',
        visible: ()=> true
      }
      const formData = {
        name: 'value'
      }
      const result = formTest.formActions.isVisibleField(field,formData);
      expect(result).toBe(true);
    });
    it('should return false when field hidden return true', () => {
      const field = {
        name:'name',
        type:'radio',
        hidden: ()=> true
      }
      const formData = {
        name: 'value'
      }
      const result = formTest.formActions.isVisibleField(field,formData);
      expect(result).toBe(false);
    });
    it('should return false when field visible return false', () => {
      const field = {
        name:'name',
        type:'radio',
        visible: ()=> false
      }
      const formData = {
        name: 'value'
      }
      const result = formTest.formActions.isVisibleField(field,formData);
      expect(result).toBe(false);
    });
  });


  describe('getVisibleFields', () => {
    it('should return 1  visible fields when field visible return true', () => {
      const fields = [
        {
          name:'name',
          type:'radio',
          visible: ()=> true
        },
        {
          name:'name',
          type:'radio',
          visible: ()=> false
        }
      ]
      const formData = {
        name: 'value'
      }
      const result = formTest.formActions.getVisibleFields(fields, formData);
      expect(result.length).toEqual(1);
    });
    it('should return 2  visible fields when field visible return true and sub fields', () => {
      const fields = [
        {
          name:'name',
          type:'radio',
          visible: ()=> true
        },
        {
          name:'name',
          type:'section',
          fields:[{
            name:'name',
            type:'radio',
            visible: ()=> true
          }]
        }
      ]
      const formData = {
        name: 'value'
      }
      const result = formTest.formActions.getVisibleFields(fields, formData);
      expect(result.length).toEqual(2);
    });
  });

  describe('checkFieldValidationErrors', () => {
    it('should return array of object with error message  if unvalid value', () => {
      const field = {
        name:'name',
        type:'radio',
        validation:['phone']
      }
      const value =  'asdf'
      const result = formTest.formActions.checkFieldValidationErrors(field,value);
      expect(result).toEqual([{"message": "form.error.phone"}]);
    });

    it('should return false  if valid value', () => {
      const field = {
        name:'name',
        type:'radio',
        validation:()=>['phone']
      }
      const value =  '971558282854';
      const result = formTest.formActions.checkFieldValidationErrors(field,value);
      expect(result).toEqual(false);
    });
  });


  describe('getFormSubmithandler', () => {
    beforeEach(() => {
      jest.resetModules();
    });
    it('should validate field -> if errors setErrors', () => {
      const fields = [{
        name:'name',
        type:'radio',
        validation:['phone']
      }]
      const formData =  {};
      const setFieldErrors = jest.fn(data => data);
      const props = {
        onSubmit: jest.fn()
      }
      const event = {
        preventDefault: jest.fn()
      }
      jest.spyOn(formTest.formActions,'checkFieldsValidationErrors').mockImplementation(()=>({
        name:[{message:'reqired'}]
      })) 
      const result = formTest.formActions.getFormSubmithandler(fields, formData, setFieldErrors, props.onSubmit)(event);
      expect(setFieldErrors.mock.calls[0][0]()).toEqual({ name: [ { message: 'reqired' } ] });
    });
 
  });
  

  describe('checkFieldsValidationErrors', () => {
    beforeEach(() => {
      jest.clearAllMocks()
      jest.resetAllMocks()
      jest.restoreAllMocks()
    });
    it('should return array of object with error message  if unvalid value', () => {
      
      const fields = [
        {
          name:'name1',
          type:'radio'
        },
        {
          name:'name2',
          type:'radio'
        },
        {
          name:'name',
          type:'section',
          fields:[
            {
              name:'name3',
              type:'radio'
            }
          ]
        }
      ]
      const formData = {
        name: 'value'
      }
      //const mock = jest.spyOn(formTest.formActions.formActions() , 'checkFieldValidationErrors');  // spy on otherFn
      //mock.mockReturnValue('mocked value');  // mock the return value
      jest.spyOn(formTest.formActions,'checkFieldValidationErrors').mockImplementation(()=>([{message:'error'}]))
      const result = formTest.formActions.checkFieldsValidationErrors(fields, formData);
      expect(result).toEqual({"name": [{"message": "error"}], "name1": [{"message": "error"}], "name2": [{"message": "error"}], "name3": [{"message": "error"}]});
    });
    it('should return false  if there is no error', () => {
      
      const fields = [
        {
          name:'name1',
          type:'radio'
        }
      ]
      const formData = {
        name: 'value'
      }
      //const mock = jest.spyOn(formTest.formActions.formActions() , 'checkFieldValidationErrors');  // spy on otherFn
      //mock.mockReturnValue('mocked value');  // mock the return value
      jest.spyOn(formTest.formActions,'checkFieldValidationErrors').mockImplementation(()=>false)
      const result = formTest.formActions.checkFieldsValidationErrors(fields, formData);
      expect(result).toEqual(false);
    });
  
  });
  
  describe('FormTemplate', () => {
    beforeEach(() => {
      jest.clearAllMocks()
      jest.resetAllMocks()
      jest.restoreAllMocks()
    });
    it('form template return error message if there is any error', () => {
      console.log = jest.fn();
      jest.spyOn(formTest.formActions,'getVisibleFields').mockImplementation(()=> { throw new Error('error') })
      const result = formTest.FormTemplate({});
      expect(result).toEqual("Error while loading the form, check the browser log.");
    });
  
  });


  describe('getInputChangeHandler', () => {
    let inputChangeHandler: any;
    let form: any;
    let formData: any;
    let setFieldErrors: any;
    let field: any;
    let props: any;

    beforeEach(()=>{
      field = {
        name:'field',
        type:'input'
      }
      form = {
        onChange: jest.fn()
      };
      formData = {}
      setFieldErrors = ()=>{}
      props = {};
      inputChangeHandler = (event: any)=> formTest.formActions.getInputChangeHandler(form,formData, setFieldErrors, props )(field)(event);
    })

    it('should call form onChange with object values of input if field is  checkbox', () => {
      field.type = 'checkbox';
      formData = {
        field:{value1: true}
      }
      const event = {
        persist: ()=>{}, 
        target:{
          value:'value2',
          checked:true
        }
      }
      inputChangeHandler(event)
      expect(form.onChange).toBeCalledWith({},{"field": {"value1": true, "value2": true}})
    });

    it('should call form onChange with object values of input if field is  checkbox and field not has value', () => {
      field.type = 'checkbox';
      formData = {}
      const event = {
        persist: ()=>{}, 
        target:{
          value:'value2',
          checked:true
        }
      }
      inputChangeHandler(event)
      expect(form.onChange).toBeCalledWith({},{"field": {"value2": true}})
    });
 
    it('should call form onChange with value of input if field is  input', () => {
      field.type = 'input';
      formData = {
        field:{value1: true}
      }
      const event = {
        persist: ()=>{}, 
        target:{
          value:'value2',
        }
      }
      inputChangeHandler(event)
      expect(form.onChange).toBeCalledWith({},{"field": 'value2'})
    });
    it('should call field onChange with value of input if field is  input', () => {
      field.type = 'input';
      field.onChange = jest.fn();
      formData = {
        field:{value1: true}
      }
      const event = {
        persist: ()=>{}, 
        target:{
          value:'value2',
        }
      }
      inputChangeHandler(event)
      expect(field.onChange).toBeCalledWith({},'value2')
    });
    
  });


});
