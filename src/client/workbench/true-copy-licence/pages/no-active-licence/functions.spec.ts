/* eslint-disable camelcase */
import { init, f1_onClick } from './functions';

describe('economicRecordCertificate/pages/no-active-licence', () => {
  let props: any;
  props = {
    actions: {
      update: jest.fn(),
    },
  };
  describe('init functions', () => {
    it('should properly call init', () => {
      init(props);
    });
  });
  describe('f1_onClick functions', () => {
    it('should properly call f1_onClick', () => {
      f1_onClick(props);
    });
  });
});
