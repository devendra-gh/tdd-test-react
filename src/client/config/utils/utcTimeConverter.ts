export const currentUtcDate = () => {
  const utcMilliSeconds =
    new Date().getTime() + new Date().getTimezoneOffset() * 60000;
  return new Date(utcMilliSeconds);
};

export const convertUtcDate = (date: any) => {
  const utcMilliSeconds =
    new Date(date).getTime() + new Date().getTimezoneOffset() * 60000;
  return new Date(utcMilliSeconds);
};
