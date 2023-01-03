import Demo from 'app/pages/Demo/Demo';
import ForgotPass from 'app/pages/ForgotPass';
import Conversation from 'app/components/Conversation/Conversation';
import { HomePage } from 'app/pages/HomePage/Loadable';
import { NotFoundPage } from 'app/components/NotFoundPage/Loadable';
import { LoginPage } from 'app/pages/LoginPage/Loadable';

import { RegisterPage } from 'app/pages/RegisterPage/Loadable';
import NickName from 'app/pages/RegisterPage/RegisterProfile/NickName';
import Picture from 'app/pages/RegisterPage/RegisterProfile/Picture';
import Birth from 'app/pages/RegisterPage/RegisterProfile/Birthday';
import Gender from 'app/pages/RegisterPage/RegisterProfile/Gender';
import Desc from 'app/pages/RegisterPage/RegisterProfile/Description';
import Mode from 'app/pages/RegisterPage/RegisterProfile/Mode';

import { ChatPage } from 'app/pages/ChatPage/Loadable';

export const routes = [
  { path: '/', component: HomePage },
  { path: '/chat/:useId', component: ChatPage },

  { path: '/login', component: LoginPage },
  { path: '/forgot', component: ForgotPass },

  { path: '/register', component: RegisterPage },
  { path: '/register/nickname', component: NickName },
  { path: '/register/picture', component: Picture },
  { path: '/register/birthday', component: Birth },
  { path: '/register/gender', component: Gender },
  { path: '/register/description', component: Desc },
  { path: '/register/mode', component: Mode },

  { path: '*', component: NotFoundPage },
  { path: '/demo', component: Demo },
];
