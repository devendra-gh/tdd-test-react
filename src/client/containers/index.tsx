import React, { ReactNode } from 'react';
import Grid from '@tamm/ui-lib-v2-grid';
import { Viewport } from '@tamm/ui-lib-v2-viewport';
import classNamesHandler from 'classnames';

import './container.less';

const { Col, Row } = Grid;

function Container(props: {
  children: ReactNode;
  sidebar?: ReactNode;
  locale?: string;
  classNames?: string;
}) {
  const className = classNamesHandler('container', props.classNames);
  if (props.sidebar && props.locale === 'en') {
    return (
      <div className={className}>
        <Viewport xl lg md sm>
          <Row gutter={20}>
            <Col xl={9} lg={8} md={12} sm={12} xs={12}>
              {props.children}
            </Col>
            <Col xl={3} lg={4} md={12} sm={12} xs={12}>
              {props.sidebar}
            </Col>
          </Row>
        </Viewport>
      </div>
    );
  }

  if (props.sidebar && props.locale === 'ar') {
    return (
      <div className={className}>
        <Viewport xl lg>
          <Row gutter={20}>
            <Col xl={3} lg={4}>
              {props.sidebar}
            </Col>
            <Col xl={9} lg={8}>
              {props.children}
            </Col>
          </Row>
        </Viewport>
        <Viewport md sm>
          <Row gutter={20}>
            <Col md={12} sm={12} xs={12}>
              {props.children}
            </Col>
            <Col md={12} sm={12} xs={12}>
              {props.sidebar}
            </Col>
          </Row>
        </Viewport>
      </div>
    );
  }

  return <div className={className}>{props.children}</div>;
}

export default Container;
