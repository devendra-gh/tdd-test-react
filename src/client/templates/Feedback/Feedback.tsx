import React, { useCallback, useState } from 'react';

import GlobalCsatFeedback from '@tamm/ui-lib-v2-global-csat-feedback';

import fetch from 'client/services/fetch';

interface FeedbackOptions {
  ease: number;
  quality: number;
  performance: number;
  comment: string;
}

interface FeedbackProps {
  i18n: any;
}

export function Feedback(props: FeedbackProps) {
  const [status, setStatus] = useState<
    'idle' | 'active' | 'pending' | 'success' | 'error'
  >('idle');
  const handleSubmit = useCallback(
    async (smileyType: string, options: FeedbackOptions) => {
      setStatus('pending');
      try {
        await fetch('/pub/adfeedback/feedbacks', 'POST', {
          surveyType: 'general',
          smileyType,
          comments: options.comment,
          ratings: {
            ease: options.ease,
            quality: options.quality,
            performance: options.performance,
          },
          pageUrl: window.location.href,
        });
        setStatus('success');
      } catch (e) {
        setStatus('error');
      }
    },
    [],
  );

  return (
    <GlobalCsatFeedback
      onSubmit={handleSubmit}
      i18n={props.i18n}
      status={status}
      autoOpen={false}
    />
  );
}
