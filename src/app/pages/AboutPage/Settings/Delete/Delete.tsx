import React, { useState } from 'react';
import { Image, List, Stack, Text, TextInput } from '@mantine/core';
import { images } from 'assets/images';
import { AboutPage } from '../../Loadable';

function Delete() {
  const [isContinue, setIsContinue] = useState(true);

  const handleDeletePass = () => {
    if (isContinue) {
      setIsContinue(false);
    }
  };
  return (
    <AboutPage title="Delete account">
      {isContinue ? (
        <>
          <Stack
            sx={{
              width: 570,
              alignItems: 'center',
            }}
          >
            <Image width={80} src={images.warn} />
            <Text
              sx={{
                width: '45%',
                textAlign: 'center',
                fontWeight: 500,
                fontSize: 18,
                lineHeight: '22px',
              }}
            >
              Once deleting this account, you cannot take back:
            </Text>
          </Stack>
          <List
            sx={{
              fontWeight: 400,
              fontSize: 14,
              lineHeight: '18px',
              marginTop: 20,
            }}
          >
            <List.Item>All the coins in your GoDoo Wallet</List.Item>
            <List.Item>All the gift in your Gift box</List.Item>
            <List.Item>
              All the contacts with your friends or lover (including texts,
              pictures, gifts,...)
            </List.Item>
            <List.Item>
              All the matches (including <b>You liked</b> and <b>Liked you</b>)
            </List.Item>
            <List.Item>
              Information of this profile for the next time setting up
            </List.Item>
          </List>
        </>
      ) : (
        <>
          <Text
            sx={{
              fontWeight: 500,
              fontSize: 18,
              lineHeight: '22px',
            }}
          >
            You need to enter your password:
          </Text>
          <TextInput
            sx={{
              width: 570,
              [`@media (max-width:575px)`]: {
                width: '100%',
              },
            }}
            placeholder="Password"
            withAsterisk
          />
        </>
      )}
      <button className="aboutBtn" onClick={handleDeletePass}>
        Continue
      </button>
    </AboutPage>
  );
}

export default Delete;
