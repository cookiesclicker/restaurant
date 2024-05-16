import home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': home,
  '/home': home,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
