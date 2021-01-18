if (process.env.BROWSER) {
  throw new Error(
    'Do not import `config.js` from inside the client-side code.',
  );
}

if (process.env.S3_SSL_ENABLED === undefined) {
  process.env.S3_SSL_ENABLED = 'false';
}

if (process.env.S3_FORCE_PATH_STYLE === undefined) {
  process.env.S3_FORCE_PATH_STYLE = 'true';
}

module.exports = {
  endpoint: {
    // localhost
    host: process.env.S3_ENDPOINT_HOST || `http://localhost`,
    port: process.env.S3_ENDPOINT_PORT || '8000',
  },
  accessKeyId: process.env.S3_ACCESSKEY_ID || 'newAccessKey',
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || 'newSecretKey',
  sslEnabled: !(process.env.S3_SSL_ENABLED === 'false'),
  s3ForcePathStyle: !(process.env.S3_FORCE_PATH_STYLE === 'false'),
};
