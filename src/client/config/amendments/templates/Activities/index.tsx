/* eslint-disable complexity */
import React, { useState } from 'react';
import Container from 'client/containers';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import Sidebar from 'client/templates/AmendmentsSidebar';
import { debounce, cloneDeep } from 'lodash';
import Pagination from '@tamm/ui-lib-v2-pagination';
import Spinner from '@tamm/ui-lib-v2-spinner';
import Form from '@tamm/ui-lib-v2-form';
import Label from '@tamm/ui-lib-v2-label';
import Checkbox from '@tamm/ui-lib-v2-checkbox';
import SearchInput from '@tamm/ui-lib-v2-search-input';
import Select from '@tamm/ui-lib-v2-select';
import Informational from '@tamm/ui-lib-v2-informational-template';

import Alert from '@tamm/ui-lib-v2-alert';
import {
  getCategories,
  getSubcategories,
  findFilterActivities,
} from '../../utils/activityCategories';
import LICENSE_TYPES from '../../constants/licenseTypes';

/**
 * Home template
 * @param       {Object} props
 * @returns     {JSX}
 */

function Activities(props: IVariables) {
  const {
    i18n,
    licenceDetails,
    activityList,
    locale,
    activity,
    licenseType,
    dedErrorMessage,
    amendmentServerError,
  } = props;

  const { changeActivities, removeActivities } = activity;
  const {
    activityCategory,
    activitySubCategory,
    searchTerm,
  } = activity.searchFields;
  const [didChange, setDidChange] = useState(true);
  const [existingActivities, setExistingActivities] = useState<IVariables[]>(
    licenceDetails.activities,
  );
  const [paginatelist, setPaginatelist] = useState<IVariables>([]);

  const [subCategories, setSubCategories] = useState<
    {
      id: any;
      label: string;
    }[]
  >([]);

  const [page, setPage] = useState(1);
  const pageSize = 10;
  const handleRemoveActivities = (act: IVariables) => {
    // if act is in existingActivities
    // then remove from existingActivities and add in removeActivities
    // if act is not in existingActivities then add in existingActivities
    // and remove from removeActivities

    const itemFromExist = existingActivities.find(
      (a: IVariables) => act.activityCode === a.activityCode,
    );

    let newArray: IVariables[] = [];

    if (itemFromExist) {
      newArray = existingActivities.filter(
        (a: IVariables) => act.activityCode !== a.activityCode,
      );
      props.actions.activity.update({
        ...activity,
        ...{
          removeActivities: [...removeActivities, act],
        },
      });
    } else {
      newArray = removeActivities.filter(
        (a: IVariables) => act.activityCode !== a.activityCode,
      );
      props.actions.activity.update({
        ...activity,
        ...{
          removeActivities: newArray,
        },
      });
      newArray = [
        ...existingActivities,
        ...[
          {
            activityCode: act.activityCode,
            activityNameArb: act.activityNameArb || act.activityNameAr,
            activityNameEng: act.activityNameEng || act.activityNameEn,
          },
        ],
      ];
    }
    setExistingActivities(newArray);
  };

  // for search , category , sub catgegbory change
  const onChange = (field: string) => {
    return (value: string) => {
      const val = value !== 'all' ? value : '';
      setPage(1);
      props.actions.activityList.update({
        pagesInList: [],
        list: [],
        updating: false,
        totalItems: 0,
      });

      props.actions.activity.update({
        ...activity,
        ...{
          searchFields: {
            activityCategory:
              field === 'category'
                ? val
                : activity.searchFields.activityCategory,
            activitySubCategory:
              field === 'subCategory'
                ? val
                : activity.searchFields.activitySubCategory,
            searchTerm:
              field === 'search' ? val : activity.searchFields.searchTerm,
          },
        },
      });
      if (field === 'category') {
        setSubCategories(getSubcategories(locale, val));
      }
    };
  };

  // handle all activities checkbox change
  const handleActivityChange = (act: any) => {
    const itemFromExist = licenceDetails.activities.find(
      (a: IVariables) => act.activityCode === a.activityCode,
    );
    const itemFromNew = changeActivities.find(
      (a: IVariables) => act.activityCode === a.activityCode,
    );

    let newArray: IVariables = [];

    if (itemFromExist) {
      handleRemoveActivities(act);
    } else {
      if (itemFromNew) {
        newArray = changeActivities.filter(
          (a: IVariables) => act.activityCode !== a.activityCode,
        );
      } else
        newArray = [
          ...changeActivities,
          ...[
            {
              activityCode: act.activityCode,
              activityNameArb: act.activityNameArb || act.activityNameAr,
              activityNameEng: act.activityNameEng || act.activityNameEn,
            },
          ],
        ];
      props.actions.activity.update({
        ...activity,
        ...{
          changeActivities: newArray,
        },
      });
    }
  };

  // show items based on response or from cache if items from that pages are available
  const setPaginationList = (pageNumber: number) => {
    const pagedItems = activityList.list.filter(
      (act: IVariables) => act.pageNumber === pageNumber.toString(),
    );
    setPaginatelist(pagedItems);
  };

  // handler for pagination component
  const handlePagination = (pageNumber: number) => {
    setPage(pageNumber);
    props.setActivities({
      props,
      pageNumber: pageNumber.toString(),
      pageSize: pageSize.toString(),
    });
  };

  // filter existing activties with removed activities
  React.useEffect(() => {
    if (changeActivities.length || existingActivities.length)
      setDidChange(true);
  }, [activity]);

  // filter existing activties with removed activities
  React.useEffect(() => {
    const array = cloneDeep(
      findFilterActivities(
        licenceDetails.activities,
        removeActivities,
        false,
        undefined,
      ),
    );
    setExistingActivities(array);
  }, [licenceDetails.activities]);

  // set paginations based after activity list is populated async
  React.useEffect(() => {
    setPaginationList(page);
  }, [activityList]);

  // call set activites on category change
  React.useEffect(() => {
    props.setActivities({
      props,
      pageNumber: page.toString(),
      pageSize: pageSize.toString(),
    });
  }, [activity.searchFields]);

  // component to render checkbox
  const RenderCheckbox = ({
    actv,
    type,
  }: {
    actv: IVariables;
    type: string;
  }) => {
    return (
      actv && (
        <Checkbox
          key={actv.activityCode}
          //unchecked if it exists in removeActivities
          checked={
            type === 'remove'
              ? false
              : !![...changeActivities, ...existingActivities].find(
                  (a: IVariables) => actv.activityCode === a.activityCode,
                )
          }
          id={actv.activityCode}
          label={actv.activityNameEn || actv.activityNameEng}
          name={actv.activityCode}
          onClick={() => handleActivityChange(actv)}
        />
      )
    );
  };

  const createActivityPayload = () => {
    if (changeActivities.length || existingActivities.length) {
      setDidChange(true);
      const ActivityCode = [
        ...removeActivities.map((a: IVariables) => ({
          ActivityCode: a.activityCode,
          ActivityAction: 'DELETE',
        })),
        ...changeActivities.map((a: IVariables) => ({
          ActivityCode: a.activityCode,
          ActivityAction: 'add',
        })),
      ];
      props.actions.licenceDetails.update({
        ...props.licenceDetails,
        ...{
          // activities: combineExistNewActivities,
          activityPayload: ActivityCode,
        },
      });

      props.onSubmitAmendment(props);
    } else setDidChange(false);
  };

  return (
    <Container
      locale={props.locale}
      sidebar={
        <Sidebar
          currentStep={props.currentStep}
          currentSubStep={props.currentSubStep}
          i18n={props.i18n}
          steps={props.steps}
          stepsStatus={props.stepsStatus}
          showSidebar={props.showSidebar}
        />
      }
    >
      <Form
        {...props}
        backButton={{
          label: i18n('button.back'),
          withArrow: true,
          alignIcon: 'start',
          uiType: 'secondary',
          onClick: () => props.onBack(props),
        }}
        submitButton={{
          label: i18n('button.next'),
          withArrow: true,
          onClick: createActivityPayload,
        }}
      >
        <Form.Fieldset>
          <Informational>
            {(amendmentServerError || dedErrorMessage) && (
              <Alert
                message={amendmentServerError || dedErrorMessage}
                status="error"
              />
            )}
            {props.subTitle && (
              <h3 className="titleColor">{props.i18n(props.subTitle)}</h3>
            )}
            {props.description && (
              <p className="subtitleColor">{props.i18n(props.description)}</p>
            )}
            {licenceDetails.activities && (
              <ul>
                {licenceDetails.activities.map((a: IVariables) => (
                  <li className="subtitleColor" key={a.activityCode}>
                    {a.activityNameEng}
                  </li>
                ))}
              </ul>
            )}
          </Informational>
        </Form.Fieldset>

        <Form.Fieldset title={i18n('activities.choose')}>
          <p className="subtitleColor">{i18n('activities.choose.desc')}</p>
        </Form.Fieldset>

        <Form.Fieldset gapSize="small">
          <SearchInput
            aria-label="searchActivity"
            label={i18n('search.activities')}
            name="search.activities"
            onChange={debounce(onChange('search'), 1000)}
            value={searchTerm}
          />
          {licenseType !== LICENSE_TYPES.MOBDEA && (
            <Form.Fieldset twoColumns>
              <Select
                items={[
                  {
                    id: 'all',
                    label: i18n('global.all'),
                  },
                  ...getCategories(locale, licenseType),
                ]}
                label={i18n('category')}
                onChange={onChange('category')}
                showSearch
                value={activityCategory || 'all'}
              />
              {licenseType !== LICENSE_TYPES.INSTANT && (
                <Select
                  items={[
                    {
                      id: 'all',
                      label: i18n('global.all'),
                    },
                    ...subCategories,
                  ]}
                  label={i18n('sub.category')}
                  onChange={onChange('subCategory')}
                  value={activitySubCategory || 'all'}
                />
              )}
            </Form.Fieldset>
          )}
        </Form.Fieldset>

        <Form.Fieldset>
          {activityList.updating && <Spinner type="circle" />}
          {!activityList.updating && (
            <React.Fragment>
              <Form.Fieldset twoColumns gapSize="small">
                {paginatelist.map((pgAct: IVariables) => (
                  <RenderCheckbox actv={pgAct} type="list" />
                ))}
              </Form.Fieldset>

              <Form.Fieldset>
                <div className="pagination-wrapper">
                  <Pagination
                    current={page}
                    disabled={false}
                    i18n={i18n}
                    pageSize={pageSize}
                    size="default"
                    total={activityList.totalItems}
                    onChange={(currentPage: number) =>
                      handlePagination(currentPage)
                    }
                  />
                </div>
              </Form.Fieldset>
            </React.Fragment>
          )}
        </Form.Fieldset>

        <Form.Fieldset title={i18n('activities.review')}>
          <p className="subtitleColor">{i18n('activities.review.desc')}</p>
        </Form.Fieldset>

        <Form.Fieldset twoColumns gapSize="small">
          <Informational>
            <Label>{i18n('activities.review.final')}</Label>
            <div className="height-10" />
            {existingActivities &&
              changeActivities &&
              [...existingActivities, ...changeActivities].map(
                (changeActivity: IVariables) => (
                  <React.Fragment>
                    <RenderCheckbox actv={changeActivity} type="ammend" />
                    <div className="height-20" />
                  </React.Fragment>
                ),
              )}
          </Informational>
          <Informational>
            <Label>{i18n('activities.review.removed')}</Label>
            <div className="height-10" />
            {removeActivities.map((removeActivity: IVariables) => (
              <React.Fragment>
                <RenderCheckbox actv={removeActivity} type="remove" />
                <div className="height-20" />
              </React.Fragment>
            ))}
            {!removeActivities.length && (
              <p className="subtitleColor">
                <b>{i18n('activities.noActivities')}</b>
              </p>
            )}
          </Informational>
        </Form.Fieldset>

        {!didChange && (
          <Form.Fieldset>
            <Alert message={i18n('activities.noChange')} status="error" />
          </Form.Fieldset>
        )}
      </Form>
      <div className="height-80" />
    </Container>
  );
}

export default withTemplateHooks(Activities);
