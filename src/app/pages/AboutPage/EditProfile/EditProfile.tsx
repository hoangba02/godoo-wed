import React, { useRef, useState } from 'react';
import {
  Box,
  Button,
  Container,
  createStyles,
  Input,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { useSelector } from 'react-redux';
import { AboutPage } from '../Loadable';
import { ReactComponent as X } from 'assets/icons/edit/x.svg';
import { ReactComponent as ArrowDown } from 'assets/icons/edit/arrowDown.svg';
import { getProfileSelector } from 'store/slice/userSlice/selectors';
import Photographs from 'app/components/Photographs/Photographs';

function EditProfile() {
  const profile = useSelector(getProfileSelector);
  // Local
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { classes } = useStyles();
  const [info, setInfo] = useState({
    nickname: profile.nickname,
    bio: profile.introduction,
  });
  const [photos, setPhotos] = useState({
    one: profile.picture[0],
    two: profile.picture[1],
    three: profile.picture[2],
    four: profile.picture[3],
    fire: profile.picture[4],
    six: profile.picture[5],
  });

  const handleClearNickname = () => {
    setInfo({ ...info, nickname: '' });
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  };
  const handleChange = e => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  return (
    <AboutPage title="Edit profile">
      <Container className={classes.container}>
        <Input.Wrapper
          sx={{
            position: 'relative',
            marginBottom: 28,
          }}
        >
          <TextInput
            styles={{
              input: {
                height: '45px',
                marginTop: 4,
              },
            }}
            ref={inputRef}
            label="Nickname"
            name="nickname"
            value={info.nickname}
            onChange={e => {
              handleChange(e);
            }}
          />
          {info.nickname && (
            <Button
              className={classes.clearBtn}
              variant="subtle"
              onClick={handleClearNickname}
            >
              <X />
            </Button>
          )}
        </Input.Wrapper>
        <Input.Wrapper label="I’m looking for">
          <Input
            styles={{
              input: {
                height: '45px',
                marginTop: 4,
              },
              rightSection: {
                marginRight: 3,
              },
            }}
            component="select"
            rightSection={<ArrowDown color="#A9A9A9" />}
          >
            <option value="0">Friends</option>
            {/* <option value="1">Looking for my destiny</option> */}
          </Input>
        </Input.Wrapper>
        <Stack>
          <Text className={classes.title}>Photos</Text>
          <Box
            sx={{
              height: 570,
            }}
          >
            <Photographs img={photos} setImg={setPhotos} isEdit={true} />
          </Box>
          <Text
            sx={{
              width: '60%',
            }}
            className={classes.label}
          >
            Upload at least one photo. Hold & drag photos to change the order.
          </Text>
        </Stack>
        <Stack className={classes.stack}>
          <Text className={classes.title}>Bio</Text>
          <Box>
            <Text className={classes.label}>
              Write funny sentences to intro yourself
            </Text>
            <TextInput
              value={profile.introduction}
              name="introduction"
              onChange={e => {
                handleChange(e);
              }}
            />
          </Box>
        </Stack>
      </Container>
    </AboutPage>
  );
}

export default EditProfile;

const useStyles = createStyles(() => ({
  container: {
    width: 570,
    height: '100%',
    maxWidth: '100%',
    paddingTop: 24,
    overflow: 'scroll',
  },
  clearBtn: {
    width: '24px !important',
    height: '24px !important',
    padding: 0,
    position: 'absolute',
    right: 10,
    top: '55%',
  },
  title: {
    fontWeight: 500,
    fontSize: 18,
    lineHeight: '22px',
    marginTop: 18,
  },
  label: {
    color: '#929292',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '18px',
  },
  stack: {
    gap: 6,
  },
}));
