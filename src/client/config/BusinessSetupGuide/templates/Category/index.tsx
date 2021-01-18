/* eslint-disable no-plusplus */
import { IVariables, withTemplateHooks } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import './category.less';
import Accordion from '@tamm/ui-lib-v2-accordion';
import Table from '@tamm/ui-lib-v2-table';
import Container from 'client/containers';
import React from 'react';
import Button from '@tamm/ui-lib-v2-button';
import Link from '@tamm/ui-lib-v2-link';
import { IEntity, IStep, IDetail } from '../../data';

function formatUrl(url: string): string {
  const parts = url.toLowerCase().split('/');
  if (parts[0] === 'http:' || parts[0] === 'https:') {
    return parts[2];
  }
  return parts[0];
}

function EntityInfo(props: IVariables) {
  const { i18n, entity } = props;
  return (
    <>
      <div className="stepHeader">
        <div className="entity">
          <img src={entity.image} alt={entity.title} />
          {entity.subTitle && (
            <div>
              {i18n('bsg.entity.subTitle')}
              {entity.subTitle}
            </div>
          )}
          {/* <h6>{entity.title}</h6> */}
        </div>
        <div className="contacts">
          {entity.location && (
            <div className="contact">
              <span>{i18n('bsg.entity.location')}</span>
              <p>{entity.location}</p>
            </div>
          )}
          {entity.phone && (
            <div className="contact">
              <span>{i18n('bsg.entity.phone')}</span>
              <br />
              <p className="phone">
                <div>{entity.phone}</div>
              </p>
            </div>
          )}
          {entity.officeHours && (
            <div className="contact">
              <span>{i18n('bsg.entity.officeHours')}</span>
              <br />
              <p>{entity.officeHours}</p>
            </div>
          )}
          {entity.websiteUrl && (
            <div className="contact">
              <span>{i18n('bsg.entity.website')}</span>
              <br />
              <p>
                <Link href={entity.websiteUrl}>
                  {formatUrl(entity.websiteUrl)}
                </Link>
              </p>
            </div>
          )}
        </div>
        {entity.phone && (
          <div className="actionWrapper">
            <p>{i18n('bsg.entity.actionText')}</p>
            <Button
              aria-label="button-primary"
              disabled={false}
              label={i18n('bsg.entity.action.title')}
              type="button"
              uiType="primary"
              link={`tel:${entity.phone}`}
            />
          </div>
        )}
      </div>
    </>
  );
}

function Details(props: IVariables) {
  const { i18n, details } = props;

  return (
    <div className="stepInfoWrapper">
      <Table
        i18n={i18n}
        clickable={false}
        columns={[
          {
            id: 'title',
            title: i18n('bsg.tableHeader.section'),
          },
          {
            id: 'text',
            title: i18n('bsg.tableHeader.details'),
          },
        ]}
        headerHidden={false}
        items={details
          .filter((detail: IDetail) => detail.text !== '')
          .map((detail: IDetail) => {
            return { title: detail.title, text: detail.text };
          })}
        selectable={false}
      />
      <div className="disclaimer">{i18n('bsg.disclaimer')}</div>
    </div>
  );
}

/**
 * Category template
 * @param       {Object} props
 * @returns     {JSX}
 */
function Category(props: IVariables) {
  const { i18n, categoryEn, categoryAr } = props;

  const category = props.locale === 'en' ? categoryEn : categoryAr;

  props.actions.title.update(
    `${i18n('bsg.category.title')} - ${category.title}`,
  );
  props.actions.breadcrumbs.update(props.breadcrumbs);

  let accordionId = 1;
  return (
    <>
      <Container locale={props.locale}>
        <div className="accordionWrapper">
          <Accordion
            items={category.info.map((step: IStep) => {
              return {
                id: accordionId++,
                title: step.stepTitle,
                boldTitle: false,
                expanded: false,
                content: (
                  <>
                    {step.entities.map((entity: IEntity) => (
                      <EntityInfo entity={entity} i18n={i18n} />
                    ))}
                    <Details details={step.details} i18n={i18n} />
                  </>
                ),
              };
            })}
          />
        </div>
        <div style={{ height: 200 }} />
      </Container>
    </>
  );
}

Category.propTypes = {
  ...routePropTypes,
};

export default withTemplateHooks(Category);
