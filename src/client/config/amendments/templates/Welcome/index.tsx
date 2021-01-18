import React from 'react';
import Button from '@tamm/ui-lib-v2-button';
import Container from 'client/containers';
import {
  withTemplateHooks,
  IVariables,
  IRouteVariables,
} from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';

interface HomeInterface extends IRouteVariables {
  i18n: (key: string) => string;
  title: string;
  buttons: {
    onClick: (props: IVariables) => void;
    label: string;
    uiType: '"primary" | "secondary" | "tertiary" | "ghost" | undefined';
    withArrow: boolean;
  }[];
}
/**
 * Home template
 * @param       {Object} props
 * @returns     {JSX}
 */
const Home = (props: HomeInterface) => {
  return (
    <Container>
      {props.buttons.map(btn => (
        <React.Fragment>
          <Button
            aria-label={props.i18n(btn.label)}
            label={props.i18n(btn.label)}
            onClick={() => btn.onClick(props)}
            // uiType={btn.uiType}
            withArrow={btn.withArrow}
          />
        </React.Fragment>
      ))}
      <div className="height-100" />
    </Container>
  );
};

Home.propTypes = {
  ...routePropTypes,
};

export default withTemplateHooks(Home);
