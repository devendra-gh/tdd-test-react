import { IVariables, withTemplateHooks } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import Container from 'client/containers';
import React from 'react';
import { Link } from 'react-router-dom';
import { ICategory } from '../../data';
import './home.less';

/**
 * Home template
 * @param       {Object} props
 * @returns     {JSX}
 */
function Home(props: IVariables) {
  const { i18n, categoriesAr, categoriesEn } = props;
  const categories = props.locale === 'en' ? categoriesEn : categoriesAr;

  props.actions.breadcrumbs.update(props.breadcrumbs);

  return (
    <>
      <Container locale={props.locale}>
        <>
          <h3>{i18n('bsg.home.intro.title')}</h3>
          <p className="introText">{i18n('bsg.home.intro.text')}</p>
          <div className="categoryLinks">
            {categories.map((category: ICategory) => (
              <Link to={`/investment-compass/${category.link}`}>
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
              </Link>
            ))}
          </div>
        </>
        <div style={{ height: 200 }} />
        <div className="disclaimerHome">{i18n('bsg.disclaimer')}</div>
      </Container>
    </>
  );
}

Home.propTypes = {
  ...routePropTypes,
};

export default withTemplateHooks(Home);
