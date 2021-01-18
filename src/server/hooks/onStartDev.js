// Module represents onStartDev lifecycle hooks of Journey,
// which will be run before starting Journey server in development mod.

module.exports = _ =>
  Promise.resolve().then(() => {
    // eslint-disable-next-line
    return console.log('Log ::: "On Start Dev" Hook');
  });
