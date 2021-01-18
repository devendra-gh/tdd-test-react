import React from 'react';
import { IVariables } from '@tamm/app-composer';
import Table from '@tamm/ui-lib-v2-table';
import Button from '@tamm/ui-lib-v2-button';
import './DocumentListSection.less';

interface IButton {
  link?: string;
  onClick?: (props: IVariables) => void;
  variant: any;
  label: string;
  uiType: '"primary" | "secondary" | "tertiary" | "ghost" | undefined';
}

/**
 * DocumentListSection component
 * @param {Object} props
 * @returns {JSX}
 */
function DocumentListSection(props: IVariables) {
  const { i18n } = props;
  return (
    <div className="document-list">
      <h2>{i18n(props.title)}</h2>
      <p>{i18n(props.description)}</p>
      {props.list.map((item: any) => (
        <div style={{ marginTop: '4rem' }}>
          <Table
            i18n={i18n}
            columns={item.columns.map((col: IVariables) => ({
              id: col.id,
              title: i18n(col.title),
            }))}
            headerHidden={item.headerHidden}
            items={item.items.map((i: IVariables, index: number) => ({
              id: index,
              requirement: i18n(i.requirement),
              type: i18n(i.type),
            }))}
            title={i18n(item.title)}
            // uiType={item.uiType}
          />
        </div>
      ))}
      <div style={{ marginTop: '4rem' }}>
        <div className="document-list__button-wrap">
          {props.buttons.map((btn: IVariables) => (
            <Button
              aria-label={btn.label}
              label={props.i18n(btn.label)}
              onClick={() => btn.onClick(props)}
              uiType={btn.uiType}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DocumentListSection;
