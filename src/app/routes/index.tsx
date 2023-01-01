import { HomePage } from 'app/pages/HomePage/Loadable';
import { NotFoundPage } from 'app/components/NotFoundPage/Loadable';
import Demo from 'app/pages/Demo/Demo';
import ForgotPass from 'app/pages/ForgotPass';
import { Profile } from 'app/pages/Profile/Loadable';
import Conversation from 'app/components/Conversation/Conversation';
import { LoginPage } from 'app/pages/LoginPage/Loadable';
import { RegisterPage } from 'app/pages/RegisterPage/Loadable';

export const routes = [
  { path: '/', component: HomePage },
  { path: '/profile', component: Profile },
  { path: '/login', component: LoginPage },
  { path: '/forgot', component: ForgotPass },
  { path: '/register', component: RegisterPage },

  { path: '/:usedId', component: Conversation },
  { path: '*', component: NotFoundPage },
  { path: '/demo', component: Demo },
];
