import React from 'react';
import { IVariables } from '@tamm/app-composer';
import './investmentCompass.less';

const InvestmentCompass = (props: IVariables) => {
  const { i18n, categories } = props;
  const host =
    window && window.location
      ? window.location.origin
      : 'https://stage.tamm.abudhabi';
  const appendPath = 'services/business/investment-compass';
  return (
    <>
      <h3>{i18n('investmentCompass.title')}</h3>
      <p className="introText">{i18n('investmentCompass.text')}</p>
      <div className="categoryLinks">
        {categories.map((category: IVariables) => (
          <a
            href={`${host}/${appendPath}/${category.link}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="categoryLink">
              <div className="iconWrapper">
                <img
                  className="categoryIcon"
                  src={category.icon}
                  alt={category.title}
                />
              </div>
              <br />
              <p className="categoryTitle">{category.title}</p>
            </div>
          </a>
        ))}
      </div>
      <div className="disclaimer">{i18n('investmentCompass.disclaimer')}</div>
    </>
  );
};

export default InvestmentCompass;
