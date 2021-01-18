// Module represents onStartProd lifecycle hooks of Journey,
// which will be run before starting Journey server in production mod.

module.exports = (...hooks) =>
  Promise.all(hooks.map(hook => hook())).then(() =>
    console.info('Log ::: "On Start Prod" Hook'),
  );
