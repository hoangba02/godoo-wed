import React, { useState } from 'react';
import {
  BackgroundImage,
  Box,
  Button,
  Card,
  Flex,
  Stack,
  Text,
} from '@mantine/core';
import { IconCamera, IconPlus, IconChevronRight } from '@tabler/icons';
import { ProfileStyle } from './ProfileStyles';
import { images } from 'assets/images';
import { ReactComponent as Blink } from 'assets/icons/blink.svg';
import { useDispatch } from 'react-redux';
import { CounterSlice } from 'store/slice/counterSlice';
import { UserSlice } from 'store/slice/userSlice';
import { useMediaQuery } from '@mantine/hooks';

export default function Picture() {
  const { classes } = ProfileStyle();
  const dispatch = useDispatch();
  const phone = useMediaQuery('(max-width:575px)');
  const { counterActions } = CounterSlice();
  const { actions } = UserSlice();
  const [img, setImg] = useState({
    one: images.illustrating,
    two: '',
    three: '',
    four: '',
    fire: '',
    six: '',
  });

  const handleUploadImage = e => {
    console.log(img);
    setImg({ ...img, [e.target.name]: URL.createObjectURL(e.target.files[0]) });
  };
  const handleCreatePicture = () => {
    dispatch(counterActions.increase());
    dispatch(
      actions.createProfile({
        picture: [img.one, img.two, img.three, img.four, img.fire, img.six],
      }),
    );
  };
  return (
    <Box className={classes.children}>
      <Box className={classes.picContent}>
        <Flex justify="space-between">
          <Card
            sx={{
              height: 370,
              width: 370,
              [`@media (max-width:575px)`]: {
                height: 225,
                width: 225,
              },
            }}
            className={classes.picCard}
          >
            <BackgroundImage
              sx={{
                position: 'absolute',
                inset: 0,
              }}
              src={img.one}
            ></BackgroundImage>
            <Box
              sx={{
                marginTop: 41.5,
                [`@media (max-width:575px)`]: {
                  marginTop: 20.5,
                },
              }}
            >
              <Blink width={phone ? 35 : 60} height={phone ? 35 : 60} />
            </Box>
            <input
              name="one"
              className={classes.upImg}
              type="file"
              onChange={e => {
                handleUploadImage(e);
              }}
              id="one"
            />
            <label htmlFor="one" className={classes.label}>
              <Button
                styles={{
                  leftIcon: {
                    marginRight: 10,
                  },
                  root: {
                    [`@media (max-width:575px)`]: {
                      width: '145px',
                      height: '32px',
                      fontSize: 14,
                      fontWeight: 500,
                      lineHeight: '18px',
                    },
                  },
                }}
                component="span"
                leftIcon={<IconCamera />}
                className={classes.photoBtn}
              >
                Change Photo
              </Button>
            </label>
          </Card>
          <Stack justify="space-between">
            <Card h={170} w={170} className={classes.picCard}>
              <BackgroundImage
                sx={{
                  position: 'absolute',
                  inset: 0,
                }}
                src={img.two}
              ></BackgroundImage>
              <Box
                sx={{
                  marginTop: 41.5,
                  [`@media (max-width:575px)`]: {
                    marginTop: 20.5,
                  },
                }}
              >
                <Blink width={phone ? 35 : 60} height={phone ? 35 : 60} />
              </Box>
              <input
                name="two"
                className={classes.upImg}
                type="file"
                onChange={e => {
                  handleUploadImage(e);
                }}
                id="two"
              />
              <label htmlFor="two" className={classes.label}>
                <Button
                  styles={{
                    leftIcon: {
                      margin: 0,
                    },
                  }}
                  component="span"
                  leftIcon={<IconPlus width={18} height={18} />}
                  className={classes.button}
                >
                  Add
                </Button>
              </label>
            </Card>
            <Card h={170} w={170} className={classes.picCard}>
              <BackgroundImage
                sx={{
                  position: 'absolute',
                  inset: 0,
                }}
                src={img.three}
              ></BackgroundImage>
              <Box
                sx={{
                  marginTop: 41.5,
                  [`@media (max-width:575px)`]: {
                    marginTop: 20.5,
                  },
                }}
              >
                <Blink width={phone ? 35 : 60} height={phone ? 35 : 60} />
              </Box>
              <input
                name="three"
                className={classes.upImg}
                type="file"
                onChange={e => {
                  handleUploadImage(e);
                }}
                id="three"
              />
              <label htmlFor="three" className={classes.label}>
                <Button
                  styles={{
                    leftIcon: {
                      margin: 0,
                    },
                  }}
                  component="span"
                  leftIcon={<IconPlus width={18} height={18} />}
                  className={classes.button}
                >
                  Add
                </Button>
              </label>
            </Card>
          </Stack>
        </Flex>
        <Flex mt={30} justify="space-between">
          <Card h={170} w={170} className={classes.picCard}>
            <BackgroundImage
              sx={{
                position: 'absolute',
                inset: 0,
              }}
              src={img.four}
            ></BackgroundImage>
            <Box
              sx={{
                marginTop: 41.5,
                [`@media (max-width:575px)`]: {
                  marginTop: 20.5,
                },
              }}
            >
              <Blink width={phone ? 35 : 60} height={phone ? 35 : 60} />
            </Box>
            <input
              name="four"
              className={classes.upImg}
              type="file"
              onChange={e => {
                handleUploadImage(e);
              }}
              id="four"
            />
            <label htmlFor="four" className={classes.label}>
              <Button
                styles={{
                  leftIcon: {
                    margin: 0,
                  },
                }}
                component="span"
                leftIcon={<IconPlus width={18} height={18} />}
                className={classes.button}
              >
                Add
              </Button>
            </label>
          </Card>
          <Card h={170} w={170} className={classes.picCard}>
            <BackgroundImage
              sx={{
                position: 'absolute',
                inset: 0,
              }}
              src={img.fire}
            ></BackgroundImage>
            <Box
              sx={{
                marginTop: 41.5,
                [`@media (max-width:575px)`]: {
                  marginTop: 20.5,
                },
              }}
            >
              <Blink width={phone ? 35 : 60} height={phone ? 35 : 60} />
            </Box>
            <input
              name="fire"
              className={classes.upImg}
              type="file"
              onChange={e => {
                handleUploadImage(e);
              }}
              id="fire"
            />
            <label htmlFor="fire" className={classes.label}>
              <Button
                styles={{
                  leftIcon: {
                    margin: 0,
                  },
                }}
                component="span"
                leftIcon={<IconPlus width={18} height={18} />}
                className={classes.button}
              >
                Add
              </Button>
            </label>
          </Card>
          <Card h={170} w={170} className={classes.picCard}>
            <BackgroundImage
              sx={{
                position: 'absolute',
                inset: 0,
              }}
              src={img.six}
            ></BackgroundImage>
            <Box
              sx={{
                marginTop: 41.5,
                [`@media (max-width:575px)`]: {
                  marginTop: 20.5,
                },
              }}
            >
              <Blink width={phone ? 35 : 60} height={phone ? 35 : 60} />
            </Box>
            <input
              name="six"
              className={classes.upImg}
              type="file"
              onChange={e => {
                handleUploadImage(e);
              }}
              id="six"
            />
            <label htmlFor="six" className={classes.label}>
              <Button
                styles={{
                  leftIcon: {
                    margin: 0,
                  },
                }}
                component="span"
                leftIcon={<IconPlus width={18} height={18} />}
                className={classes.button}
              >
                Add
              </Button>
            </label>
          </Card>
        </Flex>
      </Box>
      <Text
        sx={{
          fontWeight: 400,
          fontSize: 16,
          lineHeight: '20px',
          textAlign: 'center',
          color: '#929292',
        }}
      >
        Upload at least one photo. Hold & drag photos to change the order
      </Text>
      <Box
        sx={{
          height: 223,
          [`@media (max-width:575px)`]: {
            height: 295,
          },
        }}
        className={classes.box}
      >
        <Text className={classes.titleChild}>
          Some photos so we can get to know you.
        </Text>
        <Button
          variant="gradient"
          className={classes.nextBtn}
          onClick={handleCreatePicture}
        >
          <IconChevronRight width={40} height={40} stroke={2.5} />
        </Button>
      </Box>
    </Box>
  );
}
