// https://content-security-policy.com/

const TRUSTED_SOURCES = [
  // same domain
  "'self'",
  // and others
  'gstatic.com',
  'journeys-stg.tamm.abudhabi',
  'stage.tamm.abudhabi',
  'js.arcgis.com',
  'portaldev.elab.abudhabi.ae',
  'server.arcgisonline.com',
  'services.arcgisonline.com',
  'stackpath.bootstrapcdn.com',
  'static.arcgis.com',
  'arcgis.sdi.abudhabi.ae',
  'translate.google.com',
  'translate.googleapis.com',
  'www.google.com',
  'www.gstatic.com',
  'www.tamm.abudhabi',
  'stage-api.abudhabi.ae',
  'api.abudhabi.ae',
];

export default {
  contentSecurityPolicy: {
    directives: {
      styleSrc: [
        ...TRUSTED_SOURCES,
        "'unsafe-inline'",
        "'unsafe-eval'",
        'blob:',
        'filesystem:',
      ],
      scriptSrc: [
        ...TRUSTED_SOURCES,

        // disable unsafe-eval for production
        "'unsafe-eval'",
        // ...(env.NODE_ENV === 'development' ? ["'unsafe-eval'"] : []),

        'blob:',

        // next line should be commented due to security audit requirements
        // "'unsafe-inline'",

        // below we have exclusions for dev scripts (like react-error-overlay)
        // you'll see warning in console with hashes
        "'sha256-KpHv3zgivMSB4dPnfYfqMt2lBibsYvM36EdoBBAsfbM='",
        "'sha256-CyaL1Is5BrtV1nqGyf5M82XfYCZN/AlWOA1PAYCeQn0='",
        "'sha256-ThhI8UaSFEbbl6cISiZpnJ4Z44uNSq2tPKgyRTD3LyU='",
        "'sha256-NNiElek2Ktxo4OLn2zGTHHeUR6b91/P618EXWJXzl3s='",
        // in case you have problems with maps component due to CORS restrictions
        // uncomment next line
        // "'unsafe-eval'",
      ],
      imgSrc: [...TRUSTED_SOURCES, 'blob:', 'data:'],
      objectSrc: ["'none'"],
      mediaSrc: [...TRUSTED_SOURCES],
      workerSrc: [...TRUSTED_SOURCES, 'blob:'],
      connectSrc: [...TRUSTED_SOURCES, 'blob:', 'ws:', 'wss:'],
      frameAncestors: [
        "'self'",
        'wb.tamm.abudhabi',
        'journeys-stg.tamm.abudhabi',
      ],
    },
  },
  hsts: true,
  ieNoOpen: true,
  noCache: true,
  noSniff: true,
  permittedCrossDomainPolicies: true,
  referrerPolicy: { policy: 'strict-origin' },
  xssFilter: true,
};
