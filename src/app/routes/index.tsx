import Demo from 'app/pages/Demo/Demo';
import ForgotPass from 'app/pages/ForgotPass';
import { HomePage } from 'app/pages/HomePage/Loadable';
import { NotFoundPage } from 'app/pages/NotFoundPage/Loadable';
import { LoginPage } from 'app/pages/LoginPage/Loadable';

import { RegisterPage } from 'app/pages/RegisterPage/Loadable';
import NickName from 'app/pages/RegisterPage/RegisterProfile/NickName';
import Picture from 'app/pages/RegisterPage/RegisterProfile/Picture';
import Birth from 'app/pages/RegisterPage/RegisterProfile/Birthday';
import Gender from 'app/pages/RegisterPage/RegisterProfile/Gender';
import Desc from 'app/pages/RegisterPage/RegisterProfile/Description';

import { ChatPage } from 'app/pages/ChatPage/Loadable';
// import Demo2 from 'app/pages/Demo/Demo2';

export const routes = [
  { path: '/login', component: LoginPage },
  { path: '/forgot', component: ForgotPass },
  { path: '/register', component: RegisterPage },
  { path: '*', component: NotFoundPage },
  { path: '/demo', component: Demo },
  // { path: '/demo2', component: Demo2 },
];

export const privateRoutes = [
  { path: '/', component: HomePage },
  { path: '/chat/:useId', component: ChatPage },
  { path: '/register/nickname', component: NickName },
  { path: '/register/picture', component: Picture },
  { path: '/register/birthday', component: Birth },
  { path: '/register/gender', component: Gender },
  { path: '/register/description', component: Desc },
];
