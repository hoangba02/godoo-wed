import React from 'react';
import { ReactComponent as Dots } from 'assets/icons/dots.svg';
import { Avatar, Box, Button, Flex, Stack, Text } from '@mantine/core';

function MatchAccount() {
  return (
    <Flex
      sx={{
        gap: 0,
        minWidth: 250,
        justifyContent: 'space-between',
        marginBottom: 11,
        padding: 4,
        ':hover': {
          backgroundColor: '#FFE9E0',
          borderRadius: 8,
        },
      }}
    >
      <Avatar
        size={50}
        radius="xl"
        src="https://i.pinimg.com/236x/47/10/93/471093fa6583930714506215fd25a78d.jpg"
        alt="it's me"
      />
      <Stack
        sx={{
          width: '100%',
          gap: 0,
          margin: 4,
          justifyContent: 'center',
        }}
      >
        <Text
          sx={{
            color: 'var(--black)',
            fontWeight: 500,
            fontSize: 18,
            lineHeight: '22px',
          }}
        >
          Sophia
        </Text>
        <Text
          sx={{
            color: 'var(--grey-dark)',
            fontWeight: 400,
            fontSize: 12,
            lineHeight: '15px',
          }}
        >
          Bella is your new match!
        </Text>
      </Stack>
      <Box
        sx={{
          height: '100%',
          width: 24,
        }}
      >
        <Button
          sx={{
            height: '100%',
            width: '100%',
            background: 'transparent',
            ':hover': {
              backgroundColor: 'transparent',
            },
          }}
          variant="subtle"
        >
          <Dots />
        </Button>
      </Box>
    </Flex>
  );
}

export default MatchAccount;
