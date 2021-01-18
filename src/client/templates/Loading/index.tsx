// eslint-disable-next-line
import React from 'react';
import Spinner from '@tamm/ui-lib-v2-spinner';

export default () => {
  return (
    <div
      className="loadingOverlay" // Don't delete this class
      style={{
        position: 'fixed',
        zIndex: 5,
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'rgba(255, 255, 255, 0.7)',
      }}
    >
      <Spinner type="logo" />
    </div>
  );
};
