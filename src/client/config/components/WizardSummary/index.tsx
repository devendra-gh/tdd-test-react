import React from 'react';
import { IVariables } from '@tamm/app-composer';
import Table from '@tamm/ui-lib-v2-table';
import './WizardSummary.less';

const WizardSummary = (props: IVariables) => {
  const { i18n, items, text, title } = props;

  const getList = (description: string[]) => {
    const heading = description[0];
    description.shift();
    return (
      <div>
        {i18n(heading)}
        <ul>
          {description.map((des: string) => (
            <li key={des}>{i18n(des)}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="wizard-summary">
      <h3 className="wizard-summary__title">{i18n(title)}</h3>
      {items.map((item: any) => (
        <div style={{ marginTop: '4rem' }}>
          <Table
            i18n={i18n}
            columns={item.columns.map((col: IVariables) => ({
              horizontal: ['sm', 'md'],
              id: col.id,
              title: i18n(col.title),
            }))}
            headerHidden={i18n(item.headerHidden)}
            items={item.items.map((i: IVariables, index: number) => ({
              id: index.toString(),
              licenceSection: i18n(i.licenceSection),
              choice: i18n(i.choice),
              // description: i18n(i.description)
              description:
                i.description.length === 1
                  ? i18n(i.description[0])
                  : getList(i.description),
            }))}
            title={i18n(item.title)}
            // uiType={item.uiType}
          />
        </div>
      ))}
      <p className="wizard-summary__text">{i18n('wizard.guidance')}</p>
      <p className="wizard-summary__text">{i18n(text)}</p>
    </div>
  );
};

export default WizardSummary;
