import React, { useState } from 'react';
import Header from 'app/components/Header/Header';
import Swipe from 'app/components/Swipe/Swipe';
import Liked from 'app/components/Liked/Liked';
import Navbar from 'app/components/Match/Match';
import About from 'app/components/About/About';

function HomeMobile() {
  const [active, setActive] = useState(0);
  return (
    <Header active={active} setActive={setActive}>
      {active === 0 ? (
        <Swipe />
      ) : active === 1 ? (
        <Liked />
      ) : active === 2 ? (
        <Navbar />
      ) : (
        <About />
      )}
    </Header>
  );
}

export default HomeMobile;
