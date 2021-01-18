import { IVariables } from '@tamm/app-composer';

export function goToPage(history: any, page: string) {
  return () => history.push(page);
}

export function emptyFunc() {
  return () => {};
}

const services = [
  {
    ids: [656, 671],
    getProps: (
      props: IVariables,
      user: IVariables | boolean,
      heroProps: IVariables,
    ) => {
      const hero = {
        en: {
          aspectOfLifeType: '',
          backgroundImage:
            'https://journeys-stg.tamm.abudhabi/journeys/journey-template/images/hero.jpg',
          backgroundBase64Extension: '',
          breadcrumbs: [],
          ...heroProps,
        },
        ar: {
          aspectOfLifeType: '',
          backgroundImage:
            'https://journeys-stg.tamm.abudhabi/journeys/journey-template/images/hero.jpg',
          backgroundBase64Extension: '',
          breadcrumbs: [],
          ...heroProps,
        },
      };

      if (!user) {
        // not logged in return one thing
        return {
          hero,
          startLogin: {
            en: {
              title: 'Please login',
              description: 'Please login',
              onClick: goToPage(
                props.history,
                `/login?redirectUrl=${window.location.href}`,
              ),
              buttonLabel: 'login',
              stickToTop: true,
            },
            ar: {
              title: 'Please login AR',
              description: 'Please login AR',
              onClick: goToPage(
                props.history,
                `/login?redirectUrl=${window.location.href}`,
              ),
              buttonLabel: 'login AR',
              stickToTop: true,
            },
          },
        };
      }

      // const data = fetch('/pub/proxy/hasAnyLicence');
      // simulating that there is result from API
      const data = {
        list: Math.random() > 0.5 ? [] : ['hasSomething'],
      };

      if (data.list && data.list.length > 0) {
        return {
          hero,
          startLogin: {
            en: {
              title: 'Continue',
              description: 'Continue to existing service',
              buttonLabel: 'continue',
              onClick: goToPage(props.history, '/licence'),
              stickToTop: true,
            },
            ar: {
              title: 'Continue AR',
              description: 'Continue to existing service AR',
              buttonLabel: 'continue AR',
              onClick: goToPage(props.history, '/licence'),
              stickToTop: true,
            },
          },
        };
      }

      return {
        hero,
        startLogin: {
          en: {
            title: 'Start',
            description: 'Start a new service',
            buttonLabel: 'Start',
            onClick: emptyFunc,
            stickToTop: true,
          },
          ar: {
            title: 'Start AR',
            description: 'Start a new service AR',
            buttonLabel: 'Start AR',
            onClick: emptyFunc,
            stickToTop: true,
          },
        },
      };
    },
  },
];

export default services;
