export function call_f1_onChange(props: any) {
  return (symbolProps: any, ...rest: any[]) => {
    console.info('--symbolProps--', symbolProps, rest);
    const file = symbolProps.record.document;
    const { documentName } = symbolProps.record;

    const blob = new Blob([file], {
      type: 'application/pdf',
    });

    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob);
      return;
    }

    const data = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = data;
    link.target = '_blank';
    link.download = documentName;

    link.click();
    setTimeout(function () {
      window.URL.revokeObjectURL(data);
    }, 100);
    return true;
  };
}
