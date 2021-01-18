// import Welcome from './Welcome';
import Login from './Login';
import ContinueProcessRouter from './ContinueProcessRouter';
import NotFound from './NotFound';

const permitPages: any[] = [
  // ...Welcome,
  ...Login,
  ...NotFound,
  ...ContinueProcessRouter,
];

export default permitPages;
