import React, { useEffect, useState } from 'react';
import { Box, Button, Checkbox, SimpleGrid, Text } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons';
import { useDispatch, useSelector } from 'react-redux';

import { images } from 'assets/images';
import { ProfileStyle } from './ProfileStyles';
import { CounterSlice } from 'store/slice/counterSlice';
import { getProfileSelector } from 'store/slice/profileSlice/selectors';
import { ProfileSlice } from 'store/slice/profileSlice';

const GENDER = [
  {
    id: 0,
    text: 'Women',
    color: '#FFA800',
    background: '#FFEBC4',
  },
  {
    id: 1,
    text: 'Men',
    color: '#36CA68',
    background: '#DBFFDA',
  },
  {
    id: 2,
    text: 'Transgender',
    color: '#25B7EF',
    background: '#D0F2FF',
  },
  {
    id: 3,
    text: 'Asexual',
    color: '#820080',
    background: '#FFE3FF',
  },
  {
    id: 4,
    text: 'Nonbinary',
    color: '#C03AFF',
    background: '#EEE1FF',
  },
  {
    id: 5,
    text: 'Bisexual',
    color: '#0038A8',
    background: '#D6E3FF',
  },
  {
    id: 6,
    text: 'Gay',
    color: '#8D5959',
    background: '#EDE0E0',
  },
  {
    id: 7,
    text: 'Lesbian',
    color: '#EF7627',
    background: '#FFE5D3',
  },
  {
    id: 8,
    text: 'Others',
    color: '#000000',
    background:
      'linear-gradient(90deg, #E46125 -0.01%, #C91A44 50%, #A12FA3 100%)',
  },
];
export default function Gender() {
  const { counterActions } = CounterSlice();
  const { profileActions } = ProfileSlice();
  const profile = useSelector(getProfileSelector);

  const [disableBtn, setDisabel] = useState(true);
  // Local
  const { classes } = ProfileStyle();
  const [sex, setSex] = useState<string[]>(profile.zodiac);
  const dispatch = useDispatch();

  const handleCreateGender = () => {
    dispatch(counterActions.increase());
    dispatch(
      profileActions.createProfile({
        nickname: profile.nickname,
        picture: profile.picture,
        data_of_birth: profile.data_of_birth,
        zodiac: sex,
        introduction: profile.introduction,
        relationship: profile.relationship,
      }),
    );
  };
  useEffect(() => {
    console.log(sex);
    if (sex.length > 2 || sex.length < 1) {
      setDisabel(true);
    } else {
      setDisabel(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sex]);
  return (
    <Box sx={{ height: 476 }} className={classes.children}>
      <Box
        sx={{
          width: '100%',
          position: 'relative',
          height: 335,
          [`@media (min-width:768px) and (max-width:991px)`]: {
            height: 236,
          },
          [`@media (min-width:576px) and (max-width:767px)`]: {
            height: 236,
          },
          [`@media (max-width:575px)`]: {
            height: 260,
          },
          [`@media (max-width:376px)`]: {
            height: 236,
          },
        }}
      >
        <img
          src={images.genderPro}
          className={classes.imgGender}
          alt="gender"
        />
      </Box>
      <Box
        sx={{
          [`@media (min-width:768px) and (max-width:991px)`]: {
            height: '70%',
          },
          [`@media (min-width:576px) and (max-width:767px)`]: {
            height: '70%',
          },
          [`@media (max-width:575px)`]: {
            height: '70%',
          },
        }}
        className={classes.box}
      >
        <Text className={classes.titleChild}>Genders</Text>
        <Text
          sx={{
            fontSize: 18,
            textAlign: 'center',
          }}
        >
          Pick maximum 2 genders
        </Text>
        <SimpleGrid
          cols={2}
          sx={{
            gap: '8.5px 25px',
            marginTop: 28,
            justifyItems: 'center',
            [`@media (max-width:376px)`]: {
              marginTop: 14,
              gap: '10px 16px',
            },
          }}
        >
          {GENDER.map((gender, index) => {
            return (
              <Button
                className={profile.zodiac.includes(gender.text) ? 'active' : ''}
                key={index}
                sx={{
                  height: 52,
                  width: 'calc(200% + 25px) !important',
                  maxWidth:
                    gender.text === 'Others' ? 'calc(200% + 25px)' : '100%',
                  color: gender.color,
                  backgroundColor: 'var(--white-light)',
                  borderRadius: 200,
                  border: `1px solid var(--white)`,
                  transform:
                    gender.text === 'Others'
                      ? 'translateX(26%)'
                      : 'translateX(0)',
                  '&::before': {
                    display: 'none',
                  },
                  '&:hover': {
                    backgroundColor: 'var(--white-light)',
                  },
                  '&.active': {
                    color: gender.color,
                    backgroundColor: gender.background,
                    border: `1px solid ${gender.color}`,
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  },

                  [`@media (max-width:376px)`]: {
                    height: 42,
                  },
                }}
                onClick={e => {
                  if (gender.id === index) {
                    let boolean = sex.find(value => {
                      return value === gender.text;
                    });
                    if (boolean) {
                      e.currentTarget.classList.remove('active');
                      setSex(
                        sex.filter(value => {
                          return value !== boolean;
                        }),
                      );
                    } else {
                      e.currentTarget.classList.add('active');
                      setSex([...sex, gender.text]);
                    }
                  }
                }}
              >
                {gender.text}
              </Button>
            );
          })}
        </SimpleGrid>
        <Checkbox
          defaultChecked={true}
          sx={{
            position: 'absolute',
            bottom: '5%',
            left: 16,
            zIndex: 2,
            [`@media (max-width:575px)`]: {
              bottom: '10%',
            },
          }}
          styles={{
            label: {
              fontSize: 16,
              fontWeight: 500,
              lineHeight: '20px',
            },
          }}
          color="orange.7"
          label="Show on my profile"
        />
        <Button
          disabled={disableBtn}
          onClick={() => handleCreateGender()}
          variant="gradient"
          className={classes.nextBtn}
        >
          <IconChevronRight width={40} height={40} stroke={2.5} />
        </Button>
      </Box>
    </Box>
  );
}
