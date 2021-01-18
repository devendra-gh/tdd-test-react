import React, { useState } from 'react';
import Container from 'client/containers';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import SidebarTemplate from '@tamm/ui-lib-v2-sidebar-template';
import Pagination from '@tamm/ui-lib-v2-pagination';
import Table from '@tamm/ui-lib-v2-table';
import FormTemplate from '@tamm/ui-lib-v2-form-template';
import RadioGroup from '@tamm/ui-lib-v2-radio-group';
import Form from '@tamm/ui-lib-v2-form';
import Alert from '@tamm/ui-lib-v2-alert';
import Spinner from '@tamm/ui-lib-v2-spinner';
import imagePath from 'client/utils/baseUrl';
import Loading from '../../../../templates/Loading';

const RadioColumnItem = (props: IVariables) => {
  const { recordId, selectedItem, handleChange, list } = props;
  const { label } = list.find((elem: any) => elem.id === recordId) || {
    label: '',
  };

  return (
    <RadioGroup.Radio
      checked={recordId === selectedItem}
      disabled={false}
      label={label}
      name={recordId}
      value={recordId}
      onChange={() => handleChange(recordId)}
    />
  );
};

/**
 * Home template
 * @param       {Object} props
 * @returns     {JSX}
 */
function SelectLicence(props: IVariables) {
  const {
    i18n,
    loadingLicences,
    licenceList,
    handleCancelLink,
    handleBackButton,
    handleSelectLicence,
    handleStartService,
    submitting,
    selectedLicence,
    process,
  } = props;

  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');

  let licenceListItems = licenceList.map(
    ({ tradeLicenseNumber, businessNameEng, businessNameArb }: IVariables) => ({
      id: tradeLicenseNumber,
      name: props.locale === 'en' ? businessNameEng : businessNameArb,
      number: tradeLicenseNumber,
      label: tradeLicenseNumber,
      selected: selectedLicence === tradeLicenseNumber,
    }),
  );

  if (searchValue) {
    licenceListItems = licenceListItems.filter(
      ({ name: licenceName, number }: IVariables) =>
        String(licenceName).toLowerCase().indexOf(searchValue) !== -1 ||
        String(number).toLowerCase().indexOf(searchValue) !== -1,
    );
  }

  const pageSize = 5;
  const licenceListLength = licenceListItems.length;
  const onPageChange = (page: number) => setCurrentPage(page);
  const currentPageItem = currentPage * pageSize;
  const currentPageLicenceList = licenceListItems.slice(
    currentPageItem - 5,
    currentPageItem,
  );
  const columns = [
    {
      id: 'number',
      title: i18n('licenceNumber'),
      render: (_content: string, recordId: string) => {
        return (
          <RadioColumnItem
            recordId={recordId}
            list={currentPageLicenceList}
            selectedItem={selectedLicence}
            handleChange={handleSelectLicence}
          />
        );
      },
    },
    {
      id: 'name',
      title: i18n('companyName'),
      align: 'end',
    },
  ];

  let LicenceListPagination;

  if (licenceListLength > pageSize) {
    LicenceListPagination = (
      <div style={{ flex: 1, marginTop: '35px', display: 'block' }}>
        <Pagination
          i18n={i18n}
          total={licenceListLength}
          pageSize={pageSize}
          current={currentPage}
          onChange={onPageChange}
        />
      </div>
    );
  }

  const LicenceListTable = (
    <div style={{ flex: 5, display: 'block' }}>
      <Table i18n={i18n} items={currentPageLicenceList} columns={columns} />
    </div>
  );

  const LicenceListSearchInput = (
    <div style={{ paddingTop: 20, paddingBottom: 20 }}>
      <FormTemplate
        inputGroups={[
          {
            twoColumns: true,
            fields: [
              {
                name: 'search input',
                label: i18n('searchLabel'),
                elementType: 'searchInput',
                onChange: (value: string) =>
                  setSearchValue(value.toLowerCase()),
              },
            ],
          },
        ]}
      />
    </div>
  );

  props.actions.breadcrumbs.update(props.breadcrumbs);

  let LicenceList = <Spinner type="logo" />;
  let buttonProps = {};

  if (!loadingLicences) {
    if (!licenceListItems.length) {
      LicenceList = <Alert message={i18n('emptyLicences')} status="info" />;
      buttonProps = {
        backButton: {
          label: i18n('selectLicence.empty.button'),
          withArrow: true,
          uiType: 'secondary',
          alignIcon: 'start',
          onClick: handleBackButton,
        },
      };
    } else {
      LicenceList = (
        <div
          style={{
            display: 'block',
          }}
        >
          {LicenceListTable}
          {LicenceListPagination}
        </div>
      );
      buttonProps = {
        submitButton: {
          label: i18n('selectLicence.nonempty.button'),
          withArrow: true,
          disabled: submitting,
          onClick: () => handleStartService(props),
        },
        cancelLink: {
          label: i18n('selectLicence.nonempty.cancel'),
          onClick: handleCancelLink,
        },
      };
    }
  }

  const baseWorkingTime = {
    label: '5 am - 10 pm',
    start: '5 am',
    end: '10 pm',
    closed: false,
  };

  const entity = {
    id: 0,
    logo: `${imagePath}/images/DED-logo.png`,
    phones: ['+971 2 815 8888'],
    email: 'contact.abudhabi.ae',
    website: 'www.adeconomy.ae',
    address: i18n('departmentOfEconomicDevelopment.address'),
    officeHours: {
      status: 'default',
      workingHours: {
        sunday: {
          ...baseWorkingTime,
        },
        monday: {
          ...baseWorkingTime,
        },
        tuesday: {
          ...baseWorkingTime,
        },
        wednesday: {
          ...baseWorkingTime,
        },
        thursday: {
          ...baseWorkingTime,
        },
        friday: {
          ...baseWorkingTime,
        },
        saturday: {
          closed: true,
        },
      },
    },
    publicServiceHours: {
      status: '24/7',
    },
  };

  const sidebarTemplateData = {
    label: i18n('sidebar.home.relevantEntityLInk'),
    relevantEntityLink: {
      label: i18n('sidebar.home.relevantEntityLink'),
    },
    process: {
      ...process,
      title: i18n(process.title),
      steps: process.steps.map((step: IVariables) => ({
        ...step,
        label: i18n(step.name),
        status: props.stepStatus[step.name],
      })),
    },
    relevantEntity: {
      title: i18n('relevant_entity'),
      entities: [entity],
    },
  };

  const Sidebar = <SidebarTemplate {...sidebarTemplateData} />;

  return (
    <>
      <Container locale={props.locale} sidebar={Sidebar}>
        <>
          {props.submitting && <Loading />}
          <h3>{i18n('selectLicence.intro.title')}</h3>
          <p className="intoText">{i18n('selectLicence.intro.text')}</p>
          <div role="form" aria-label="Select licence">
            {LicenceListSearchInput}
            {LicenceList}
            <Form {...buttonProps} />
          </div>
        </>
        <div style={{ height: 200 }} />
      </Container>
    </>
  );
}

SelectLicence.propTypes = {
  ...routePropTypes,
};

export default withTemplateHooks(SelectLicence);
