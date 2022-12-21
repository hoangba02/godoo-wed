import React, { useEffect, useState } from 'react';
import {
  BackgroundImage,
  Box,
  Button,
  Checkbox,
  SimpleGrid,
  Text,
} from '@mantine/core';
import { useDispatch } from 'react-redux';
import { IconChevronRight } from '@tabler/icons';
import { ProfileStyle } from './ProfileStyles';
import { images } from 'assets/images';
import { CounterSlice } from 'store/slice/counterSlice';
import { UserSlice } from 'store/slice/userSlice';

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
];
export default function Gender() {
  const { classes } = ProfileStyle();
  const [sex, setSex] = useState<string[]>([]);
  const dispatch = useDispatch();
  const { counterActions } = CounterSlice();
  const { actions } = UserSlice();
  const [disableBtn, setDisabel] = useState(true);

  const handleCreateGender = () => {
    dispatch(counterActions.increase());
    dispatch(
      actions.createProfile({
        zodiac: sex,
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
  }, [sex.length]);
  return (
    <Box sx={{ height: 476 }} className={classes.children}>
      <Box
        sx={{
          width: '84%',
          height: 335,
          position: 'relative',
          left: '50%',
          bottom: -20,
          transform: 'translateX(-50%)',
          [`@media (max-width:575px)`]: {
            width: '100%',
            bottom: '-10%',
          },
        }}
      >
        <BackgroundImage
          sx={{
            position: 'absolute',
            inset: 0,
          }}
          src={images.genderPro}
        ></BackgroundImage>
      </Box>
      <Box
        sx={{
          [`@media (max-width:575px)`]: {
            height: '60%',
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
          mt={28}
          sx={{
            justifyItems: 'center',
          }}
        >
          {GENDER.map((gender, index) => {
            return (
              <Button
                key={index}
                sx={{
                  color: gender.color,
                  backgroundColor: 'var(--white-light)',
                  borderRadius: 200,
                  border: `1px solid var(--white)`,

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

                  [`@media (max-width:575px)`]: {
                    width: 159,
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
            marginTop: 68,
            [`@media (max-width:575px)`]: {
              position: 'absolute',
              bottom: '10%',
              left: 16,
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
