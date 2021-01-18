/* eslint-disable complexity */
import React, { useEffect, useState } from 'react';
import { IVariables } from '@tamm/app-composer';
import { includes } from 'lodash';
import InternalApi from 'client/services/InternalApi';
import { mapServiceData } from 'client/utils/workbench/service';
import { getSmartpassData, getCMSData } from 'client/utils/appData';
import services from 'client/config/services';

import { withIntl } from '@tamm/ui-lib-v2-localization';
import SidebarLayout from '@tamm/ui-lib-v2-sidebar-layout';
import ServiceTemplate from '@tamm/ui-lib-v2-service-template';
import SidebarTemplate from '@tamm/ui-lib-v2-sidebar-template';
import Hero from '@tamm/ui-lib-v2-hero';

import './ServiceComponent.less';

const user = getSmartpassData();
const {
  allRightsReserved,
  emergencyNumbers,
  usefulLinks,
  supportLinks,
  socialLinks,
  poweredByLinks,
  rightsLinks,
} = getCMSData();

function ServiceComponent(props: IVariables) {
  const [unfilteredService, setUnfilteredService] = useState<IVariables | null>(
    null,
  );
  const { locale } = props;

  const loadProps = (propName: string, hero: IVariables) => {
    const filteredService = services.find(i =>
      includes(i.ids, parseInt(props.serviceId, 10)),
    );
    const loadedProps: any =
      filteredService && filteredService.getProps(props, user, hero);
    return loadedProps ? loadedProps[propName][locale] : null;
  };

  const getLinkProps = (links: CMS.BaseLink[]) =>
    links.map(item => ({
      ...item,
      isDefault: false,
    }));

  useEffect(() => {
    const getData = async () => {
      try {
        const payload = await InternalApi.getServiceById(props.serviceId);
        if (payload.success) {
          setUnfilteredService(payload.data);
        } else {
          props.history.push('/');
        }
      } catch (e) {
        props.history.push('/');
      }
    };

    getData();
  }, []);

  if (unfilteredService === null) {
    return <div>Loading...</div>;
  }

  const service = mapServiceData(unfilteredService[locale], props.i18n);
  const heroProps = loadProps('hero', service.hero);
  const startLoginProps = loadProps('startLogin', service.hero);

  return (
    <div className={!startLoginProps ? 'noStartLogin' : undefined}>
      {heroProps && <Hero {...heroProps} internal />}
      <SidebarLayout
        loggedOutUserIconPath=""
        copyright={{}}
        user={{
          isLoggedIn: false,
          name: '',
        }}
        emergencyViewMoreLink=""
        contentFirst
        sidebar={<SidebarTemplate {...service.sidebar} />}
        {...(emergencyNumbers && {
          emergencyItems: getLinkProps(emergencyNumbers[locale].items),
          emergencyLabel: emergencyNumbers[locale].emergencyHeading,
        })}
        {...(usefulLinks &&
          supportLinks &&
          socialLinks && {
            linksSections: [
              {
                isDefault: true,
                items: getLinkProps(usefulLinks[locale]),
                title: 'footer.about',
              },
              {
                isDefault: true,
                items: getLinkProps(supportLinks[locale]),
                title: 'footer.support',
              },
              {
                isDefault: true,
                items: getLinkProps(socialLinks[locale]),
                title: 'footer.social_media',
              },
            ],
          })}
        {...(poweredByLinks && {
          poweredByLinks: getLinkProps(poweredByLinks[locale]),
        })}
        {...(rightsLinks && {
          rightsLinks: getLinkProps(rightsLinks[locale]),
        })}
        {...(allRightsReserved && {
          copyright: { label: allRightsReserved[locale].label },
        })}
        showHeader={false}
      >
        <ServiceTemplate {...service.base} startLogin={startLoginProps} />
      </SidebarLayout>
    </div>
  );
}

export default withIntl(ServiceComponent, {
  en: {
    requiredDocuments: 'Required Documents',
    process: 'Process',
  },
  ar: {
    process: 'خطوات العملية',
    requiredDocuments: 'الوثائق المطلوبة',
  },
});
