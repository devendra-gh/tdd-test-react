import { IVariables } from '@tamm/app-composer';
import { getCustomComponentProps } from './formatHelpers';

describe('client/utils/workbench/formatHelpers', () => {
  describe('getCustomComponentProps', () => {
    let props: any;
    let definitionProps: any;

    beforeEach(() => {
      props = {
        i18n: jest.fn(i => i),
      };
      definitionProps = {
        localizedString: "Localized string: i18n('test')",
        onClick: (p: any) => {
          console.info('props', p);
        },
        call_onClick: (p: any) => {
          return () => {
            console.info('props', p);
          };
        },
        image: {
          type: 'file/image',
          fileId: 'fileId',
        },
      };
    });

    it('is function', () =>
      expect(getCustomComponentProps).toBeInstanceOf(Function));

    it('should format', () => {
      const componentProps: IVariables = getCustomComponentProps(
        props,
        definitionProps,
      );

      expect(componentProps.localizedString).toEqual('Localized string: test');
      expect(componentProps.image).toEqual('/api/file/image/fileId');
    });
  });
});
