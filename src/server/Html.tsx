import React, { Component } from 'react';
import serialize from 'serialize-javascript';

export interface HtmlProps {
  styles?: HtmlStyles[];
  scripts?: string[];
  scriptsHead?: string[];
  app: any;
  staticUrl: string;
  children?: string;
  mode?: string[];
  analyticsConfig: {
    key: string;
    host: string;
  };
}

export type HtmlStyles = {
  id: string;
  cssText: string;
};

/* global GIT_TAG */
const GIT = {
  TAG: GIT_TAG,
};

/**
 * Class responsible for page server side rendering (SSR)
 */
class Html extends Component<HtmlProps> {
  static defaultProps = {
    styles: [],
    scripts: [],
    scriptsHead: [],
    children: null,
    mode: [],
  };

  render() {
    const {
      app,
      staticUrl,
      children,
      styles,
      mode,
      analyticsConfig: { key, host },
    } = this.props;
    let { scripts, scriptsHead } = this.props;
    const stylesFromScripts = scripts!.filter(i => i.endsWith('.css'));
    scripts = scripts!.filter(i => !i.endsWith('.css'));
    scriptsHead = scriptsHead!.filter(i => !i.endsWith('.css'));
    const modeClassed = mode!.map(el => `mode__${el}`);

    return (
      <html className={[...modeClassed, 'no-js'].join(' ')} lang="en">
        <head>
          <meta name="release" content={GIT.TAG} />
          {scriptsHead.map(script => (
            <script key={script} src={`${script}?r=${GIT.TAG}`} />
          ))}
          {stylesFromScripts.map(link => (
            <link
              key={link}
              rel="stylesheet"
              type="text/css"
              href={`${link}?r=${GIT.TAG}`}
            />
          ))}
          <link
            rel="stylesheet"
            href={`${staticUrl}/ui-lib/colors-dynamic.css`}
          />
          {/* eslint-disable react/no-danger */}
          {styles &&
            styles.map(style => (
              <style
                key={style.id}
                id={style.id}
                dangerouslySetInnerHTML={{ __html: style.cssText }}
              />
            ))}
          {/* eslint-enable react/no-danger */}
        </head>
        <body>
          {/* eslint-disable react/no-danger */}
          {process.env.NODE_ENV === 'production' && (
            <script
              id="removeDevTool"
              type="text/javascript"
              src="scripts/removeDevTool.js"
            />
          )}
          <div id="app" dangerouslySetInnerHTML={{ __html: children || '' }} />
          <script
            id="staticData"
            type="json"
            dangerouslySetInnerHTML={{
              __html: serialize(app, { isJSON: true }),
            }}
          />
          {/* eslint-enable react/no-danger */}
          {scripts.map(script => (
            <script key={script} src={`${script}?r=${GIT.TAG}`} />
          ))}
          <script
            id="analyticsScript"
            src={`${staticUrl}/analytics/index.js?key=${key}&host=${host}`}
          />
        </body>
      </html>
    );
  }
}

export default Html;
