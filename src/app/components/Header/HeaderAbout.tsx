import React from 'react';
import { Center, Text } from '@mantine/core';
import { SubtleButton } from '../Customs/Button/SubtleButton';
import { ReactComponent as ArrowLeft } from 'assets/icons/arrow-narrow-left.svg';

interface Props {
  screen?: string;
  handleClick?: () => void;
}
function HeaderAbout({ screen, handleClick }: Props) {
  return (
    <Center
      sx={{
        height: 42,
        position: 'relative',
        alignItems: 'flex-end',
        borderBottom: '2px solid #FF9565',
        '@media (max-width:575px)': {
          height: 74,
          boxShadow: ' 0px 2px 4px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <SubtleButton
        sx={{
          position: 'absolute',
          left: 0,
        }}
        onClick={handleClick}
      >
        <ArrowLeft />
      </SubtleButton>
      <Text
        sx={{
          fontWeight: 600,
          fontSize: 24,
          lineHeight: '30px',
          paddingBottom: 10,
          '@media (max-width: 575px)': {
            fontSize: 20,
            lineHeight: '25px',
          },
        }}
      >
        {screen}
      </Text>
    </Center>
  );
}

export default HeaderAbout;
