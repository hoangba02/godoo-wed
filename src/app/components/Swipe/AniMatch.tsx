import React from 'react';
import { motion } from 'framer-motion';
import { Flex, Paper, Stack, Text } from '@mantine/core';
import { useSelector } from 'react-redux';
import { getProfileSelector } from 'store/slice/userSlice/selectors';
import { useNavigate } from 'react-router-dom';

export default function AniMatch({ data }) {
  const navigate = useNavigate();
  const profile = useSelector(getProfileSelector);

  return (
    <Stack
      sx={{
        width: '100%',
        position: 'absolute',
        top: 100,
        zIndex: 99,
        alignItems: 'center',
      }}
    >
      <Flex
        sx={{
          gap: 18,
        }}
      >
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Paper
            sx={{
              position: 'relative',
              width: 120,
              height: 120,
              borderRadius: '110px 110px 0px 110px',
              backgroundImage: `url(${profile.picture[0]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              ':before': {
                content: "''",
                position: 'absolute',
                top: -6,
                left: -6,
                width: 'calc(100% + 12px)',
                height: 'calc(100% + 12px)',
                borderRadius: '110px 110px 0px 110px',
                background:
                  'linear-gradient(to right, #C91A44 0%,  #E46125 100%)',
                zIndex: -1,
              },
            }}
          />
        </motion.div>
        <motion.div
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Paper
            sx={{
              position: 'relative',
              width: 140,
              height: 140,
              borderRadius: '100px 100px 100px 0px',
              backgroundImage: `url(${data.picture[0]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              ':before': {
                content: "''",
                position: 'absolute',
                top: -6,
                left: -6,
                width: 'calc(100% + 12px)',
                height: 'calc(100% + 12px)',
                borderRadius: '100px 100px 100px 0px',
                background: 'linear-gradient(to left,#E46125 0%, #C91A44 100%)',
                zIndex: -1,
              },
            }}
          />
        </motion.div>
      </Flex>

      <motion.div
        initial={{ opacity: 0, scale: 3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.5,
          duration: 0.2,
          type: 'spring',
          restSpeed: 10,
        }}
        onAnimationComplete={() => {
          navigate(`/chat/${data.userId}`);
        }}
      >
        <Text
          sx={{
            fontWeight: 600,
            fontSize: 32,
            lineHeight: '40px',
            color: '#FFFFFF',
          }}
        >
          It’s a match!!!
        </Text>
      </motion.div>
    </Stack>
  );
}
