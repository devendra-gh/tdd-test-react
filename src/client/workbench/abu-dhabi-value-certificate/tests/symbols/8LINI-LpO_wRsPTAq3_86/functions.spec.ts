import { call_f3_onChange as f3 } from '../../../symbols/8LINI-LpO_wRsPTAq3_86/functions';

describe('Symbol function', () => {
  it('should update props when change handler is called', () => {
    const props: any = {};
    props.privacyWaiver = true;
    props.fileUploads = [{ fileName: 'Employee Benefit Summary' }];
    props.actions = {
      isPrivacyWaiverChecked: {
        update: jest.fn(),
      },
      isSubmitButtonDisabled: {
        update: jest.fn(),
      },
    };
    f3(props)();
    expect(props.actions.isSubmitButtonDisabled.update).toHaveBeenCalledWith(
      true,
    );
  });
});
