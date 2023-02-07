import React, { useRef, useState } from 'react';
import {
  Box,
  Button,
  Container,
  createStyles,
  Input,
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
  const [nickname, setNickname] = useState(profile.nickname);
  const [photos, setPhotos] = useState({
    one: profile.picture[0],
    two: profile.picture[1],
    three: profile.picture[2],
    four: profile.picture[3],
    fire: profile.picture[4],
    six: profile.picture[5],
  });

  const handleClearNickname = () => {
    setNickname('');
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  };
  const handleChange = e => {
    setNickname(e.target.value);
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
            value={nickname}
            onChange={e => {
              handleChange(e);
            }}
          />
          {nickname && (
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
        <Box
          sx={{
            height: 570,
          }}
        >
          <Photographs img={photos} setImg={setPhotos}/>
        </Box>
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
    padding: 0,
  },
  clearBtn: {
    width: '24px !important',
    height: '24px !important',
    padding: 0,
    position: 'absolute',
    right: 10,
    top: '55%',
  },
}));
