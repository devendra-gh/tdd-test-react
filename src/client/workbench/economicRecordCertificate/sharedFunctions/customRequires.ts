const customRequires = (props: any) => {
  const user = props.user;
  const pass =
    user &&
    (user.Type === 'SOP3' ||
      (user.provider === 'uaepass' && user.Type === 'SOP2'));
  return {
    pass,
    redirectTo: `/account-upgrade`,
  };
};
export default customRequires;
