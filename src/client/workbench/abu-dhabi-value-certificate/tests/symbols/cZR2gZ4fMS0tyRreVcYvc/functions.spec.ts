/* eslint-disable camelcase */
import {
  call_f1_onClick as f1,
  f2_onChange,
} from '../../../symbols/cZR2gZ4fMS0tyRreVcYvc/functions';

describe('Symbol function', () => {
  it('should update props when change handler is called', () => {
    const contactDetails = {
      contactName: 'Zakaria Abdul',
      contactEmail: 'zakari.abdul@aue.co',
      contactNumber: '+741 344 343443',
    };
    const contactForm = {
      name: 'Zakaria Abdul',
      email: 'zakari.abdul@aue.co',
      mobileNumber: '+741 344 343443',
    };
    const user = {
      'First Name AR': 'Abdul Zakaria',
      Mobile: '+971 498 8987',
      'User Email': 'abdul.zakaria@aue.co',
    };

    const props: any = {
      actions: {
        contactForm: {
          update: jest.fn(),
        },
        isContact: {
          update: jest.fn(),
        },
      },
    };
    props.isContact = false;
    props.user = user;
    props.local = 'ar';
    props.contactForm = contactForm;
    props.contactDetails = contactDetails;
    f1(props)(false);
    expect(props.actions.contactForm.update).toHaveBeenCalled();
  });

  it('should call f2_onChange', () => {
    const props: any = {};
    f2_onChange(props);
  });
});
