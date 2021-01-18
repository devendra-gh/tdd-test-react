import React from 'react';
import Container from 'client/containers';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import ServiceTemplate from '@tamm/ui-lib-v2-service-template';
import Sidebar from 'client/templates/PermitsSidebar';
import permitConfigs from 'client/config/permits/permitConfigs';
import './home.less';

/* istanbul ignore file */
/**
 * Home template
 * @param       {Object} props
 * @returns     {JSX}
 */
function Home(props: IVariables) {
  const {
    i18n,
    // title,
    serviceType,
  } = props;
  const PermitConfigs: { [key: string]: any } = permitConfigs;
  const serviceConfig = PermitConfigs[serviceType];
  let serviceDescription = {
    conditions: [],
    title: '',
  };
  let documents: string[] = [];
  let documentsList: { description: any; id: string }[] = [];
  let fees: string[] = [];
  let feesList: { fees: any; id: string }[] = [];

  if (serviceConfig) {
    serviceDescription = serviceConfig.landingPage.serviceDescription;
    documents = serviceConfig.landingPage.documents;
    fees = serviceConfig.landingPage.fees;
    if (Array.isArray(documents)) {
      documentsList = documents.map((document: string, key: number) => {
        return { description: i18n(document), id: key.toString() };
      });
    } else {
      const documentCollections: Record<string, IVariables> = documents;
      Object.values(documentCollections).forEach(
        (documentCollection: IVariables, key: number) => {
          documentsList.push({
            description: i18n(documentCollection.title),
            id: key.toString(),
          });
          documentCollection.collection.forEach(
            (document: IVariables, index: number) => {
              documentsList.push({
                description: `${(index + 1).toString()}.  ${i18n(
                  document.label,
                )}`,
                id: `${key.toString()}_${index.toString()}`,
              });
            },
          );
          return documentsList;
        },
      );
    }

    feesList = fees.map((fee: string, key: number) => {
      return { fees: i18n(fee), id: key.toString() };
    });
  }

  const items = [
    {
      description: i18n('process.submitApplicationDesc'),
      label: i18n('process.submitApplication'),
    },
    {
      description: i18n('process.dedApprovalDesc'),
      label: i18n('process.dedApproval'),
    },
    {
      description: i18n('process.paymentDesc'),
      label: i18n('process.payment'),
    },
    {
      description: i18n('process.downloadPermitDesc'),
      label: i18n('process.downloadPermit'),
    },
  ];
  const newitems = [
    {
      description: i18n('process.submitApplicationDesc'),
      label: i18n('process.submitApplication'),
    },
    {
      description: i18n('process.dedCheckDesc'),
      label: i18n('process.dedCheck'),
    },
    {
      description: i18n('process.entityApprovalDesc'),
      label: i18n('process.entityApproval'),
    },
    {
      description: i18n('process.getDedApprovalDesc'),
      label: i18n('process.getDedApproval'),
    },
  ];

  return (
    <>
      <Container
        locale={props.locale}
        sidebar={
          <Sidebar
            currentStep={props.currentStep}
            currentSubStep={props.currentSubStep}
            i18n={props.i18n}
            steps={[]}
            stepsStatus={props.stepsStatus}
            hideSidebar={props.hideSidebar}
          />
        }
      >
        {
          <ServiceTemplate
            description={
              <div>
                <span>{i18n(serviceDescription.title)}</span>
                <br />
                <br />
                <ul className="PermitForm__form-tac-ui">
                  {serviceDescription.conditions.map(
                    (condition: string, key: number) => (
                      <li key={String(key)}>{i18n(condition)}</li>
                    ),
                  )}
                </ul>
              </div>
            }
            helpfulBlock={{
              onFieldChange: function noRefCheck() {},
              onSubmit: function noRefCheck() {},
              telephoneField: {
                countries: [
                  {
                    code: 971,
                    name: 'UAE',
                  },
                ],
              },
            }}
            process={{
              steps:
                serviceType === 'mobile-car-tajer-permit-in-abu-dhabi' ||
                serviceType === 'food-truck-permit-in-abu-dhabi'
                  ? newitems
                  : items,
              title: i18n('process.title'),
            }}
            startLogin={{
              buttonLabel: i18n('landingPage.buttonStart'),
              // description: i18n(
              //   `${
              //     serviceType
              //       ? `startLogin.permitApplication.${serviceType}`
              //       : `${title}`
              //   }`,
              // ),
              title: i18n('landingPage.mainTitle'),
              onClick: () => props.onStart(props),
            }}
            tables={[
              {
                columns: [
                  {
                    id: 'description',
                    title: i18n('processTable.document.tableHeader'),
                  },
                ],
                items: documentsList,

                title: i18n('processTable.document.title'),
              },
              {
                columns: [
                  {
                    id: 'fees',
                    title: i18n('processTable.fees.tableHeader'),
                  },
                ],
                items: feesList,
                title: i18n('processTable.fees.title'),
              },
            ]}
            title={i18n(props.serviceTitle)}
          />
        }
        <div style={{ height: 60 }} />
      </Container>
    </>
  );
}

Home.propTypes = {
  ...routePropTypes,
};

export default withTemplateHooks(Home);
