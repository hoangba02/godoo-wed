import { Flex } from '@mantine/core';
import { SubtleButton } from 'app/components/Customs/Button/SubtleButton';
import { HEADERS } from 'lib/maps/HeaderMap';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  active?: number;
}
function Header({ active = 0 }: Props) {
  const navigate = useNavigate();
  return (
    <Flex
      sx={{
        width: '100vw',
        backgroundColor: '#FFE9E0',
        justifyContent: 'space-between',
        borderRadius: '20px 20px 0px 0px',
        position: 'fixed',
        bottom: 0,
        zIndex: 99,
      }}
    >
      {HEADERS.map((header, index) => (
        <SubtleButton onClick={() => navigate(`${header.navigate}`)}>
          {active === index ? header.friend : header.basic}
        </SubtleButton>
      ))}
    </Flex>
  );
}

export default Header;
