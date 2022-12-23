import React, { useEffect, useState } from 'react';
import {
  BackgroundImage,
  Box,
  Button,
  Card,
  clsx,
  Flex,
  Stack,
  Text,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { IconCamera, IconPlus, IconChevronRight } from '@tabler/icons';

import UpLoad from 'app/components/UpLoad';
import { ProfileStyle } from './ProfileStyles';
import { UserSlice } from 'store/slice/userSlice';
import { CounterSlice } from 'store/slice/counterSlice';
import { ReactComponent as Clear } from 'assets/icons/clear.svg';
import { ReactComponent as Blink } from 'assets/icons/blink.svg';
import { getUserSelector } from 'store/slice/userSlice/selectors';

export default function Picture() {
  // Global
  const dispatch = useDispatch();
  const { counterActions } = CounterSlice();
  const { actions } = UserSlice();
  const phone = useMediaQuery('(max-width:575px)');
  const user = useSelector(getUserSelector);
  // Local
  const { classes } = ProfileStyle();
  const [img, setImg] = useState({
    one: user.picture[0],
    two: user.picture[1],
    three: user.picture[2],
    four: user.picture[3],
    fire: user.picture[4],
    six: user.picture[5],
  });
  const [disableBtn, setDisableBtn] = useState(true);
  console.log(img);

  const handleUploadImage = e => {
    console.log(1);
    console.log(img);
    setImg({ ...img, [e.target.name]: URL.createObjectURL(e.target.files[0]) });
  };
  const handleCreatePicture = () => {
    dispatch(counterActions.increase());
    dispatch(
      actions.createProfile({
        profile: {
          nickname: user.nickname,
          picture: [img.one, img.two, img.three, img.four, img.fire, img.six],
          data_of_birth: user.data_of_birth,
          zodiac: user.zodiac,
          introduction: user.introduction,
          relationship: user.relationship,
        },
      }),
    );
  };
  useEffect(() => {
    if (img.one) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
    return () => {
      console.log('clear');
      URL.revokeObjectURL(img.one);
    };
  }, [img]);
  return (
    <Box className={classes.children}>
      <Box className={classes.picContent}>
        <Flex
          sx={{
            maxHeight: 370,
            height: '70%',
            gap: '5%',
            justifyContent: 'space-between',
            [`@media (min-width:1200px) and (max-width:1439px)`]: {
              height: 370,
            },
            [`@media (min-width:992px) and (max-width:1199px)`]: {
              height: 350,
            },
            [`@media (min-width:768px) and (max-width:991px)`]: {
              height: 350,
            },
            [`@media (min-width:576px) and (max-width:767px)`]: {
              height: 295,
            },
            [`@media (max-width:575px)`]: {
              gap: 15,
              height: 225,
            },
          }}
        >
          <Box
            sx={{
              minWidth: '65%',
              height: '100%',
            }}
          >
            <Card className={classes.picCard}>
              {img.one && (
                <button
                  className={classes.clearBtn}
                  onClick={e => {
                    // URL.revokeObjectURL(img.one);
                    setImg({ ...img, one: URL.revokeObjectURL(img.one) });
                  }}
                >
                  <Clear />
                </button>
              )}
              <BackgroundImage
                sx={{
                  position: 'absolute',
                  inset: 0,
                }}
                src={user.picture[0] || img.one}
              ></BackgroundImage>
              <Box
                sx={{
                  marginTop: 91.5,
                  [`@media (max-width:575px)`]: {
                    marginTop: 40.5,
                  },
                }}
              >
                <Blink width={phone ? 90 : 134} height={phone ? 90 : 134} />
              </Box>
              <input
                name="one"
                className={classes.upImg}
                type="file"
                accept="image/*"
                onChange={e => {
                  handleUploadImage(e);
                }}
                id="0"
              />
              <label htmlFor="0" className={classes.label}>
                {img.one || user.picture[0] ? (
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
                ) : (
                  <Button
                    styles={{
                      leftIcon: {
                        margin: 0,
                      },
                    }}
                    component="span"
                    leftIcon={<IconPlus width={29} height={29} />}
                    className={clsx(classes.addBtnSmall, classes.addBtnBig)}
                  >
                    Add
                  </Button>
                )}
              </label>
            </Card>
          </Box>
          <Stack
            sx={{
              gap: 30,
              minWidth: '30%',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
            }}
          >
            <UpLoad
              link={img.two}
              id="1"
              name="two"
              setImg={setImg}
              img={img}
            />
            <UpLoad
              link={img.three}
              id="2"
              name="three"
              setImg={setImg}
              img={img}
            />
          </Stack>
        </Flex>
        <Flex
          sx={{
            height: 170,
            gap: 30,
            marginTop: 25,
            justifyContent: 'space-between',
            [`@media (min-width:1200px) and (max-width:1439px)`]: {
              gap: 30,
            },
            [`@media (min-width:992px) and (max-width:1199px)`]: {
              gap: 20,
              height: 160,
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
          <UpLoad
            link={img.four}
            id="3"
            name="four"
            setImg={setImg}
            img={img}
          />
          <UpLoad
            link={img.fire}
            id="4"
            name="fire"
            setImg={setImg}
            img={img}
          />
          <UpLoad link={img.six} id="5" name="six" setImg={setImg} img={img} />
        </Flex>
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
      </Box>

      <Box
        sx={{
          maxHeight: '25%',
          [`@media (max-width:575px)`]: {
            height: 295,
          },
          [`@media (max-width:376px)`]: {
            height: '40%',
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
