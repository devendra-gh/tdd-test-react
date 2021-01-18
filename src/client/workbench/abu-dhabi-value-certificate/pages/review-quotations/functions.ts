import { getSteps } from '../../sharedFunctions/stepUtils';

import {
  getAwards,
  getEntities,
  uploadDocumentToDed,
} from '../../sharedFunctions/getData';

export async function init(props: any) {
  // props.actions.entityQuotations.update(dummyAwards);
  // props.actions.selectedEntities.update(selectedEntities);
  // props.actions.hasEntityFeedback.update(hasEntityFeedback);
  // props.actions.isAllQuotationsFetched.update(true);
  // props.actions.feedbackStatements.update([]);
  // props.actions.referenceTags.update([]);
  // props.fetch();
  // const { fetch, bpm } = props;
  // props.fileUploads;
  // props.documentsUploaded
  const steps = getSteps(props.i18n, 1, 1);
  const { selectedQuotationsArr } = props;
  const selectionLength = selectedQuotationsArr.length;
  const isNoEntitySelected = !selectionLength;

  props.actions.steps.update(steps);
  props.actions.currentStepIndex.update(1);
  props.actions.currentSubStepIndex.update(1);
  props.actions.isEntityNotSelected.update(isNoEntitySelected);

  props.actions.loading.update(false);
}
export async function onPageInit(props: any) {
  interface IVariables {
    [name: string]: any;
  }
  // props.fileUploads;
  // props.fetch();
  // const { fetch, bpm } = props;
  const { i18n } = props;
  const { submittedOn } = props;
  const transactionNumber = props.apTransactionNumber;
  const { capId } = props;
  const referenceTags = [
    {
      label: i18n('Global_ReferenceNo'),
      value: transactionNumber,
    },
    {
      label: i18n('Global_SubmittedOn'),
      value: submittedOn,
    },
  ];

  let applicationStatus = '';
  let awards: any[] = [];
  let selectedEntities = {};

  const { instanceId } = props;
  let response: any;

  const getVariables = async () => {
    awards = await getAwards(props, transactionNumber);
    response = await props.bpm.getVariables(instanceId, {
      variables: ['applicationStatus', 'entityPayload', 'capId'],
      processName: 'workbench',
    });
    if (response.success && response.data) {
      applicationStatus = response.data.applicationStatus?.value;
      selectedEntities = JSON.parse(
        response.data.entityPayload?.value || JSON.stringify({}),
      );
    }

    const entityObject: IVariables = getEntities();
    const entityMapping: IVariables = Object.keys(entityObject).reduce(
      (mapping, entityKey) => ({
        ...mapping,
        [entityKey]: entityObject[entityKey].name,
      }),
      {},
    );

    const processedAwards = awards.map((award: any) => ({
      ...award,
      _id: award.certifiedBodyName,
      Actions: {
        onChange: () => {},
        options: [{ id: 'download', label: 'download' }],
      },
      entity: entityMapping[award.certifiedBodyName.toLowerCase()],
    }));

    const awardedEntities = processedAwards.map((award: any) =>
      award.certifiedBodyName.toLowerCase(),
    );
    const unAwardedEntities = Object.keys(selectedEntities)
      .filter((entity: any) => awardedEntities.indexOf(entity) == -1)
      .map((entityName: string) => ({
        _id: entityName,
        entity: entityMapping[entityName],
        disabled: true,
        actions: {
          onChange: () => {},
          options: [{ id: 'download', label: 'Download' }],
        },
        quotationAmount: i18n('ReceiveQuotations_PendingQuote'),
      }));

    if (unAwardedEntities) {
      // stop fetching awards
      setTimeout(getVariables, 10000);
    }

    const entities = [...processedAwards, ...unAwardedEntities];

    props.actions.entityQuotations.update(entities);
    props.actions.isAllQuotationsFetched.update(!unAwardedEntities);

    const hasEntityFeedback =
      applicationStatus === 'Additional Requirements Needed';
    if (hasEntityFeedback) {
      props.actions.hasEntityFeedback.update(true);
      props.actions.isEntityNotSelected.update(true);
    }
  };

  await getVariables();

  props.actions.referenceTags.update(referenceTags);

  const uploadFiles = async () => {
    const documentsToUpload: Promise<any>[] = [];
    props.fileUploads.forEach((eachDocumentDetails: any) => {
      if (eachDocumentDetails) {
        const service = uploadDocumentToDed(
          transactionNumber,
          capId,
          eachDocumentDetails.fileId,
          props,
        );
        documentsToUpload.push(service);
      }
    });
    await Promise.all(
      documentsToUpload.map(
        (eachDocumentUploadPromise: Promise<any>) => eachDocumentUploadPromise,
      ),
    )
      .then((dedResponse: any) => {
        props.actions.documentsUploaded.update(true);
      })
      .catch((error: any) => {});
  };

  if (props.documentsUploaded) {
    await uploadFiles();
  }
}
export function f1_visible(props: any) {
  return props.hasEntityFeedback;
}
export function f2_visible(props: any) {
  return !props.isAllQuotationsFetched;
}
export function call_f3_onSelectionChange(props: any) {
  return (value: any) => {
    console.log('what is returned by on toggle', value);
    props.actions.awardedEntity.update(value[0]);
    props.actions.isEntityNotSelected.update(false);
    props.actions.selectedQuotationsArr.update(value);
  };
}
export async function f4_onActionClick(props: any) {
  props.history.push('/login');
}
export function call_f5_onClick(props: any) {
  return async () => {
    props.actions.loading.update(true);
    const certifiedBody = props.awardedEntity;
    const serviceNameEn = 'Request for Industrial Electricity Tariff';
    const serviceNameAr =
      'طلب الاستفادة من برنامج تحفيز القطاع الصناعي عبر تعرفة الكهرباء ';
    const applicationSuccessEn = `Your request for Industrial Electricity Tariff ${props.apTransactionNumber} has been completed.
Please find the relevant document attached in this email.
`;
    const applicationSuccessAr = `<span dir='rtl'>اكتمل طلبك رقم</span>
<span dir='rtl'><strong>${props.apTransactionNumber}</strong></span>
<span dir='rtl'> لطلب الاستفادة من برنامج تحفيز القطاع الصناعي عبر تعرفة الكهرباء. المستندات اللازمة مرفقة طيّ هذا البريد الإلكتروني.</span>`;

    const emailTokens = [
      {
        subject: `${serviceNameEn} - ${serviceNameAr}`,
        enText: applicationSuccessEn,
        arText: applicationSuccessAr,
        docType: 'certificate',
        emailType: 'application-success',
      },
    ];
    const variables = {
      certifiedBody,
      processResult: 'AWARD',
      emailTokens: JSON.stringify(emailTokens),
    };

    await props.bpm.sendMessage({
      businessKey: props.businessKey,
      messageName: 'onAward',
      variables,
    });
    props.actions.isEntityNotSelected.update(true);
    props.actions.loading.update(true);
  };
}
