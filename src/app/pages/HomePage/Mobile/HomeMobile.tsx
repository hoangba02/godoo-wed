import React from 'react';
import { Container, createStyles } from '@mantine/core';
import Swipe from 'app/components/Swipe/Swipe';
import Liked from 'app/components/Liked/Liked';
import Navbar from 'app/components/Match/Match';
import About from 'app/components/About/About';
import { useParams } from 'react-router-dom';
import HeaderMobile from 'app/components/Header/HeaderMobile';

function HomeMobile() {
  const { active } = useParams();
  console.log(active);
  const { classes } = makeStyles();
  // const [active, setActive] = useState(0);
  return (
    <Container fluid className={classes.container}>
      {active === 'about' ? (
        <About />
      ) : active === 'liked' ? (
        <Liked />
      ) : active === 'chat' ? (
        <Navbar />
      ) : (
        <Swipe />
      )}
      <HeaderMobile active={active} />
    </Container>
  );
}

export default HomeMobile;

const makeStyles = createStyles(() => ({
  container: {
    minWidth: '100%',
    maxHeight: '100vh',
    overflow: 'hidden',
    padding: 0,
  },
}));
