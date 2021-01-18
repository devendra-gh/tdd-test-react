import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@tamm/ui-lib-v2-button';
import Container from 'client/containers';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import Spinner from '@tamm/ui-lib-v2-spinner';

/**
 * Home template
 * @param       {Object} props
 * @returns     {JSX}
 */
/* eslint-disable complexity */
function FakeSubmit(props: IVariables) {
  const [item, setItem] = useState({ name: '', selected: false });
  const onClick = (e: IVariables) => {
    const data = { name: e.target.name, selected: true };
    setItem(data);
    props.onSubmit(e.target.name, props);
  };

  const { i18n } = props;
  return (
    <>
      <Container locale={props.locale}>
        {!props.loggedIn ? (
          <div>
            <p>{i18n('pleaseLogIn')}</p>
            <Link to="/login">
              <Button
                alignIcon="end"
                aria-label="button-primary1"
                disabled={false}
                icon={() => null}
                label={i18n('logIn')}
                size="default"
                type="button"
                uiType="primary"
                withArrow
              />
            </Link>
          </div>
        ) : (
          <>
            <div style={{ display: 'flex' }}>
              <Button
                alignIcon="end"
                aria-label="button-primary2"
                disabled={item.selected && item.name !== 'instant'}
                icon={() => null}
                size="default"
                type="button"
                uiType="primary"
                withArrow
                name="instant"
                onClick={e => onClick(e)}
                label={i18n('submit instant license')}
                active={item.selected && item.name === 'instant'}
              />
              <div style={{ marginTop: '1rem', marginLeft: '1rem' }}>
                {item.selected && item.name === 'instant' && (
                  <Spinner type="logo" />
                )}
              </div>
            </div>
            <br />
            <div style={{ display: 'flex' }}>
              <Button
                alignIcon="end"
                aria-label="button-primary3"
                disabled={item.selected && item.name !== 'tajer'}
                icon={() => null}
                size="default"
                type="button"
                uiType="primary"
                withArrow
                name="tajer"
                onClick={e => onClick(e)}
                label={i18n('submit tajer license')}
                active={item.selected && item.name === 'tajer'}
              />
              <div style={{ marginTop: '1rem', marginLeft: '1rem' }}>
                {item.selected && item.name === 'tajer' && (
                  <Spinner type="logo" />
                )}
              </div>
            </div>
            <br />
            <div style={{ display: 'flex' }}>
              <Button
                alignIcon="end"
                aria-label="button-primary4"
                disabled={item.selected && item.name !== 'allInOne'}
                icon={() => null}
                size="default"
                type="button"
                uiType="primary"
                withArrow
                name="allInOne"
                onClick={e => onClick(e)}
                label={i18n('submit all in one license')}
                active={item.selected && item.name === 'allInOne'}
              />
              <div style={{ marginTop: '1rem', marginLeft: '1rem' }}>
                {item.selected && item.name === 'allInOne' && (
                  <Spinner type="logo" />
                )}
              </div>
            </div>
            <br />
            <div style={{ display: 'flex' }}>
              <Button
                alignIcon="end"
                aria-label="button-primary5"
                disabled={item.selected && item.name !== 'mubdia'}
                icon={() => null}
                size="default"
                type="button"
                uiType="primary"
                withArrow
                name="mubdia"
                onClick={e => onClick(e)}
                label={i18n('submit mubdia license')}
                active={item.selected && item.name === 'mubdia'}
              />
              <div style={{ marginTop: '1rem', marginLeft: '1rem' }}>
                {item.selected && item.name === 'mubdia' && (
                  <Spinner type="logo" />
                )}
              </div>
            </div>
            <br />
            <div style={{ display: 'flex' }}>
              <Button
                alignIcon="end"
                aria-label="button-primary6"
                disabled={item.selected && item.name !== 'tamm'}
                icon={() => null}
                size="default"
                type="button"
                uiType="primary"
                withArrow
                name="tamm"
                onClick={e => onClick(e)}
                label={i18n('submit tamm license')}
                active={item.selected && item.name === 'tamm'}
              />
              <div style={{ marginTop: '1rem', marginLeft: '1rem' }}>
                {item.selected && item.name === 'tamm' && (
                  <Spinner type="logo" />
                )}
              </div>
            </div>
            <br />
            <div style={{ display: 'flex' }}>
              <Button
                alignIcon="end"
                aria-label="button-primary7"
                disabled={item.selected && item.name !== 'tech'}
                icon={() => null}
                size="default"
                type="button"
                uiType="primary"
                withArrow
                name="tech"
                onClick={e => onClick(e)}
                label={i18n('submit tech license')}
                active={item.selected && item.name === 'tech'}
              />
              <div style={{ marginTop: '1rem', marginLeft: '1rem' }}>
                {item.selected && item.name === 'tech' && (
                  <Spinner type="logo" />
                )}
              </div>
            </div>
          </>
        )}
        <div style={{ height: 200 }} />
      </Container>
    </>
  );
}

FakeSubmit.propTypes = {
  ...routePropTypes,
};

export default withTemplateHooks(FakeSubmit);
