/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react';
import * as PropTypes from 'prop-types';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import useMedia from 'use-media';
import useUpdate from 'client/config/hooks/useUpdate';
import { get, has, omit, includes, findIndex, pick } from 'lodash';
import qs from 'querystring';
import classNames from 'classnames';
import {
  BRANCHES,
  EMIRATES,
  getBusinessLegalFormCode,
  getLicenseType,
  LOCATION_MATRIX,
  PAID_CAPITAL_AND_REVENUES_SALES,
} from 'client/config/utils/lookup';
import { isGCC, UAE } from 'client/config/utils/gcc';
import { isEmail, isMobile, isURL } from 'client/config/utils/validations';
import InternalApi from 'client/services/InternalApi';
import Grid from '@tamm/ui-lib-v2-grid';
// import Button from '@tamm/ui-lib-v2-button';
import InputNumber from '@tamm/ui-lib-v2-input-number';
import InputTelephone from '@tamm/ui-lib-v2-input-telephone';
import Checkbox from '@tamm/ui-lib-v2-checkbox';
import FileUpload from '@tamm/ui-lib-v2-file-upload';
import Input from '@tamm/ui-lib-v2-input';
import Select from '@tamm/ui-lib-v2-select';
import RadioGroup from '@tamm/ui-lib-v2-radio-group';
import Alert from '@tamm/ui-lib-v2-alert';
import Loading from 'client/templates/Loading';
import LicenseName from 'client/config/tradeLicence/components/LicenseName';
import ActivityGroup from 'client/config/tradeLicence/components/ActivityGroup';
import Container from 'client/containers';
import Ownership from 'client/config/tradeLicence/components/Ownership';
import PrivilegesFacilitiesGroup from 'client/config/tradeLicence/components/PrivilegesFacilitiesGroup';
import AttachmentsGroup from 'client/config/tradeLicence/components/AttachmentsGroup';
import TermsConditionsGroup from 'client/config/tradeLicence/components/TermsConditionsGroup';
import FormGroup from 'client/config/tradeLicence/components/FormGroup';
import Form from '@tamm/ui-lib-v2-form';
import { BASE_PATH } from '../../routes';

// import './LicenceForm.less';

/* istanbul ignore file */

const { Row, Col } = Grid;

const getDefaultFormState = (user: IVariables, queryParams: IVariables) => {
  return {
    licenceType: 'tamm',

    branch: get(queryParams, 'branch', ''),
    licenseNumber: '',
    parentCompanyLegalForm: '',
    emirate: '',
    parentCompanyFreeZone: '',
    businessNameEn: '',
    businessNameAr: '',
    sharePercentage: '100%',
    nationality: '',
    email: '',
    phoneNumber: '',
    isGCC: false,
    parentLicenseEmirate: '',

    legalForm: get(queryParams, 'legalForm', ''),

    paidCapitalApprox: '',
    revenuesSalesApprox: '',
    durationOfTheCompany: '',
    managerAppointmentDuration: '',
    capital: 1000,
    totalNumberOfShares: 1000,

    activities: [],
    activityCategory: '',
    activitySubCategory: '',

    businessLocation: '',

    tradeNameEn: '',
    tradeNameAr: '',
    nameReservationPeriod: '',

    issuePlaceCode: '',

    tawtheeqNumber: '',
    officialEmail: '',
    officialMobile: '',
    contactPersonPhone: '',
    ubo: '',
    confirmation: false,

    applicantName: user
      ? `${user['First Name EN']} ${user['Last Name EN']}`
      : '',
    applicantEmail: user ? user['User Email'] : '',
    applicantPhoneNumber: user ? user.Mobile : '',

    socialMediaType: '',
    socialMediaAccount: '',
    website: '',

    documents: [],

    termsConditions: false,
  };
};

const DEFAULT_OWNERSHIP_STATE = {
  owner: [],
  localAgent: [],
  manager: [],
  partner: [],
  representative: [],
};

/**
 * LicenceForm template
 * @param {Object} props
 * @returns {JSX}
 */
function LicenceForm(props: IVariables) {
  // console.info('---props---', props);

  const queryParams = qs.parse(props.history.location.search);

  const [formState, setFormState] = useState<any>(
    getDefaultFormState(props.user, queryParams),
  );
  const [ownership, setOwnership] = useState<any>(DEFAULT_OWNERSHIP_STATE);
  const [ecommerceActivities, setECommerceActivities] = useState<IVariables[]>(
    [],
  );
  const [
    isEcommerceActivitySelected,
    setIsEcommerceActivitySelected,
  ] = useState(false);
  const [validate, setValidate] = useState(false);
  const isWide = useMedia({ minWidth: '768px' });

  const {
    locale,
    i18n,
    activities,
    categories,
    countries,
    getActivities,
    onCheckTradeName,
    onLoadSuggestions,
    autoGenerateTradeName,
    getTransliteration,
    authorizedOperations,
    getLocationActivities,
    fetchAttachments,
  } = props;

  const isBranch = formState.licenceType === 'branch';

  const branchOf = (branches: string[]) => {
    return isBranch && includes(branches, formState.branch);
  };

  const isUploaded = (name: string) => {
    const index = findIndex(formState.documents, (item: IVariables) => {
      return item.fieldName === name;
    });
    return index !== -1;
  };

  /*
   * Keep state in local storage
   */
  useUpdate(() => {
    localStorage.setItem(
      'formState',
      JSON.stringify({
        ...formState,
        ownership,
      }),
    );
  }, [formState, ownership]);

  /*
   * Read state in local storage
   */
  useEffect(() => {
    let localFormState;

    try {
      // @ts-ignore
      localFormState = JSON.parse(localStorage.getItem('formState'));
    } catch (e) {
      localFormState = null;
    }

    if (localFormState) {
      // const lt = get(queryParams, 'licenceType', localFormState.licenceType);
      setFormState({
        ...omit(localFormState, ['ownership']),
        // licenceType: lt,
        legalForm: get(queryParams, 'legalForm', localFormState.legalForm),
        // branch:
        //   lt === 'branch'
        //     ? get(queryParams, 'branch', localFormState.branch)
        //     : '',
      });
      setOwnership(pick(localFormState, ['ownership']).ownership);
    }
  }, []);

  /*
   * Get activities based on licence type
   */
  useUpdate(() => {
    getActivities(props, formState.licenceType, ownership)();

    const fetchECommerceActivities = async () => {
      const items = await getActivities(
        props,
        formState.licenceType,
        ownership,
        true,
      )();
      setECommerceActivities(items);
    };

    fetchECommerceActivities();
  }, [formState.licenceType]);

  /*
   * Update page title based on licence type and branch
   */
  useEffect(() => {
    props.updatePageTitle(formState.licenceType, formState.branch, props);
  }, [formState.licenceType, formState.branch]);

  useEffect(() => {
    if (branchOf(['branchFZ', 'branchUAE'])) {
      setFormState({
        ...formState,
        nationality: UAE,
      });
    }
    if (branchOf(['branchAD', 'branchFZ', 'branchGCC', 'branchForeign'])) {
      const owner = {
        ...(ownership.owner[0] || {}),
        contactType: 'company',
        representativeType: 'owner',
        sharePercentage: '100',
        nationality: UAE,
      };
      setOwnership({
        ...ownership,
        owner: [owner],
      });
    }

    if (branchOf(['branchUAE'])) {
      setOwnership({
        ...ownership,
        owner: [],
      });
    }
  }, [formState.branch]);

  useEffect(() => {
    if (includes(['PJSCPrivate', 'PJSCSoleProp'], formState.legalForm)) {
      setFormState({
        ...formState,
        paidCapitalApprox: PAID_CAPITAL_AND_REVENUES_SALES[1].nameEn,
        revenuesSalesApprox: PAID_CAPITAL_AND_REVENUES_SALES[1].nameEn,
      });
    } else if (includes(['PJSCPublic'], formState.legalForm)) {
      setFormState({
        ...formState,
        paidCapitalApprox: PAID_CAPITAL_AND_REVENUES_SALES[2].nameEn,
        revenuesSalesApprox: PAID_CAPITAL_AND_REVENUES_SALES[2].nameEn,
      });
    }
  }, [formState.legalForm]);

  useEffect(() => {
    const isEcommerceActivitySelectedList = formState.activities.filter(
      (i: IVariables) => {
        return (
          findIndex(
            ecommerceActivities,
            (ecommerceActivity: IVariables) =>
              ecommerceActivity.activityCode === i.activityCode,
          ) !== -1
        );
      },
    );
    setIsEcommerceActivitySelected(isEcommerceActivitySelectedList.length > 0);
  }, [formState.activities, ecommerceActivities]);

  const onSubmit = () => {
    setValidate(true);

    const isValid = props.validation(
      {
        ...formState,
        ownership,
      },
      isEcommerceActivitySelected,
      props.tradeNameCheckStatus,
    );

    if (!isValid) {
      return;
    }

    props.onSubmit(
      {
        ...formState,
        ownership,
      },
      props,
    );
    setValidate(false);
  };

  const onChange = (name: string, type?: string) => {
    return (event: any) => {
      let value: any;

      if (isNaN(event)) {
        value = event.target ? event.target.name : event;
      } else {
        value = event;
      }

      if (type === 'input-number' && isNaN(event)) {
        value = event.target.value;
      }

      if (name === 'capital' && type === 'input-number') {
        value = Math.round(value / 1000) * 1000;
        if (isNaN(value)) {
          value = 1000;
        }
        if (value > 100000) {
          value = 100000;
        }
      }

      let newState: IVariables = {
        [name]: value,
      };

      const checkLicenceType = () => {
        /**
         * Custom logic
         */
        if (name === 'licenceType') {
          newState = {
            [name]: value === 'branch' ? value : 'tamm',
          };

          newState = {
            ...getDefaultFormState(props.user, queryParams),
            ...newState,
          };

          if (value === 'mubdia') {
            newState.legalForm = 'establishment';
          }

          setOwnership(DEFAULT_OWNERSHIP_STATE);
        }
      };
      checkLicenceType();

      const checkLegalForm = () => {
        if (name === 'legalForm') {
          newState = {
            ...getDefaultFormState(props.user, queryParams),
            ...newState,
            licenceType: formState.licenceType,
          };

          let owner: IVariables[] = [];
          if (
            includes(['establishment', 'soleProprietorshipLLC'], value) &&
            props.user &&
            props.user.Type === 'SOP3'
          ) {
            owner = [
              {
                ...(ownership.owner[0] || {}),
                contactType: 'individual',
                representativeType: 'owner',
                sharePercentage: '100',
                type:
                  props.user['Nationality EN'] === 'ARE'
                    ? 'citizen'
                    : 'resident',
                firstNameEn: props.user['First Name EN'],
                middleNameEn: '',
                lastNameEn: props.user['Last Name EN'],
                emiratesId: props.user.IDN,
                nationality: props.user['Nationality EN'],
                phoneNumber: props.user.Mobile,
              },
            ];
          }

          setOwnership({
            ...DEFAULT_OWNERSHIP_STATE,
            owner,
          });
        }
      };
      checkLegalForm();

      const checkCapital = () => {
        if (name === 'capital') {
          newState.totalNumberOfShares = value;
        }
      };
      checkCapital();

      if (
        includes(
          [
            'licenseNumber',
            'sharePercentage',
            'businessNameEn',
            'businessNameAr',
            'email',
            'phoneNumber',
            'nationality',
          ],
          name,
        )
      ) {
        const checkBranchName = () => {
          if (formState.branch !== 'branchUAE') {
            const owner = {
              ...(ownership.owner[0] || {}),
              [name]: value,
            };
            setOwnership({
              ...ownership,
              owner: [owner],
            });
          }

          if (name === 'businessNameEn') {
            newState.tradeNameEn = value;
          }

          if (name === 'businessNameAr') {
            newState.tradeNameAr = value;
          }

          if (name === 'streetName') {
            newState.streetName = value;
          }
        };
        checkBranchName();
      }

      setFormState({
        ...formState,
        ...newState,
      });
    };
  };

  const onToggleCheckbox = (name: string) => {
    return () => {
      setFormState({
        ...formState,
        [name]: !formState[name],
      });
    };
  };

  const onSelectActivity = (item: IVariables) => {
    const activity = {
      activityCode: item.activityCode,
      activityNameEn: item.activityNameEn,
      activityNameAr: item.activityNameAr,
    };
    let clonedItems = [...formState.activities];

    const index = findIndex(clonedItems, (i: IVariables) => {
      return i.activityCode === activity.activityCode;
    });

    if (index === -1) {
      clonedItems.push(activity);
    } else {
      clonedItems = clonedItems.filter((i, k) => k !== index);
    }

    setFormState({
      ...formState,
      activities: clonedItems,
    });
  };

  const onFileUpload = (fieldName: string) => {
    return async (files: IVariables) => {
      try {
        const documentCategories: IVariables = {
          parentCompanyLicence: "Parent company's economic licence",
          parentCompanyMoaDocument:
            "Parent company's Memorandum of Association",
          freezoneNoc: 'Decision letter to open branch',
          noBranchAD: "Parent company's local sponsor contract",
        };

        const promise = files.map(async (uploadedFile: any) => {
          const res = await InternalApi.uploadDedDoc(uploadedFile);

          const payload = {
            fieldName,
            id: res.data.uploadedFileDetails.nameOfFile,
            lastModifiedDate: uploadedFile.lastModifiedDate,
            name: uploadedFile.name,
            documentName: uploadedFile.name,
            documentPath: res.data.uploadedFileDetails.s3FilePath,
            documentCategory: documentCategories[fieldName],
            type: uploadedFile.type,
            lastModified: uploadedFile.lastModified,
            size: uploadedFile.size,
          };
          return payload;
        });

        const documents = await Promise.all(promise);

        setFormState({
          ...formState,
          documents: [...formState.documents, ...documents],
        });
      } catch (err) {
        console.error('Error while uploading document:', err);
      }
    };
  };

  const onFileRemove = (fieldName: string) => {
    return () => {
      setFormState({
        ...formState,
        documents: formState.documents.filter(
          (i: IVariables) => i.fieldName !== fieldName,
        ),
      });
    };
  };

  const onFetchBranchDetails = async () => {
    if (branchOf(['branchAD'])) {
      const details = await props.fetchBranchDetails(formState.licenseNumber);
      if (details) {
        const businessNameEn =
          details.businessNameEng || details.businessNameArb || '';
        const businessNameAr =
          details.businessNameArb || details.businessNameEng || '';

        const owner = {
          ...(ownership.owner[0] || {}),
          businessNameEn,
          businessNameAr,
          phoneNumber: get(details, 'officialMobile', ''),
        };

        setFormState({
          ...formState,
          parentCompanyLegalForm: get(details, 'legalFormEng', ''),
          parentLicenseEmirate: get(details, 'issuePlaceEng', ''),
          businessNameEn,
          businessNameAr,
          tradeNameEn: businessNameEn,
          tradeNameAr: businessNameAr,
        });
        setOwnership({
          ...ownership,
          owner: [owner],
        });

        props.actions.activities.update({
          isLoading: false,
          totalItems: details.activities.length,
          items: details.activities.map((i: IVariables) => ({
            activityCode: i.activityCode,
            activityNameEn: i.activityNameEng,
            activityNameAr: i.activityNameArb,
          })),
        });
      }
    }
  };

  const onSubmitOwnership = (formData: IVariables) => {
    if (!Object(formData).hasOwnProperty('index')) {
      setOwnership({
        ...ownership,
        [formData.representativeType]: [
          ...ownership[formData.representativeType],
          omit({ ...formData }, 'representativeType'),
        ],
      });
    } else {
      const newOwnershipList = [...ownership[formData.representativeType]];
      newOwnershipList.splice(
        formData.index,
        1,
        omit({ ...formData }, ['representativeType', 'index']),
      );
      setOwnership({
        ...ownership,
        [formData.representativeType]: newOwnershipList,
      });
    }
  };

  const onDeleteOwnership = (type: string, index: number) => {
    const newOwnershipList = [...ownership[type]];
    newOwnershipList.splice(index, 1);
    setOwnership({
      ...ownership,
      [type]: newOwnershipList,
    });
  };

  // console.info('---FORMSTATE---', formState, ownership);

  const isVisibleGroup = props.visibility.groupVisibility(
    formState,
    isEcommerceActivitySelected,
  );

  const isVisibleField = props.visibility.fieldVisibility(formState);

  const renderLocationGroup = () => {
    return (
      <FormGroup
        visible={isVisibleGroup.location}
        name="location"
        title={i18n('location.title')}
      >
        <p className="LicenceForm__form-description">
          {includes(['tajer', 'allInOne'], formState.licenceType)
            ? i18n('location.description.quick')
            : i18n('location.description.quick')}
        </p>
        <Row gutter={20} flex>
          <Col xs={12}>
            <div className="ui-lib-margin-b_md">
              <RadioGroup
                i18n={i18n}
                align={isWide ? 'horizontal' : 'vertical'}
                items={props
                  .businessLocations(formState.licenceType)
                  .map((i: IVariables) => ({
                    name: i.name,
                    label: i18n(i.label),
                    checked: i.name === formState.businessLocation,
                  }))}
                onChange={onChange('businessLocation')}
                uiType="default"
              />
            </div>
          </Col>
        </Row>
      </FormGroup>
    );
  };

  const renderAlert = () => {
    return (
      <>
        {props.user && props.user.Type !== 'SOP3' && (
          <div className="ui-lib-margin-b_md">
            <Alert message={i18n('user_not_verified')} status="error" />
          </div>
        )}

        {props.economicLicenceServerError && (
          <div className="ui-lib-margin-b_md">
            <Alert message={i18n('something_went_wrong')} status="error" />
          </div>
        )}
      </>
    );
  };

  const renderFormGroupZero = () => {
    return (
      <FormGroup name="licenceType" title={i18n('licenceType.title')}>
        <p className="LicenceForm__form-description">
          {i18n('licenceType.description')}
        </p>
        <Row gutter={20} flex>
          {/* <Col xs={12} xl={3}>
            <div className="ui-lib-margin-b_md">
              <Select
                i18n={i18n}
                showSearch={false}
                placeholder={i18n('select')}
                items={props
                  .licenceTypes(props.user)
                  .filter((item: IVariables) => {
                    if (has(item, 'visible')) {
                      return item.visible;
                    }
                    return true;
                  })
                  .map((item: IVariables) => ({
                    id: item.id,
                    label: i18n(item.label),
                  }))}
                value={formState.licenceType}
                onChange={onChange('licenceType')}
                disabled={props.user && props.user.Type !== 'SOP3'}
              />
            </div>
          </Col> */}
          <Col xs={12}>
            <div className="ui-lib-margin-b_md">
              <RadioGroup
                i18n={i18n}
                align={isWide ? 'horizontal' : 'vertical'}
                items={[
                  {
                    // @ts-ignore
                    name: 'tamm',
                    label: i18n('radioNewBusiness'),
                    checked: true,
                  },
                  {
                    // @ts-ignore
                    name: 'branch',
                    label: i18n('radioExpandBusiness'),
                    checked: false,
                  },
                ]}
                onChange={onChange('licenceType')}
                uiType="default"
              />
            </div>
          </Col>
        </Row>
      </FormGroup>
    );
  };

  const renderRadioGroupFormGroupOne = () => {
    return (
      <Row gutter={20} flex>
        <Col xs={12}>
          <div className="ui-lib-margin-b_md">
            <RadioGroup
              i18n={i18n}
              align={isWide ? 'horizontal' : 'vertical'}
              items={BRANCHES.map((i: IVariables) => ({
                name: i.id,
                label: i18n(i.name),
                checked: i.id === formState.branch,
              }))}
              onChange={onChange('branch')}
              uiType="default"
            />
          </div>
        </Col>
      </Row>
    );
  };

  const renderCheckboxFormGroupOne = () => {
    return (
      isVisibleField.isGCC && (
        <Row gutter={20} flex>
          <Col xs={12} xl={3}>
            <Checkbox
              checked={formState.isGCC}
              label={i18n('branchDetails.isGCC')}
              name="isGCC"
              onChange={onToggleCheckbox('isGCC')}
            />
          </Col>
        </Row>
      )
    );
  };

  const renderSelectFormGroupOne = () => {
    return (
      <>
        {isVisibleField.parentCompanyLegalForm && (
          <Col xs={12} xl={3}>
            <div className="ui-lib-margin-b_md">
              <Select
                i18n={i18n}
                placeholder={i18n('select')}
                label={`${i18n('branchDetails.legalForm')} *`}
                items={(() => {
                  let items = [
                    {
                      id: '1',
                      label: i18n('branchDetails.establishment'),
                    },
                    { id: '3', label: i18n('branchDetails.llc') },
                    { id: '34', label: i18n('branchDetails.soleLLC') },
                  ];

                  if (branchOf(['branchUAE'])) {
                    items = [
                      ...items,
                      { id: '17', label: i18n('legalform.PJSCPrivate') },
                      { id: '18', label: i18n('legalform.PJSCPublic') },
                      { id: '20', label: i18n('legalform.PJSCSoleProp') },
                    ];
                  }

                  return items;
                })()}
                value={formState.parentCompanyLegalForm}
                onChange={onChange('parentCompanyLegalForm')}
              />
            </div>
          </Col>
        )}

        {isVisibleField.emirate && (
          <Col xs={12} xl={3}>
            <div className="ui-lib-margin-b_md">
              <Select
                i18n={i18n}
                placeholder={i18n('select')}
                label={`${i18n('branchDetails.emirate')} *`}
                items={EMIRATES.map((item: IVariables) => ({
                  id: item.id,
                  label: props.locale === 'en' ? item.nameEn : item.nameAr,
                }))}
                value={formState.emirate}
                onChange={onChange('emirate')}
              />
            </div>
          </Col>
        )}

        {isVisibleField.parentCompanyFreeZone && (
          <Col xs={12} xl={3}>
            <div className="ui-lib-margin-b_md">
              <Select
                i18n={i18n}
                placeholder={i18n('select')}
                label={`${i18n('branchDetails.freeZone')} *`}
                items={LOCATION_MATRIX['abu-dhabi-free-zones'].map(
                  (item: IVariables) => ({
                    id: item.id,
                    label: props.locale === 'en' ? item.nameEn : item.nameAr,
                  }),
                )}
                value={formState.parentCompanyFreeZone}
                onChange={onChange('parentCompanyFreeZone')}
              />
            </div>
          </Col>
        )}
      </>
    );
  };

  const renderFormGroupOne = () => {
    return (
      <FormGroup
        visible={isVisibleGroup.branchDetails}
        name="branchDetails"
        title={i18n('branchDetails.title')}
      >
        <p className="LicenceForm__form-description">
          {i18n('branchDetails.description')}
        </p>

        {renderRadioGroupFormGroupOne()}

        <Row gutter={20} flex>
          <Col xs={12} xl={3}>
            <div className="ui-lib-margin-b_md">
              <Input
                aria-label="branchDetails.parentLicenceNo"
                label={`${i18n('branchDetails.parentLicenceNo')} *`}
                value={formState.licenseNumber}
                onChange={onChange('licenseNumber')}
                onBlur={onFetchBranchDetails}
                help={(() => {
                  return validate && formState.licenseNumber === ''
                    ? i18n('required_field')
                    : '';
                })()}
                validateStatus={(() => {
                  return validate && isBranch && formState.licenseNumber === ''
                    ? 'error'
                    : null;
                })()}
              />
            </div>
          </Col>

          {renderSelectFormGroupOne()}

          {isVisibleField.businessNameEn && (
            <Col xs={12} xl={3}>
              <div className="ui-lib-margin-b_md">
                <Input
                  aria-label="businessNameEn"
                  label={`${i18n('branchDetails.nameEn')} *`}
                  value={formState.businessNameEn}
                  onChange={onChange('businessNameEn')}
                />
              </div>
            </Col>
          )}

          {isVisibleField.businessNameAr && (
            <Col xs={12} xl={3}>
              <div className="ui-lib-margin-b_md">
                <Input
                  aria-label="businessNameAr"
                  label={`${i18n('branchDetails.nameAr')} *`}
                  value={formState.businessNameAr}
                  onChange={onChange('businessNameAr')}
                />
              </div>
            </Col>
          )}

          {isVisibleField.streetName && (
            <Col xs={12} xl={3}>
              <div className="ui-lib-margin-b_md">
                <Input
                  aria-label="streetName"
                  label={`${i18n('branchDetails.streetName')}`}
                  value={formState.streetName}
                  onChange={onChange('streetName')}
                />
              </div>
            </Col>
          )}

          {isVisibleField.sharePercentage && (
            <Col xs={12} xl={3}>
              <div className="ui-lib-margin-b_md">
                <InputNumber
                  label={i18n('input.shareLabel')}
                  disabled
                  value={formState.sharePercentage}
                />
              </div>
            </Col>
          )}

          {isVisibleField.nationality && (
            <Col xs={12} xl={3}>
              <div className="ui-lib-margin-b_md">
                <Select
                  i18n={i18n}
                  placeholder={i18n('select')}
                  label={`${i18n('input.nationality.label')} *`}
                  items={props.countries
                    .filter((item: IVariables) => {
                      if (branchOf(['branchUAE']) || branchOf(['branchFZ'])) {
                        return item.code === UAE;
                      }
                      if (branchOf(['branchGCC'])) {
                        return isGCC(item.code, true);
                      }
                      return branchOf(['branchForeign']) || isGCC(item.code);
                    })
                    .map((item: IVariables) => ({
                      id: item.code,
                      label: item.name,
                    }))}
                  disabled={(() => {
                    return branchOf(['branchUAE']) || branchOf(['branchFZ']);
                  })()}
                  value={formState.nationality}
                  onChange={onChange('nationality')}
                />
              </div>
            </Col>
          )}

          {isVisibleField.email && (
            <Col xs={12} xl={3}>
              <div className="ui-lib-margin-b_md">
                <Input
                  aria-label="email"
                  label={`${i18n('email')} *`}
                  validateStatus={(() => {
                    return validate && !isEmail(formState.email)
                      ? 'error'
                      : null;
                  })()}
                  help={(() => {
                    if (validate) {
                      if (formState.email === '') {
                        return i18n('required_field');
                      }
                      if (!isEmail(formState.email)) {
                        return i18n('invalid_email');
                      }
                    }
                    return '';
                  })()}
                  value={formState.email}
                  onChange={onChange('email')}
                />
              </div>
            </Col>
          )}

          {isVisibleField.phoneNumber && (
            <Col xs={12} xl={3}>
              <div className="ui-lib-margin-b_md">
                <InputTelephone
                  code={971}
                  countries={[
                    {
                      code: 971,
                      name: 'UAE',
                    },
                  ]}
                  i18n={i18n}
                  label={`${i18n('mobilePhone')} *`}
                  value={formState.phoneNumber}
                  validateStatus={(() => {
                    return validate && !isMobile(formState.phoneNumber)
                      ? 'error'
                      : '';
                  })()}
                  help={(() => {
                    if (validate) {
                      if (formState.phoneNumber === '') {
                        return i18n('required_field');
                      }
                      if (!isMobile(formState.phoneNumber)) {
                        return i18n('invalid_mobile');
                      }
                    }
                    return '';
                  })()}
                  onSelect={onChange('phoneNumber')}
                />
              </div>
            </Col>
          )}
        </Row>

        {renderCheckboxFormGroupOne()}
      </FormGroup>
    );
  };

  const renderFormGroupTwo = () => {
    return (
      <FormGroup
        visible={isVisibleGroup.legalForm}
        name="legalForm"
        title={i18n('legalForm.title')}
      >
        <p className="LicenceForm__form-description">
          {i18n('legalForm.description')}
        </p>
        <Row gutter={20} flex>
          <Col xs={12} xl={3}>
            <div className="ui-lib-margin-b_md">
              <Select
                i18n={i18n}
                placeholder={i18n('select')}
                showSearch={false}
                disabled={includes(['mubdia'], formState.licenceType)}
                items={props
                  .legalForms(formState.licenceType, props.user)
                  .map((i: IVariables) => ({
                    ...i,
                    label: i18n(i.label),
                  }))}
                value={formState.legalForm}
                onChange={onChange('legalForm')}
              />
            </div>
          </Col>
        </Row>
      </FormGroup>
    );
  };

  const renderFormGroupThree = () => {
    return (
      <FormGroup
        visible={isVisibleGroup.financialDetails}
        name="financialDetails"
        title={i18n('financialDetails.title')}
      >
        <p className="LicenceForm__form-description">
          {i18n('financialDetails.description')}
        </p>
        <Row gutter={20} flex>
          {isVisibleField.paidCapitalApprox && (
            <Col xs={12} xl={6}>
              <div className="ui-lib-margin-b_md">
                <Select
                  i18n={i18n}
                  placeholder={i18n('select')}
                  label={`${i18n('paidCapital.label')} *`}
                  items={PAID_CAPITAL_AND_REVENUES_SALES.map(item => ({
                    id: item.nameEn,
                    label: props.locale === 'en' ? item.nameEn : item.nameAr,
                  }))}
                  validateStatus={(() => {
                    return validate && formState.paidCapitalApprox === ''
                      ? 'error'
                      : undefined;
                  })()}
                  help={(() => {
                    return validate && formState.paidCapitalApprox === ''
                      ? i18n('required_field')
                      : '';
                  })()}
                  value={formState.paidCapitalApprox}
                  onChange={onChange('paidCapitalApprox')}
                />
              </div>
            </Col>
          )}
          {isVisibleField.revenuesSalesApprox && (
            <Col xs={12} xl={6}>
              <div className="ui-lib-margin-b_md">
                <Select
                  i18n={i18n}
                  placeholder={i18n('select')}
                  label={`${i18n('revenuesales.label')} *`}
                  items={PAID_CAPITAL_AND_REVENUES_SALES.map(item => ({
                    id: item.nameEn,
                    label: props.locale === 'en' ? item.nameEn : item.nameAr,
                  }))}
                  validateStatus={(() => {
                    return validate && formState.revenuesSalesApprox === ''
                      ? 'error'
                      : undefined;
                  })()}
                  help={(() => {
                    return validate && formState.revenuesSalesApprox === ''
                      ? i18n('required_field')
                      : '';
                  })()}
                  value={formState.revenuesSalesApprox}
                  onChange={onChange('revenuesSalesApprox')}
                />
              </div>
            </Col>
          )}
          {isVisibleField.durationOfTheCompany && (
            <Col xs={12} xl={3}>
              <div className="ui-lib-margin-b_md">
                <Select
                  i18n={i18n}
                  placeholder={i18n('select')}
                  label={`${i18n('companyDuration.label')} *`}
                  items={[
                    { id: '1', label: i18n('global.oneYear') },
                    { id: '2', label: i18n('global.twoYear') },
                    { id: '3', label: i18n('global.threeYear') },
                  ]}
                  validateStatus={(() => {
                    return validate && formState.durationOfTheCompany === ''
                      ? 'error'
                      : undefined;
                  })()}
                  help={(() => {
                    return validate && formState.durationOfTheCompany === ''
                      ? i18n('required_field')
                      : '';
                  })()}
                  value={formState.durationOfTheCompany}
                  onChange={onChange('durationOfTheCompany')}
                />
              </div>
            </Col>
          )}
          {isVisibleField.managerAppointmentDuration && (
            <Col xs={12} xl={3}>
              <div className="ui-lib-margin-b_md">
                <Select
                  i18n={i18n}
                  placeholder={i18n('select')}
                  label={`${i18n('managerDuration.label')} *`}
                  items={[
                    { id: '1', label: i18n('global.oneYear') },
                    { id: '2', label: i18n('global.twoYear') },
                    { id: '3', label: i18n('global.threeYear') },
                  ]}
                  validateStatus={(() => {
                    return validate &&
                      formState.managerAppointmentDuration === ''
                      ? 'error'
                      : undefined;
                  })()}
                  help={(() => {
                    return validate &&
                      formState.managerAppointmentDuration === ''
                      ? i18n('required_field')
                      : '';
                  })()}
                  value={formState.managerAppointmentDuration}
                  onChange={onChange('managerAppointmentDuration')}
                />
              </div>
            </Col>
          )}
          {isVisibleField.capital && (
            <Col xs={12} xl={3}>
              <div className="ui-lib-margin-b_md">
                <InputNumber
                  label={`${i18n('capital.inputLabel')} *`}
                  min={1000}
                  max={100000}
                  step={1000}
                  validateStatus={(() => {
                    return validate && formState.capital === ''
                      ? 'error'
                      : undefined;
                  })()}
                  roundToStepOnBlur
                  help={(() => {
                    return validate && formState.capital === ''
                      ? i18n('required_field')
                      : '';
                  })()}
                  defaultValue={formState.capital}
                  onChange={onChange('capital', 'input-number')}
                />
              </div>
            </Col>
          )}
          {isVisibleField.totalNumberOfShares && (
            <Col xs={12} xl={3}>
              <div className="ui-lib-margin-b_md">
                <InputNumber
                  label={`${i18n('shares.inputLabel')} *`}
                  disabled
                  min={1000}
                  max={100000}
                  step={1000}
                  value={formState.totalNumberOfShares}
                />
              </div>
            </Col>
          )}
        </Row>
      </FormGroup>
    );
  };

  const renderFormGroupFour = () => {
    return (
      <FormGroup
        visible={isVisibleGroup.branchDocuments}
        name="branchDocuments"
        title={i18n('branchDocuments.title')}
      >
        <p className="LicenceForm__form-description">
          {i18n('branchDocuments.description')}
        </p>
        <Row gutter={20} flex>
          {isVisibleField.parentCompanyLicence && (
            <Col xs={12} xl={2}>
              <div className="ui-lib-margin-b_md">
                <FileUpload
                  accept={['application/pdf']}
                  help={(() => {
                    return branchOf(['branchFZ', 'branchUAE'])
                      ? `${i18n('branchDocuments.parentCompanyLicence')} *`
                      : `${i18n(
                          'branchDocuments.parentCompanyLicenceMOFAApproved',
                        )} *`;
                  })()}
                  i18n={i18n}
                  files={formState.documents
                    .filter(
                      (i: IVariables) => i.fieldName === 'parentCompanyLicence',
                    )
                    .map((i: IVariables) => ({
                      file: i,
                      status: 'success',
                      uploaded: i.size,
                    }))}
                  validateStatus={(() => {
                    return validate && !isUploaded('parentCompanyLicence')
                      ? 'error'
                      : '';
                  })()}
                  onChange={onFileUpload('parentCompanyLicence')}
                  onRemove={onFileRemove('parentCompanyLicence')}
                />
              </div>
            </Col>
          )}
          {isVisibleField.parentCompanyMoaDocument && (
            <Col xs={12} xl={2}>
              <div className="ui-lib-margin-b_md">
                <FileUpload
                  accept={['application/pdf']}
                  help={(() => {
                    return branchOf(['branchFZ', 'branchUAE'])
                      ? `${i18n('branchDocuments.parentCompanyMoaDocument')} *`
                      : `${i18n(
                          'branchDocuments.parentCompanyMoaDocumentMOFAApproved',
                        )} *`;
                  })()}
                  i18n={i18n}
                  files={formState.documents
                    .filter(
                      (i: IVariables) =>
                        i.fieldName === 'parentCompanyMoaDocument',
                    )
                    .map((i: IVariables) => ({
                      file: i,
                      status: 'success',
                      uploaded: i.size,
                    }))}
                  validateStatus={(() => {
                    return validate && !isUploaded('parentCompanyMoaDocument')
                      ? 'error'
                      : '';
                  })()}
                  onChange={onFileUpload('parentCompanyMoaDocument')}
                  onRemove={onFileRemove('parentCompanyMoaDocument')}
                />
              </div>
            </Col>
          )}
          {isVisibleField.freezoneNoc && (
            <Col xs={12} xl={2}>
              <div className="ui-lib-margin-b_md">
                <FileUpload
                  accept={['application/pdf']}
                  help={`${i18n('branchDocuments.freezoneNoc')} *`}
                  i18n={i18n}
                  files={formState.documents
                    .filter((i: IVariables) => i.fieldName === 'freezoneNoc')
                    .map((i: IVariables) => ({
                      file: i,
                      status: 'success',
                      uploaded: i.size,
                    }))}
                  validateStatus={(() => {
                    return validate && !isUploaded('freezoneNoc')
                      ? 'error'
                      : '';
                  })()}
                  onChange={onFileUpload('freezoneNoc')}
                  onRemove={onFileRemove('freezoneNoc')}
                />
              </div>
            </Col>
          )}
          {isVisibleField.noBranchAD && (
            <Col xs={12} xl={6}>
              <div className="ui-lib-margin-b_md">
                <FileUpload
                  accept={['application/pdf']}
                  help={`${i18n('branchDocuments.noBranchAD')} *`}
                  i18n={i18n}
                  files={formState.documents
                    .filter((i: IVariables) => i.fieldName === 'noBranchAD')
                    .map((i: IVariables) => ({
                      file: i,
                      status: 'success',
                      uploaded: i.size,
                    }))}
                  validateStatus={(() => {
                    return validate && !isUploaded('noBranchAD') ? 'error' : '';
                  })()}
                  onChange={onFileUpload('noBranchAD')}
                  onRemove={onFileRemove('noBranchAD')}
                />
              </div>
            </Col>
          )}
        </Row>
      </FormGroup>
    );
  };

  const renderFormGroupFive = () => {
    return (
      <FormGroup
        visible={isVisibleGroup.activities}
        name="activity"
        title={i18n('activities.title')}
      >
        <p className="LicenceForm__form-description">
          {isBranch
            ? i18n('activities.descriptionBranch')
            : i18n('activities.description')}
        </p>
        <p className="LicenceForm__form-description">
          {isBranch
            ? i18n('activities.subDescriptionBranch')
            : i18n('activities.subDescriptionBranch')}
        </p>
        {validate && formState.activities.length === 0 && (
          <div className="ui-lib-margin-b_md">
            <Alert
              message={i18n('required_select_activities')}
              status="error"
            />
          </div>
        )}
        {formState.licenceType === 'mubdia' && formState.activities.length > 1 && (
          <div className="ui-lib-margin-b_md">
            <Alert message={i18n('activities_error_length')} status="error" />
          </div>
        )}
        <ActivityGroup
          i18n={i18n}
          actions={props.actions}
          activityCategory={props.economicLicense.activityCategory}
          activitySubCategory={props.economicLicense.activitySubCategory}
          showTabs={formState.licenceType === 'instant'}
          activities={activities}
          categories={categories}
          showCategories={
            isBranch
              ? formState.branch !== 'branchAD'
              : !includes(['instant', 'tech'], formState.licenceType)
          }
          disableCategories={formState.licenceType === 'tech'}
          selected={formState.activities}
          updateSearchData={(field: string, value: string) => {
            props.actions.economicLicense.update({
              ...props.economicLicense,
              [field]: value,
            });
          }}
          locale={locale}
          getActivities={getActivities(props, formState.licenceType, ownership)}
          onItemClick={onSelectActivity}
        />
      </FormGroup>
    );
  };

  const renderFormGroupSix = () => {
    return (
      <FormGroup
        visible={isVisibleGroup.privilegesFacilities}
        name="privilegesFacilities"
        title={i18n('privilegesFacilities.title')}
      >
        <PrivilegesFacilitiesGroup
          i18n={i18n}
          locale={locale}
          value={formState.issuePlaceCode}
          activities={formState.activities}
          businessLocation={formState.businessLocation}
          authorizedOperations={authorizedOperations}
          getLocationActivities={getLocationActivities(formState.activities)}
          onChange={onChange('issuePlaceCode')}
        />
      </FormGroup>
    );
  };

  const renderFormGroupSeven = () => {
    return (
      <FormGroup
        visible={isVisibleGroup.ownership}
        name="ownership"
        title={i18n('ownership.title')}
      >
        <Ownership
          ownership={ownership}
          formState={pick(formState, [
            'licenceType',
            'legalForm',
            'branch',
            'isGCC',
            'documents',
          ])}
          group={{
            representatives: props.representatives(
              formState.licenceType,
              isBranch,
              formState.legalForm,
              countries,
              ownership,
              formState.branch,
              formState.isGCC,
              formState.parentCompanyLegalForm,
            ),
          }}
          i18n={i18n}
          files={formState.documents}
          onFileUpload={onFileUpload}
          onRemoveFile={onFileRemove}
          locale={locale}
          licenceType={formState.licenceType}
          legalForm={formState.legalForm}
          branchDetails={{
            branch: formState.branch,
            isGCC: formState.isGCC,
            parentCompanyLegalForm: formState.parentCompanyLegalForm,
          }}
          onSubmit={onSubmitOwnership}
          onDelete={onDeleteOwnership}
          validate={validate}
          countries={countries}
        />
      </FormGroup>
    );
  };

  const renderFormGroupEight = () => {
    return (
      <FormGroup
        visible={isVisibleGroup.economicName}
        name="economicName"
        title={(() => {
          return branchOf(['branchAD'])
            ? i18n('economicName.titleView')
            : i18n('economicName.title');
        })()}
      >
        <LicenseName
          i18n={i18n}
          locale={locale}
          formState={pick(formState, [
            'licenceType',
            'branch',
            'legalForm',
            'tradeNameEn',
            'tradeNameAr',
            'nameReservationPeriod',
            'activities',
          ])}
          currentCategory={props.currentCategory}
          onReserve={(item: IVariables) => {
            const newValue: IVariables = {};
            if (has(item, 'nameEn')) {
              newValue.tradeNameEn = item.nameEn;
            }
            if (has(item, 'nameAr')) {
              newValue.tradeNameAr = item.nameAr;
            }
            if (has(item, 'nameReservationPeriod')) {
              newValue.nameReservationPeriod = item.nameReservationPeriod;
            }
            setFormState({
              ...formState,
              ...newValue,
            });
          }}
          showAutoGenerate={includes(
            ['tajer', 'allInOne', 'instant'],
            formState.licenceType,
          )}
          disableEditing={isBranch}
          showNameReservationPeriod={
            !includes(['tajer', 'allInOne', 'instant'], formState.licenceType)
          }
          autoGenerateTradeName={autoGenerateTradeName}
          getTransliteration={getTransliteration}
          onCheckTradeName={onCheckTradeName}
          setTradeNameCheckStatus={(status: IVariables) => {
            props.actions.tradeNameCheckStatus.update(status);
            const newFormState = Object.assign({}, formState);
            newFormState.tradeNameCheckStatus = status;
            setFormState({
              ...newFormState,
            });
          }}
          onLoadSuggestions={onLoadSuggestions}
          validate={validate}
          {...props}
        />
      </FormGroup>
    );
  };

  const renderFormGroupNine = () => {
    return (
      <FormGroup
        visible={isVisibleGroup.contact}
        name="contact"
        title={i18n('contact.title')}
      >
        <p className="LicenceForm__form-description">
          {i18n('contact.description1')}
        </p>
        <Row gutter={20} flex>
          {isVisibleField.tawtheeqNumber && (
            <Col xs={12} xl={3}>
              <div className="ui-lib-margin-b_md">
                <Input
                  aria-label="global.tawtheeqNumber"
                  label={`${i18n('global.tawtheeqNumber')} ${
                    includes(['allInOne'], formState.licenceType) ? '*' : ''
                  }`}
                  validateStatus={(() => {
                    return validate &&
                      includes(['allInOne'], formState.licenceType) &&
                      formState.tawtheeqNumber === ''
                      ? 'error'
                      : null;
                  })()}
                  help={(() => {
                    return validate &&
                      includes(['allInOne'], formState.licenceType) &&
                      formState.tawtheeqNumber === ''
                      ? i18n('required_field')
                      : '';
                  })()}
                  value={formState.tawtheeqNumber}
                  onChange={onChange('tawtheeqNumber')}
                />
              </div>
            </Col>
          )}
          <Col xs={12} xl={3}>
            <div className="ui-lib-margin-b_md">
              <Input
                aria-label="global.officialEmail"
                label={`${i18n('global.officialEmail')} *`}
                validateStatus={(() => {
                  return validate && !isEmail(formState.officialEmail)
                    ? 'error'
                    : null;
                })()}
                help={(() => {
                  if (validate) {
                    if (formState.officialEmail === '') {
                      return i18n('required_field');
                    }
                    if (!isEmail(formState.officialEmail)) {
                      return i18n('invalid_email');
                    }
                  }
                  return '';
                })()}
                value={formState.officialEmail}
                onChange={onChange('officialEmail')}
              />
            </div>
          </Col>
          <Col xs={12} xl={3}>
            <div className="ui-lib-margin-b_md">
              <InputTelephone
                code={971}
                countries={[
                  {
                    code: 971,
                    name: 'UAE',
                  },
                ]}
                i18n={i18n}
                label={`${i18n('global.officialPhone')} *`}
                validateStatus={(() => {
                  return validate && !isMobile(formState.officialMobile)
                    ? 'error'
                    : '';
                })()}
                help={(() => {
                  if (validate) {
                    if (formState.officialMobile === '') {
                      return i18n('required_field');
                    }
                    if (!isMobile(formState.officialMobile)) {
                      return i18n('invalid_mobile');
                    }
                  }
                  return '';
                })()}
                value={formState.officialMobile}
                onSelect={onChange('officialMobile')}
              />
            </div>
          </Col>
          {isVisibleField.contactPersonPhone && (
            <Col xs={12} xl={3}>
              <div className="ui-lib-margin-b_md">
                <InputTelephone
                  code={971}
                  countries={[
                    {
                      code: 971,
                      name: 'UAE',
                    },
                  ]}
                  i18n={i18n}
                  label={`${i18n('global.contactPersonPhone')} *`}
                  value={formState.contactPersonPhone}
                  validateStatus={(() => {
                    return validate && !isMobile(formState.contactPersonPhone)
                      ? 'error'
                      : '';
                  })()}
                  help={(() => {
                    if (validate) {
                      if (formState.contactPersonPhone === '') {
                        return i18n('required_field');
                      }
                      if (!isMobile(formState.contactPersonPhone)) {
                        return i18n('invalid_mobile');
                      }
                    }
                    return '';
                  })()}
                  onSelect={onChange('contactPersonPhone')}
                />
              </div>
            </Col>
          )}
        </Row>
        {isVisibleField.ubo && (
          <>
            <p className="LicenceForm__form-description">
              {includes(['instant', 'tajer'], formState.licenceType)
                ? i18n('contact.description2')
                : ''}
            </p>
            <Row gutter={20} flex>
              <Col xs={12} xl={3}>
                <div className="ui-lib-margin-b_md">
                  <Input
                    aria-label="global.ubo"
                    label={i18n('global.ubo')}
                    value={formState.ubo}
                    onChange={onChange('ubo')}
                    validateStatus={(() => {
                      return validate &&
                        includes(['instant', 'tajer'], formState.licenceType) &&
                        formState.ubo === ''
                        ? 'error'
                        : null;
                    })()}
                    help={(() => {
                      return validate &&
                        includes(['instant', 'tajer'], formState.licenceType) &&
                        formState.ubo === ''
                        ? i18n('required_field')
                        : '';
                    })()}
                  />
                </div>
              </Col>
            </Row>
          </>
        )}
        <Row gutter={20} flex>
          <Col xs={12}>
            <Checkbox
              checked={formState.confirmation}
              label={i18n('contact.confirmation')}
              name="confirmation"
              validateStatus={(() => {
                return validate && !formState.confirmation ? 'error' : '';
              })()}
              onChange={onToggleCheckbox('confirmation')}
            />
          </Col>
        </Row>
      </FormGroup>
    );
  };

  const renderFormGroupTen = () => {
    return (
      <FormGroup
        visible={isVisibleGroup.applicantContact}
        name="applicantContact"
        title={i18n('applicantContact.title')}
      >
        <p className="LicenceForm__form-description">
          {i18n('applicantContact.description')}
        </p>
        <Row gutter={20} flex>
          <Col xs={12} xl={3}>
            <div className="ui-lib-margin-b_md">
              <Input
                aria-label="global.name"
                label={i18n('global.name')}
                value={formState.applicantName}
                onChange={onChange('applicantName')}
              />
            </div>
          </Col>
          <Col xs={12} xl={3}>
            <div className="ui-lib-margin-b_md">
              <Input
                aria-label="global.email"
                label={i18n('global.email')}
                value={formState.applicantEmail}
                onChange={onChange('applicantEmail')}
                validateStatus={(() => {
                  return validate && !isEmail(formState.applicantEmail)
                    ? 'error'
                    : null;
                })()}
                help={(() => {
                  if (validate) {
                    if (formState.applicantEmail === '') {
                      return i18n('required_field');
                    }
                    if (!isEmail(formState.applicantEmail)) {
                      return i18n('invalid_email');
                    }
                  }
                  return '';
                })()}
              />
            </div>
          </Col>
          <Col xs={12} xl={3}>
            <div className="ui-lib-margin-b_md">
              <InputTelephone
                code={971}
                countries={[
                  {
                    code: 971,
                    name: 'UAE',
                  },
                ]}
                i18n={i18n}
                label={`${i18n('global.phone')}`}
                value={formState.applicantPhoneNumber}
                onSelect={onChange('applicantPhoneNumber')}
                validateStatus={(() => {
                  return validate && !isMobile(formState.applicantPhoneNumber)
                    ? 'error'
                    : '';
                })()}
                help={(() => {
                  if (validate) {
                    if (formState.applicantPhoneNumber === '+971') {
                      return i18n('required_field');
                    }
                    if (!isMobile(formState.applicantPhoneNumber)) {
                      return i18n('invalid_mobile');
                    }
                  }
                  return '';
                })()}
              />
            </div>
          </Col>
        </Row>
      </FormGroup>
    );
  };

  const renderFormGroupEleven = () => {
    return (
      <FormGroup
        visible={isVisibleGroup.onlineTradingDetails}
        name="onlineTradingDetails"
        title={i18n('onlineTradingDetails.title')}
      >
        <Row gutter={20} flex>
          <Col xs={12} xl={3}>
            <div className="ui-lib-margin-b_md">
              <Select
                i18n={i18n}
                placeholder={i18n('select')}
                label={`${i18n('onlineTradingDetails.socialMediaType')} ${
                  isEcommerceActivitySelected ? '*' : ''
                }`}
                items={[
                  { id: 'website', label: i18n('global.website') },
                  { id: 'facebook', label: i18n('global.fb') },
                  { id: 'twitter', label: i18n('global.twitter') },
                  { id: 'instagram', label: i18n('global.instagram') },
                  { id: 'snapchat', label: i18n('global.snapchat') },
                ]}
                value={formState.socialMediaType}
                onChange={onChange('socialMediaType')}
                validateStatus={(() => {
                  return validate &&
                    isEcommerceActivitySelected &&
                    formState.socialMediaType === ''
                    ? 'error'
                    : undefined;
                })()}
                help={(() => {
                  return validate &&
                    isEcommerceActivitySelected &&
                    formState.socialMediaType === ''
                    ? i18n('required_field')
                    : '';
                })()}
              />
            </div>
          </Col>
          <Col xs={12} xl={3}>
            <div className="ui-lib-margin-b_md">
              <Input
                aria-label="onlineTradingDetails.socialMediaAccount"
                label={`${i18n('onlineTradingDetails.socialMediaAccount')} ${
                  isEcommerceActivitySelected ? '*' : ''
                }`}
                value={formState.socialMediaAccount}
                onChange={onChange('socialMediaAccount')}
                validateStatus={(() => {
                  return validate &&
                    isEcommerceActivitySelected &&
                    formState.socialMediaAccount === ''
                    ? 'error'
                    : null;
                })()}
                help={(() => {
                  return validate &&
                    isEcommerceActivitySelected &&
                    formState.socialMediaAccount === ''
                    ? i18n('required_field')
                    : '';
                })()}
              />
            </div>
          </Col>
          <Col xs={12} xl={3}>
            <div className="ui-lib-margin-b_md">
              <Input
                aria-label="onlineTradingDetails.website"
                label={`${i18n('onlineTradingDetails.website')} ${
                  isEcommerceActivitySelected ? '*' : ''
                }`}
                value={formState.website}
                onChange={onChange('website')}
                validateStatus={(() => {
                  if (validate) {
                    if (
                      isEcommerceActivitySelected &&
                      formState.website === ''
                    ) {
                      return 'error';
                    }
                    if (formState.website && !isURL(formState.website)) {
                      return i18n('error');
                    }
                  }
                  return '';
                })()}
                help={(() => {
                  if (validate) {
                    if (
                      isEcommerceActivitySelected &&
                      formState.website === ''
                    ) {
                      return i18n('required_field');
                    }
                    if (formState.website && !isURL(formState.website)) {
                      return i18n('invalid_url');
                    }
                  }
                  return '';
                })()}
              />
            </div>
          </Col>
        </Row>
      </FormGroup>
    );
  };

  const renderFormGroupTwelve = () => {
    return (
      <FormGroup
        visible={isVisibleGroup.attachments}
        name="attachments"
        title={i18n('attachments.title')}
      >
        <AttachmentsGroup
          i18n={i18n}
          files={formState.documents}
          activities={formState.activities}
          legalType={getBusinessLegalFormCode(
            getLicenseType(formState.licenceType, formState.branch),
            formState.legalForm,
          )}
          licenceType={formState.licenceType}
          onFileUpload={onFileUpload}
          onRemoveFile={onFileRemove}
          fetchAttachments={fetchAttachments}
        />
      </FormGroup>
    );
  };

  const renderFormGroupThirteen = () => {
    return (
      <FormGroup
        visible={isVisibleGroup.termsConditions}
        name="termsConditions"
        title={i18n('termsAndConditions.title')}
      >
        <TermsConditionsGroup
          activities={formState.activities}
          legalType={getBusinessLegalFormCode(
            getLicenseType(formState.licenceType, formState.branch),
            formState.legalForm,
          )}
          locale={locale}
          licenceType={formState.licenceType}
          fetchAttachments={fetchAttachments}
        />
        <Checkbox
          checked={formState.termsConditions}
          label={i18n('termsAndConditions.label')}
          name="termsConditions"
          onChange={onToggleCheckbox('termsConditions')}
          validateStatus={(() => {
            return validate && !formState.termsConditions ? 'error' : '';
          })()}
        />
      </FormGroup>
    );
  };

  return (
    <Container locale={props.locale}>
      {props.economicLicenceSubmitting && <Loading />}

      <div
        className={classNames('LicenceForm', 'ui-lib-margin-b_xl', {
          'ui-lib-accordion': !isWide,
        })}
      >
        {renderAlert()}

        {/* //TODO: Remove this once confirm */}
        <Form
          {...props}
          submitButton={
            isVisibleGroup.defaultVisible && {
              label: i18n('submit'),
              onClick: onSubmit,
            }
          }
          cancelLink={
            isVisibleGroup.defaultVisible && {
              label: i18n('cancel'),
              href: BASE_PATH,
            }
          }
        >
          {renderFormGroupZero()}

          {renderFormGroupOne()}

          {renderFormGroupTwo()}

          {renderFormGroupThree()}

          {renderFormGroupFour()}

          {formState.licenceType !== 'instant' && renderLocationGroup()}

          {renderFormGroupFive()}

          {formState.licenceType === 'instant' && renderLocationGroup()}

          {renderFormGroupSix()}

          {renderFormGroupSeven()}

          {renderFormGroupEight()}

          {renderFormGroupNine()}

          {renderFormGroupTen()}

          {renderFormGroupEleven()}

          {renderFormGroupTwelve()}

          {renderFormGroupThirteen()}
        </Form>

        {/* {isVisibleGroup.defaultVisible && (
          <div
            className={classNames('LicenceForm__button-group', {
              'LicenceForm__button-group-mobile': !isWide,
            })}
          >
            <Button
              aria-label="button-submit"
              label={i18n('submit')}
              onClick={onSubmit}
            />
            <div
              className={classNames('LicenceForm__button-cancel', {
                'LicenceForm__button-cancel-mobile': !isWide,
              })}
            >
              {i18n('cancel')}
            </div>
          </div>
        )} */}
      </div>
    </Container>
  );
}

LicenceForm.propTypes = {
  ...routePropTypes,
  currentCategory: PropTypes.shape({}).isRequired,
  autoGenerateTradeName: PropTypes.func.isRequired,
  onCheckTradeName: PropTypes.func.isRequired,
  onLoadSuggestions: PropTypes.func.isRequired,
  countries: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  actions: PropTypes.shape({
    economicLicense: PropTypes.shape({
      update: PropTypes.func,
    }),
    tradeNameCheckStatus: PropTypes.shape({
      update: PropTypes.func,
    }),
  }),
  representatives: PropTypes.func,
  economicLicense: PropTypes.shape({
    activityCategory: PropTypes.any,
    activitySubCategory: PropTypes.any,
  }),
  locale: PropTypes.string,
  user: PropTypes.shape({
    Type: PropTypes.string,
  }),
  legalForms: PropTypes.func,
  licenceTypes: PropTypes.func,
  economicLicenceServerError: PropTypes.string,
  businessLocations: PropTypes.func,
};

LicenceForm.defaultProps = {
  locale: '',
  actions: {
    economicLicense: {
      update: () => {},
    },
  },
  representatives: () => {},
  economicLicense: {},
  user: {},
  legalForms: () => {},
  licenceTypes: () => {},
  economicLicenceServerError: '',
  businessLocations: () => {},
};

export default withTemplateHooks(LicenceForm);
