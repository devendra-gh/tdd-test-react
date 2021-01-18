import {
  deleteFullDocument,
  saveFullDocument,
  saveDocument,
} from 'server/api/internal/upload';

jest.mock('multer');
jest.mock('fs', () => {
  return { unlink: jest.fn(), writeFileSync: jest.fn(), mkdirSync: jest.fn() };
});
describe('upload', () => {
  it('should call saveDocument', () => {
    const documentType = 'MOA_DOCUMENT';
    const fileName = 'name';
    const data = {};
    saveDocument(documentType, fileName, data);

    // expect(res).toBe({});
  });

  it('should call saveDocument with wrong type', () => {
    const documentType = 'no type';
    const fileName = 'name';
    const data = {};
    saveDocument(documentType, fileName, data);

    // expect(out).toBe({});
  });

  it('should call saveFullDocument', () => {
    const documentType = 'CERTIFICATE';
    const fileName = 'name';
    const data = {};
    saveFullDocument(documentType, fileName, data);
    // expect(out).toBe({});
  });

  it('should call saveFullDocument with wrong type', () => {
    const documentType = 'no type';
    const fileName = 'name';
    const data = {};
    saveFullDocument(documentType, fileName, data);
    // expect(out).toBe({});
  });

  it('should call deleteFullDocument', () => {
    const documentType = 'CERTIFICATE';
    const fileName = 'name';
    deleteFullDocument(documentType, fileName);
    // expect(out).toBe({});
  });

  it('should call deleteFullDocument with wrong type', () => {
    const documentType = 'no type';
    const fileName = 'name';
    deleteFullDocument(documentType, fileName);
    // expect(out).toBe({});
  });
});
