const errorMessages: any = {
    'form.error.required':'form.alert.requiredField',
    'form.error.email':'form.alert.validEmail',
    'form.error.number':'form.alert.number',
    'form.error.emiratesId':'form.alert.validID',
    'form.error.phone':'form.error.phone',
    'form.error.alpha':'form.error.alpha',
    'form.error.digits':'form.error.digitsd',
    'form.error.fileMaxSize':'form.error.fileMaxSize',
    'form.error.file':'form.error.file',
    'form.error.invalidFileType':'form.error.invalidFileTyped',
}

export const  i18n = (text: string)=> errorMessages[text];
