const isLicenceNo = (value: string): boolean => {
  const LICENCE_NUMBER_REGEX = /^(C|I)N-\d{7}$/i;

  return !!value.match(LICENCE_NUMBER_REGEX);
};

export { isLicenceNo };
