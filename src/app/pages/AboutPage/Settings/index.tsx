import React, { useState } from 'react';
import { createStyles, Flex } from '@mantine/core';
import { motion } from 'framer-motion';
import About from 'app/components/About/About';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { UserSlice } from 'store/slice/userSlice';
import { useMediaQuery } from '@mantine/hooks';
import Setting from './Setting';

function SettingPage() {
  const navigate = useNavigate();
  const { classes } = useStyles();
  const location = useLocation();
  const phone = useMediaQuery('(max-width: 575px)');
  const [settingMotion, setSettingMotion] = useState<any>(location.state);
  const handleAnimationComplete = () => {
    if (!settingMotion) {
      navigate('/about');
    }
  };

  if (phone)
    return (
      <Flex className={classes.container}>
        <Setting />
      </Flex>
    );
  return (
    <Flex className={classes.container}>
      {!phone && (
        <About
          animation={settingMotion.animation}
          onAnimationEnd={handleAnimationComplete}
        />
      )}

      <motion.div
        initial={
          !settingMotion.animation
            ? {
                x: '100vw',
                width: '0%',
              }
            : {
                x: 0,
                width: '100%',
              }
        }
        animate={
          settingMotion.animation
            ? { x: 0, width: '100%' }
            : {
                x: '100vw',
                width: '0%',
              }
        }
        transition={{ duration: 1.5 }}
      >
        <Setting onMotion={setSettingMotion} />
      </motion.div>
    </Flex>
  );
}

export default SettingPage;

const useStyles = createStyles(() => ({
  container: {
    width: '100%',
    height: '100%',
    padding: '0 135px',
    [`@media (max-width:575px)`]: {
      padding: 0,
      margin: 0,
    },
  },
}));
