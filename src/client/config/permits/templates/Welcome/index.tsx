import React from 'react';
import Button from '@tamm/ui-lib-v2-button';
import Table from '@tamm/ui-lib-v2-table';
import { Link } from 'react-router-dom';
import Container from 'client/containers';
import {
  withTemplateHooks,
  IVariables,
  IRouteVariables,
} from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import { PATH_CONTINUE_PROCESS } from '../../utils/constants/pageRoutes';

/* istanbul ignore file */

interface HomeInterface extends IRouteVariables {
  i18n: (key: string) => string;
  title: string;
  buttons: {
    onClick: (props: IVariables) => void;
    label: string;
    uiType: '"primary" | "secondary" | "tertiary" | "ghost" | undefined';
    withArrow: boolean;
  }[];
  startServiceApplication: string;
  economicName: string;
  titleAction: string;
  continue: string;
  getPermits: {
    id: string;
    taskId: string;
    businessKey: string;
    processInstanceId: string;
    apTransactionNumber: string;
  }[];
}
/**
 * Home template
 * @param       {Object} props
 * @returns     {JSX}
 */
const Home = (props: HomeInterface) => {
  const finalItem: any[] =
    props.getPermits && props.getPermits.length
      ? props.getPermits.map(item => {
          return {
            id: item.id,
            name: item.apTransactionNumber,
            actionLabel: (
              <div>
                <Link
                  to={`${PATH_CONTINUE_PROCESS}?instanceId=${item.processInstanceId}&businessKey=${item.businessKey}`}
                >
                  <Button
                    active={false}
                    alignIcon="end"
                    aria-label="button-ghost"
                    disabled={false}
                    icon={() => {}}
                    label={props.i18n(props.continue)}
                    name={undefined}
                    size="default"
                    type="button"
                    uiType="ghost"
                    withArrow
                  />
                </Link>
              </div>
            ),
          };
        })
      : [];

  return (
    <Container>
      <div style={{ marginBottom: '8rem' }}>
        {props.buttons.map(btn => (
          <React.Fragment>
            <Button
              aria-label={btn.label}
              label={props.i18n(btn.label)}
              onClick={() => btn.onClick(props)}
              // uiType={btn.uiType}
              withArrow={btn.withArrow}
            />
            <br />
            <br />
          </React.Fragment>
        ))}
        {props.getPermits && props.getPermits.length ? (
          <Table
            i18n={props.i18n}
            clickable
            columns={[
              {
                id: 'name',
                title: props.i18n(props.economicName),
              },
              {
                id: 'actionLabel',
                title: props.i18n(props.titleAction),
              },
            ]}
            disabledSelectionVisible={false}
            headerHidden={false}
            items={finalItem}
            onClick={() => {}}
            onSelectionChange={() => {}}
            onToggle={() => {}}
            selectable={false}
            size="small"
            title={props.i18n(props.startServiceApplication)}
          />
        ) : null}
      </div>
    </Container>
  );
};

Home.propTypes = {
  ...routePropTypes,
};

export default withTemplateHooks(Home);
