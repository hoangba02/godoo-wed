import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';
import { PrivateRouter } from './routes/PrivateRouter';

// import Demo2 from './pages/Demo/Demo2';
import Demo3 from './pages/Demo/Demo3';
import ForgotPass from 'app/pages/ForgotPass';
import { ChatPage } from './pages/ChatPage/Loadable';
import { HomePage } from 'app/pages/HomePage/Loadable';
import { NotFoundPage } from 'app/pages/NotFoundPage/Loadable';
import { LoginPage } from 'app/pages/LoginPage/Loadable';
import { RegisterPage } from 'app/pages/RegisterPage/Loadable';
import NickName from 'app/pages/RegisterPage/RegisterProfile/NickName';
import Picture from 'app/pages/RegisterPage/RegisterProfile/Picture';
import Birth from 'app/pages/RegisterPage/RegisterProfile/Birthday';
import Gender from 'app/pages/RegisterPage/RegisterProfile/Gender';
import Desc from 'app/pages/RegisterPage/RegisterProfile/Description';

import About from './components/About/About';
import Account from './pages/AboutPage/Settings/Account/Account';
import Delete from './pages/AboutPage/Settings/Delete/Delete';
import Setting from './pages/AboutPage/Settings/Setting';
import ChangePass from './pages/AboutPage/Settings/ChangePasss/ChangePass';
import Notification from './pages/AboutPage/Settings/Notification/Notification';
import EditProfile from './pages/AboutPage/EditProfile/EditProfile';
import EditGender from './pages/AboutPage/EditProfile/EditGender/EditGender';
import MoreAbout from './components/Layout/MoreAbout/MoreAbout';
import Demo from './pages/Demo/Demo';
import LinkMess from './pages/AboutPage/Settings/LinkMess/LinkMess';
import Interest from './pages/AboutPage/EditProfile/Interest/Interest';

// import Websocket from 'contexts/websocket';
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:active" element={<HomePage />} />
        <Route path="/chat/:userId" element={<ChatPage />} />
        {/* About Page */}
        <Route path="/about" element={<About />} />
        <Route path="/about/setting" element={<Setting />} />
        <Route path="/about/setting/notification" element={<Notification />} />
        <Route path="/about/setting/account" element={<Account />} />
        <Route path="/about/setting/link" element={<LinkMess />} />
        <Route
          path="/about/setting/account/changepass"
          element={<ChangePass />}
        />
        <Route path="/about/setting/account/delete" element={<Delete />} />
        {/* Edidt Profile */}
        <Route path="/about/profile" element={<EditProfile />} />
        <Route path="/about/profile/gender" element={<EditGender />} />
        <Route path="/about/profile/interest" element={<Interest />} />
        <Route path="/about/profile/more/:tab" element={<MoreAbout />} />

        {/* Register Page*/}
        <Route path="/register/nickname" element={<NickName />} />
        <Route path="/register/picture" element={<Picture />} />
        <Route path="/register/birthday" element={<Birth />} />
        <Route path="/register/gender" element={<Gender />} />
        <Route path="/register/description" element={<Desc />} />

        <Route path="*" element={<NotFoundPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot" element={<ForgotPass />} />
        <Route path="/demo" element={<Demo />} />
        {/* <Route path="/demo2" element={<Demo2 />} /> */}
        <Route path="/demo3" element={<Demo3 />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}
