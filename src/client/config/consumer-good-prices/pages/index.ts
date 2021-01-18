import home from './Home';
import search from './Search';
import details from './Details';
import error from './Error';
import notFound from './NotFound';

const pages = [...home, ...search, ...details, ...error, ...notFound];

export default pages;
