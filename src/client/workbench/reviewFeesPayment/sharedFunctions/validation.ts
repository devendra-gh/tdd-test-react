const isEmail = (value: string): boolean => {
  if (!value) {
    return false;
  }
  return !!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
};

const isMobile = (value: string): boolean => {
  if (!value) {
    return false;
  }

  const withOutSpace = value.split(' ').join('');
  const PHONE_REGEX = /^(\+|0+)?9715\d{8}$/i;

  return !!withOutSpace.match(PHONE_REGEX);
};
export { isEmail, isMobile };
