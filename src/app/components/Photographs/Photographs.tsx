import axios from 'axios';
import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Container,
  createStyles,
  FileButton,
  LoadingOverlay,
  Text,
} from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { images } from 'assets/images';
import { BASEDOMAIN } from 'utils/http/requests';
import { selectAuth } from 'store/slice/authSlice/selectors';
import { ReactComponent as Plus } from 'assets/icons/plus.svg';
import { AuthSlice } from 'store/slice/authSlice';

function Photographs() {
  const dispatch = useDispatch();
  const { authActions } = AuthSlice();
  const { userId, authToken, profile } = useSelector(selectAuth);
  // Local
  const { t } = useTranslation();
  const { cx, classes } = makeStyles();
  const [pictures, setPictures] = useState<string[]>(profile.picture);
  const [loading, setLoading] = useState<boolean>(false);
  const [active, setActive] = useState<number>(-1);

  const handleUploadImage = (file, i) => {
    try {
      setLoading(true);
      setActive(i);
      const transientImg = URL.createObjectURL(file);
      setPictures([...pictures, transientImg]);
      console.log(transientImg);
      const reader = new FileReader();
      reader.onload = async event => {
        const base64 = event.target?.result;
        let newBase: any = event.target?.result?.toString().indexOf(',');
        let num = newBase + 1;
        const newString = base64?.toString().slice(num);
        // Request
        const param = { file_base64: newString };
        await axios
          .post(`${BASEDOMAIN}/v1/godoo/profile/uploadimage`, param, {
            headers: { userid: userId, token: authToken },
          })
          .then(res => {
            const { data } = res;
            setLoading(false);
            if (data.error === 0) {
              console.log(data.data);
              setPictures([...data.data]);
              dispatch(
                authActions.updateProfile({
                  profile: {
                    ...profile,
                    picture: [...data.data],
                  },
                }),
              );
            } else {
              throw new Error('System Error');
            }
          });
      };

      reader.readAsDataURL(file);
    } catch {
      dispatch(
        authActions.setSystemError({
          isError: true,
        }),
      );
    }
  };
  console.log(pictures);
  return (
    <Container
      fluid
      sx={{
        padding: 0,
      }}
    >
      <div className={classes.container}>
        {Array.from({ length: 6 }).map((item, index) => {
          const defaultImg = index === 0 ? images.slimeBig : images.slime;
          return (
            <Box
              key={index}
              className={cx(classes.item, index === 0 ? classes.first : null)}
            >
              {profile?.picture[index] ? (
                <Avatar
                  sx={{
                    position: 'relative',
                    zIndex: 5,
                  }}
                  src={profile.picture[index]}
                  className={classes.img}
                />
              ) : (
                <>
                  <Avatar
                    src={pictures[index] ? pictures[index] : defaultImg}
                    className={classes.img}
                  />
                  <LoadingOverlay
                    radius={30}
                    visible={active === index ? loading : false}
                    overlayBlur={0}
                  />
                </>
              )}
              <FileButton
                onChange={file => {
                  handleUploadImage(file, index);
                }}
                accept="image/png,image/jpeg"
              >
                {props => (
                  <Button
                    {...props}
                    disabled={index > profile?.picture.length}
                    className={cx(
                      classes.addBtn,
                      index === 0 ? classes.addFirst : null,
                    )}
                  >
                    <Plus />
                    {t('Profile.Add')}
                  </Button>
                )}
              </FileButton>
            </Box>
          );
        })}
      </div>
      <Text className={classes.tutorial}>
        {t(
          'Profile.Upload at least one photo. Hold & drag photos to change the order.',
        )}
      </Text>
    </Container>
  );
}

export default Photographs;

const makeStyles = createStyles(() => ({
  container: {
    gap: '5%',
    width: '100%',
    maxWidth: 570,
    maxHeight: 570,
    display: 'grid',
    marginTop: 24,
    gridTemplateColumns: '30% 30% 30%',
    gridTemplateRows: '30% 30% 30%',
    aspectRatio: '1',

    after: {
      content: '""',
      display: 'block',
      clear: 'both',
    },
    '@media (max-width:575px)': {
      maxWidth: '100%',
    },
  },
  item: {
    width: '100%',
    height: '100%',
    maxWidth: 170,
    background: '#FFFFFF',
    borderRadius: 30,
    aspectRatio: '1',
    position: 'relative',
    '@media (max-width:575px)': {
      maxWidth: 106,
    },
  },
  first: {
    // width: 370,
    maxWidth: 370,
    gridColumn: '1/3',
    gridRow: '1/3',
    aspectRatio: '1/1',
    '@media (max-width:575px)': {
      width: '100%',
      maxWidth: 225,
    },
  },
  tutorial: {
    width: 370,
    fontWeight: 400,
    fontSize: 16,
    lineHeight: '20px',
    color: '#929292',
    marginTop: 12,
    '@media (max-width:575px)': {
      width: '70%',
    },
  },

  img: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
  },
  addBtn: {
    width: 84,
    height: 26,
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '18px',
    background: '#E46125',
    borderRadius: 30,
    position: 'absolute',
    bottom: '8%',
    left: '50%',
    transform: 'translateX(-50%)',
    ':active': {
      transform: 'translateX(-50%)',
    },
    ':hover': {
      background: '#E46125',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    ':disable': {},
    '@media (max-width:575px)': {
      width: 66,
      height: 20,
      fontSize: 10,
    },
  },
  addFirst: {
    width: 156,
    height: 56,
    fontWeight: 400,
    fontSize: 32,
    lineHeight: '40px',
    '@media (max-width:575px)': {
      width: 120,
      height: 38,
      fontWeight: 400,
      fontSize: 24,
      lineHeight: '40px',
    },
  },
}));
