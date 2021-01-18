import React, { useState, useEffect } from 'react';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import Container from 'client/containers';

import Alert from '@tamm/ui-lib-v2-alert';
import Form from '@tamm/ui-lib-v2-form';
import InformationalTemplate from '@tamm/ui-lib-v2-informational-template';
import RadioGroup from '@tamm/ui-lib-v2-radio-group';
import Select from '@tamm/ui-lib-v2-select';

import Loading from 'client/templates/Loading';
import Sidebar from 'client/templates/Sidebar';

import { AMENDMENT_TYPES as types } from 'client/config/amendments/constants/amendmentObjects';
import {
  profileTypes,
  UPDATE,
  UAE,
  ADD,
  LocalCompany,
  GovernmentEnity,
  SOMETHING_WENT_WRONG,
} from 'client/config/amendments/constants';
import { validation } from 'client/config/amendments/utils/validations';
import licenseTypes from 'client/config/amendments/constants/licenseTypes';

import ProfileForm from './ProfileForm';

/**
 * Profile template
 * @param       {Object} props
 * @returns     {JSX}
 */
function Profile(props: IVariables) {
  const {
    i18n,
    locale,
    currentStep,
    currentSubStep,
    description,
    getPossibleRepTypes,
    legalForm,
    licenseType,
    onSubmit,
    pageLoading,
    profile,
    // showSidebar,
    steps,
    stepsStatus,
    subTitle,
  } = props;

  const [representativeTypeList, setRepresentativeTypeList] = useState(
    getPossibleRepTypes(props),
  );
  useEffect(() => {
    setRepresentativeTypeList(getPossibleRepTypes(props));
  }, [licenseType, legalForm]);
  const [validateProfile, setvalidateProfile] = useState('');
  const [validateProfileFailure, setvalidateProfileFailure] = useState(false);
  const disableRepType = profile.action === UPDATE;

  const disableProfileType = (representativeType: string) =>
    !(
      (profile.action === ADD || profile.formValues.status === ADD) &&
      representativeType === types.PARTNERS &&
      (licenseType === licenseTypes.ECONOMIC ||
        licenseType === licenseTypes.INSTANT)
    );

  const handleRepTypeChange = (value: string) => {
    props.actions.profile.update({
      ...profile,
      representativeType: value,
      formValues: {},
      profileType: disableProfileType(value)
        ? profileTypes.INDIVIDUAL
        : profile.profileType || profileTypes.INDIVIDUAL,
    });
  };

  const getNationality = (fieldName: string, value: string) => {
    if (
      fieldName === 'companyType' &&
      (value === LocalCompany || value === GovernmentEnity)
    ) {
      return { domicile: UAE };
    }
    if (fieldName === 'companyType' && value !== LocalCompany) {
      return { domicile: null };
    }
    if (fieldName === 'domicile' && value !== LocalCompany) {
      return { domicile: value };
    }
    return {};
  };
  const handleChangeProfileForm = (fieldName: string, value: any) => {
    setvalidateProfile('');
    setvalidateProfileFailure(false);
    props.actions.profile.update({
      ...profile,
      ...(fieldName === 'profileType' ? { profileType: value } : {}),
      formValues: {
        ...profile.formValues,
        [fieldName]: value,
        ...(fieldName === 'companyType' || fieldName === 'domicile'
          ? getNationality(fieldName, value)
          : {}),
      },
    });
  };

  const [validate, setValidate] = useState(false);

  const validateOnSubmit = async () => {
    setValidate(true);
    const isValid = validation(props, profile.formValues, '');
    if (!isValid) {
      return;
    }
    const returnMessage = await onSubmit(props);

    if (
      returnMessage &&
      returnMessage.message === 'Success' &&
      Object.values(returnMessage.data).length > 0
    ) {
      setvalidateProfile(returnMessage.data);
    } else if (
      returnMessage &&
      returnMessage.success === false &&
      returnMessage.message
    ) {
      setvalidateProfileFailure(true);
    }
  };

  const label: IVariables = {};
  if (profile.action === UPDATE) {
    label.button = 'button.update';
    label.subTitle = 'Edit';
  } else {
    label.button = 'button.add';
    label.subTitle = 'Add';
  }

  const onBack = () => props.history.push('/amendments/ownership');

  const formprops = profile.representativeType
    ? {
        submitButton: {
          label: i18n(label.button),
          onClick: validateOnSubmit,
        },
        cancelLink: {
          label: i18n('button.cancel'),
          href: `/amendments/ownership`,
        },
      }
    : {
        backButton: {
          label: i18n('button.back'),
          withArrow: true,
          alignIcon: 'start',
          uiType: 'secondary',
          onClick: onBack,
        },
      };

  return (
    <React.Fragment>
      {pageLoading && <Loading />}
      <Container
        locale={locale}
        sidebar={
          <Sidebar
            currentStep={currentStep}
            currentSubStep={currentSubStep}
            i18n={i18n}
            steps={steps}
            stepsStatus={stepsStatus}
            // showSidebar={showSidebar}
          />
        }
      >
        <Form id="form-buttons" {...formprops}>
          <Form.Fieldset>
            <InformationalTemplate>
              <h3>{i18n(subTitle, { value: label.subTitle })}</h3>
              <p>{i18n(description)}</p>
            </InformationalTemplate>
          </Form.Fieldset>
          <Form.Fieldset twoColumns gapSize="small">
            <Select
              aria-label={i18n('title.representativeType')}
              items={representativeTypeList}
              label={i18n('title.representativeType')}
              value={profile.representativeType}
              showSearch={false}
              onChange={handleRepTypeChange}
              disabled={disableRepType}
            />
            {!disableProfileType(profile.representativeType) && (
              <RadioGroup
                groupLabel={i18n('profileType')}
                i18n={i18n}
                align="horizontal"
                defaultValue={i18n(`profileTypes.${profile.profileType}`)}
                items={Object.values(profileTypes).map((type: string) => ({
                  id: type,
                  label: i18n(`profileTypes.${type}`),
                }))}
                onChange={(e: any) =>
                  handleChangeProfileForm('profileType', e.target.id)
                }
              />
            )}
          </Form.Fieldset>
          <Form.Fieldset>
            <ProfileForm
              {...props}
              representativeType={profile.representativeType}
              profileType={profile.profileType}
              formValues={profile.formValues}
              changeProfileForm={handleChangeProfileForm}
              validateOnSubmit={validate}
              profileValidatedResponse={validateProfile}
              i18n={i18n}
            />

            {validateProfileFailure && (
              <Alert message={i18n(SOMETHING_WENT_WRONG)} status="error" />
            )}
          </Form.Fieldset>
        </Form>
      </Container>
    </React.Fragment>
  );
}

Profile.propTypes = {
  ...routePropTypes,
};

export default withTemplateHooks(Profile);
