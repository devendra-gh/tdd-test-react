const errorMessages: any = {
  'form.error.required': 'This field is required',
  'form.error.invalid': 'This field is invalid',
  'form.error.email': 'This should be email',
  'form.error.number': 'This should be numbers',
  'form.error.emiratesId': 'form.error.emiratesId',
  'form.error.phone': 'This should be phone',
  'form.error.alpha': 'form.error.alpha',
  'form.error.digits': 'form.error.digitsd',
  'form.error.fileMaxSize': 'form.error.fileMaxSize',
  'form.error.file': 'form.error.file',
  'form.error.invalidFileType': 'form.error.invalidFileTyped',
};

export const i18n = (text: string) => errorMessages[text];
