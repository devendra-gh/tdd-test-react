#!/usr/bin/env node

Promise.all([
  /* put other services here */
])
  .then(() => process.exit(1))
  .catch(err => {
    console.error(
      '\\033[1;91m  Some dependency service not ready, need to wait \\033[0m \\n',
      err,
    );
    process.exit(0);
  });
