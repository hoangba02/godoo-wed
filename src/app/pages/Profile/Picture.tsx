import React, { useEffect, useState } from 'react';
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
  const { counterActions } = CounterSlice();
  const { actions } = UserSlice();
  const [disableBtn, setDisableBtn] = useState(true);
  const [img, setImg] = useState({
    one: '',
    two: '',
    three: '',
    four: '',
    fire: '',
    six: '',
  });
  const phone = useMediaQuery('(max-width:575px)');

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
  useEffect(() => {
    if (img.one !== images.illustrating) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  }, [img]);
  return (
    <Box className={classes.children}>
      <Box className={classes.picContent}>
        <Flex
          sx={{
            height: 370,
            gap: '5%',
            justifyContent: 'space-between',
            [`@media (max-width:575px)`]: {
              gap: 15,
              height: 225,
            },
          }}
        >
          <Card
            sx={{
              minWidth: '65%',
              height: '100%',
              [`@media (min-width:1200px) and (max-width:1439px)`]: {
                height: '100%',
              },
              [`@media (min-width:992px) and (max-width:1199px)`]: {
                height: '100%',
              },
              [`@media (min-width:768px) and (max-width:991px)`]: {
                height: '100%',
                width: 350,
              },
              [`@media (min-width:576px) and (max-width:767px)`]: {
                height: '100%',
              },
              [`@media (max-width:575px)`]: {
                height: '100%',
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
                    width: '233px',
                    height: '38px',
                    [`@media (min-width:768px) and (max-width:991px)`]: {
                      width: '165px',
                      height: '42px',
                    },
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
          <Stack
            sx={{
              minWidth: '30%',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
            }}
          >
            <Card className={classes.picCard}>
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
            <Card className={classes.picCard}>
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
        <Flex
          sx={{
            height: 170,
            gap: 30,
            marginTop: 30,
            justifyContent: 'space-between',
            [`@media (min-width:1200px) and (max-width:1439px)`]: {
              gap: 30,
            },
            [`@media (min-width:992px) and (max-width:1199px)`]: {
              gap: 20,
            },
            [`@media (min-width:768px) and (max-width:991px)`]: {
              gap: 10,
            },
            [`@media (min-width:576px) and (max-width:767px)`]: {
              gap: 10,
              marginTop: 20,
            },
            [`@media (max-width:575px)`]: {
              gap: 0,
              height: 106,
              marginBottom: 20,
            },
          }}
        >
          <Card className={classes.picCard}>
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
          <Card className={classes.picCard}>
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
          <Card className={classes.picCard}>
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
          disabled={disableBtn}
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
