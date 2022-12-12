import { HomePage } from 'app/pages/HomePage/Loadable';
import { NotFoundPage } from 'app/components/NotFoundPage/Loadable';
import { LoginPage } from 'app/pages/LoginPage/Loadable';
import Demo from 'app/pages/Demo/Demo';
import ForgotPass from 'app/pages/ForgotPass';

export const routes = [
  { path: '/', component: HomePage, layout: true },
  { path: '/login', component: LoginPage },
  { path: '/forgot', component: ForgotPass },
  { path: '*', component: NotFoundPage },
  { path: '/demo', component: Demo },
];
