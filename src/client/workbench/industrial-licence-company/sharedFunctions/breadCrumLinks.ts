

const crumsList = (props: any) => {
  const { i18n } = props;
  const protocol = location.protocol;
  const lang = props.locale === 'ar' ? 'ar-AE' : 'en';
  const slashes = protocol.concat('//');
  const host = slashes.concat(window.location.hostname);
  return [
    { label: i18n('bcrumbsHome'), link: `${host}`, linkTarget: '_blank' },
    {
      label: i18n('bcrumbsBusinessInAbuDhabi'),
      link: `${host}/${lang}/aspects-of-life/StartandManageaBusiness`,
      linkTarget: '_blank',
    },
    {
      label: i18n('bcrumbsRegisterYourBusiness'),
      link: `${host}/${lang}/aspects-of-life/StartandManageaBusiness/Register-your-Business`,
      linkTarget: '_blank',
    },
    {
      label: i18n('bcrumbsIndustrialLicences'),
      link: `${host}/${lang}/aspects-of-life/StartandManageaBusiness/Register-your-Business/IndustrialLicences`,
      linkTarget: '_blank',
    },
  ];
};

export { crumsList };
