import {
  Avatar,
  Button,
  Center,
  Container,
  createStyles,
  Flex,
  Stack,
  Text,
} from '@mantine/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectAuth } from 'store/slice/authSlice/selectors';
import { ReactComponent as Settings } from 'assets/icons/settings.svg';
import { ReactComponent as Home } from 'assets/icons/home-05.svg';
import { SubtleButton } from 'app/components/Customs/Button/SubtleButton';
import { useTranslation } from 'react-i18next';
import { Age } from 'lib/functions/handleFomattedDate';

function About() {
  const navigate = useNavigate();
  const { profile, isMobile } = useSelector(selectAuth);
  // Local
  const { t } = useTranslation();
  const { classes } = makeStyles();

  const handleBackToHome = () => {
    if (!isMobile) {
      navigate('/');
    }
  };
  return (
    <Container fluid className={classes.container}>
      <Flex className={classes.header}>
        <SubtleButton
          className={classes.homeBtn}
          variant="subtle"
          onClick={handleBackToHome}
        >
          {!isMobile && <Home />}
        </SubtleButton>

        <Stack align="center" spacing={0}>
          <Center className={classes.avatarWrapper}>
            <Avatar
              className={classes.avatar}
              radius={9999}
              src={profile.picture[0]}
            />
          </Center>
          <Text className={classes.nickname}>{profile.nickname}</Text>
          <Button variant="subtle" className={classes.editBtn}>
            {`${t('About.edit my profile')}`}
          </Button>
        </Stack>
        <SubtleButton
          variant="subtle"
          onClick={() =>
            navigate('/setting', {
              state: {
                animation: true,
              },
            })
          }
        >
          <Settings />
        </SubtleButton>
      </Flex>
    </Container>
  );
}

export default About;

const makeStyles = createStyles(() => ({
  container: {
    width: '100%',
    minWidth: 348,
    height: '100%',
    padding: '0px',
    [`@media (max-width:575px)`]: {
      height: 'calc(100vh - 67px)',
    },
  },
  header: {
    width: '100%',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 150,
    height: 150,
    [`@media (max-width:575px)`]: {
      width: 120,
      height: 120,
    },
  },
  avatarWrapper: {
    position: 'relative',
    width: 166,
    height: 166,
    borderRadius: '50%',
    background: 'linear-gradient(90deg, #E46125 0%, #C91A44 100%)',
    '::before': {
      content: '""',
      position: 'absolute',
      width: 158,
      height: 158,
      borderRadius: '50%',
      background: 'var(--white)',
    },

    [`@media (max-width:575px)`]: {
      width: 135,
      height: 135,
      '::before': {
        width: 127,
        height: 127,
      },
    },
  },
  homeBtn: {
    [`@media (max-width:575px)`]: {
      padding: '23px !important',
    },
  },
  nickname: {
    color: '#E46125',
    fontWeight: 500,
    fontSize: 32,
    lineHeight: '40px',
  },
  editBtn: {
    marginTop: 8,
    padding: 0,
    width: '133px !important',
    height: '28px !important',
    background: 'var(--light)',
    color: 'var(--grey-dark)',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: '20px',
    borderRadius: 53,
    ':hover': {
      background: 'var(--light)',
    },
    [`@media (max-width:575px)`]: {
      fontSize: 16,
    },
  },
}));
