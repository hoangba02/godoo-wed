import { HomePage } from 'app/pages/HomePage/Loadable';
import { NotFoundPage } from 'app/components/NotFoundPage/Loadable';
import Demo from 'app/pages/Demo/Demo';
import ForgotPass from 'app/pages/ForgotPass';
import SignIn from 'app/components/SignIn/SignIn';
import Register from 'app/components/Register/Register';
import { Profile } from 'app/pages/Profile/Loadable';

export const routes = [
  { path: '/', component: HomePage, layout: true },
  { path: '/login', component: SignIn },
  { path: '/register', component: Register },
  { path: '/forgot', component: ForgotPass },
  { path: '/profile', component: Profile },
  { path: '*', component: NotFoundPage },
  { path: '/demo', component: Demo },
];
