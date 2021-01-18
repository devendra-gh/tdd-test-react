import config from 'config';
import express from 'express';
import smartpassParts from 'server/smartpass';

const router = express.Router();

router.get('/login', smartpassParts.api.login);
router.get('/logout', smartpassParts.api.logout);
if (config.demoLogin) {
  router.get('/demo-login', smartpassParts.api.demoLogin);
  router.get('/demo-logout', smartpassParts.api.demoLogout);
  router.get('/userInfo', smartpassParts.api.userInfo);
}

export default router;
