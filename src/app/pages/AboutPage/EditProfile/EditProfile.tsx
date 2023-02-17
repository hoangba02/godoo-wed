import React, { ReactComponentElement, useRef, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  Input,
  Space,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { useSelector } from 'react-redux';
import { AboutPage } from '../Loadable';
import { ReactComponent as X } from 'assets/icons/edit/x.svg';
import { ReactComponent as ArrowDown } from 'assets/icons/edit/arrowDown.svg';
import { ReactComponent as ArrowRight } from 'assets/icons/edit/arrowRight.svg';
import { getProfileSelector } from 'store/slice/userSlice/selectors';
import Photographs from 'app/components/Photographs/Photographs';
import { EditProfileStyles } from './EditProfileStyles';
import { genders } from 'app/components/GendersList/GendersList';
import { useNavigate } from 'react-router-dom';
import { MORE } from './More';

function EditProfile() {
  const navigate = useNavigate();
  const profile = useSelector(getProfileSelector);
  // Local
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { classes } = EditProfileStyles();
  const [info, setInfo] = useState({
    nickname: profile.nickname,
    introduction: profile.introduction,
  });
  const [photos, setPhotos] = useState({
    one: profile.picture[0],
    two: profile.picture[1],
    three: profile.picture[2],
    four: profile.picture[3],
    fire: profile.picture[4],
    six: profile.picture[5],
  });
  const [gendersUser, setGendersUser] = useState(() => {
    return genders.filter(value => profile?.gender.includes(value.name));
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
        <Stack className={classes.stack}>
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
          <Text className={classes.title}>Some words about me</Text>
          <Box>
            <Text className={classes.label}>
              Write funny sentences to intro yourself
            </Text>
            <TextInput
              placeholder="Write something down ..."
              maxLength={100}
              name="introduction"
              value={info.introduction}
              onChange={e => {
                handleChange(e);
              }}
            />
          </Box>
          <Flex justify="flex-end">
            <Text className={classes.label}>
              {info.introduction.length}/100 words
            </Text>
          </Flex>
        </Stack>
        <Stack className={classes.stack}>
          <Text className={classes.title}>
            Something that I’m interested in
          </Text>
        </Stack>
        <Stack className={classes.stack}>
          <Text className={classes.title}>I’m proud to be a/ an ...</Text>
          <Text className={classes.label}>You can have maximum 2 genders</Text>

          <Flex className={classes.options}>
            {gendersUser.map((gender, index) => (
              <Option key={index} name={gender.name} icon={gender.icon} />
            ))}
          </Flex>
          <Flex
            sx={{
              justifyContent: 'flex-end',
              alignItems: 'center',
              color: '#929292',
              transition: 'all 0.5s linear',
              cursor: 'pointer',
              ':hover': {
                color: 'var(--primary-4)',
              },
            }}
            onClick={() => navigate('/about/profile/gender')}
          >
            <Text className={classes.label}>Change gender</Text>
            <ArrowRight />
          </Flex>
        </Stack>
        <Stack spacing={4}>
          <Text className={classes.title}>More about me</Text>
          {MORE.map((item, index) => (
            <Flex className={classes.more} key={index}>
              <Flex align="center">
                {item.icon}
                <Text mx={8} mt={0} className={classes.title}>
                  {item.name}
                </Text>
              </Flex>
              <Button
                styles={{
                  rightIcon: {
                    marginLeft: 0,
                  },
                }}
                variant="subtle"
                rightIcon={<ArrowRight />}
                className={classes.addBtn}
                onClick={() => navigate('/about/profile/more')}
              >
                Add
              </Button>
            </Flex>
          ))}
        </Stack>
      </Container>
    </AboutPage>
  );
}

export default EditProfile;

interface OptionProps {
  name?: string;
  icon?: JSX.Element;
}
export function Option({ name, icon }: OptionProps) {
  // Local
  const { classes } = EditProfileStyles();

  return (
    <Flex
      sx={{
        position: 'relative',
      }}
    >
      <Flex
        sx={{
          height: '100%',
          width: 'max-content',
          padding: '2px 8px',
          borderRadius: 200,
          backgroundColor: '#FFE9E0',
          border: '1px solid var(--primary-4)',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        <Box
          sx={{
            width: 24,
            height: 24,
          }}
        >
          {icon}
        </Box>
        <Text
          sx={{
            fontWeight: 500,
            fontSize: 14,
            lineHeight: '18px',
          }}
        >
          {name}
        </Text>
      </Flex>
      <Button
        sx={{
          right: -24,
          top: '52%',
          transform: 'translateY(-50%)',
        }}
        className={classes.clearBtn}
        variant="subtle"
      >
        <X />
      </Button>
    </Flex>
  );
}
