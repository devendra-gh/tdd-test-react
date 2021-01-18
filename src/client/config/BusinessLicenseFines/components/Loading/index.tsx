import React from 'react';
import Spinner from '@tamm/ui-lib-v2-spinner';
import './index.less';

const Loading = () => (
  <div className="spinner-wrapper">
    <Spinner type="logo" />
  </div>
);

export default Loading;
