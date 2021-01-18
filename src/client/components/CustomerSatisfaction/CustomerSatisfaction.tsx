import React, { useCallback, useState } from 'react';

import CustomerSatisfactionComponent from '@tamm/ui-lib-v2-customer-satisfaction';

import fetch from 'client/services/fetch';

interface FeedbackProps {
  i18n: any;
  serviceId: string;
  productId?: string;
}

export function CustomerSatisfaction(props: FeedbackProps) {
  const [status, setStatus] = useState<
    'idle' | 'active' | 'pending' | 'success' | 'error'
  >('idle');
  const handleSubmit = useCallback(
    async (smileyType: string, options: Record<string, string>) => {
      setStatus('pending');
      try {
        await fetch('/pub/adfeedback/feedbacks', 'POST', {
          surveyType: 'service',
          smileyType,
          comments: options.comment,
          ratings: {
            clearness: options['customer_satisfaction.clear'],
            ease: options['customer_satisfaction.easy'],
            speed: options['customer_satisfaction.fast'],
            performance: options['customer_satisfaction.perf'],
          },
          pageUrl: window.location.href,
          serviceId: props.serviceId,
          productId: props.productId,
        });
        setStatus('success');
      } catch (e) {
        setStatus('error');
      }
    },
    [],
  );

  return (
    <CustomerSatisfactionComponent
      i18n={props.i18n}
      status={status}
      onSubmit={handleSubmit}
    />
  );
}
