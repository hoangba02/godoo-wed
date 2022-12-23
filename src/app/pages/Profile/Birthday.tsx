import React, { useEffect, useState } from 'react';
import { useForm } from '@mantine/form';
import { useMediaQuery } from '@mantine/hooks';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { IconAlertCircle, IconChevronRight } from '@tabler/icons';
import { Box, Button, Center, Checkbox, Image, Text } from '@mantine/core';

import { images } from 'assets/images';
import { DatePicker } from '@mantine/dates';
import { ProfileStyle } from './ProfileStyles';
import { Zodiac } from 'app/components/Zodiac';
import { UserSlice } from 'store/slice/userSlice';
import { CounterSlice } from 'store/slice/counterSlice';
import { getUserSelector } from 'store/slice/userSlice/selectors';
import { ReactComponent as DateBirth } from 'assets/icons/dateBirth.svg';

export default function Birth() {
  const { classes } = ProfileStyle();
  const { t } = useTranslation();
  const [disableBtn, setDisableBtn] = useState(true);
  const [error, setError] = useState(false);
  const [age, setAge] = useState(false);

  const dispatch = useDispatch();
  const { counterActions } = CounterSlice();
  const { actions } = UserSlice();
  const user = useSelector(getUserSelector);
  const phone = useMediaQuery('(max-width:575px)');

  const form = useForm({
    initialValues: {
      date: user.data_of_birth,
    },
  });
  const handleCreateBirthDay = () => {
    let currentYear = new Date().getFullYear();
    let birthYear = Number(new Date(form.values.date).getFullYear());
    let age = currentYear - birthYear;
    if (!form.values.date) {
      setError(true);
    } else if (age < 15) {
      setAge(true);
    } else {
      let day = new Date(form.values.date).getDate();
      let month = new Date(form.values.date).getMonth();
      let year = new Date(form.values.date).getFullYear();
      dispatch(
        actions.createProfile({
          profile: {
            nickname: user.nickname,
            picture: user.picture,
            data_of_birth: new Date(year, month, day),
            zodiac: user.zodiac,
            introduction: user.introduction,
            relationship: user.relationship,
          },
        }),
      );
      dispatch(counterActions.increase());
    }
  };
  useEffect(() => {
    if (form.values.date) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  }, [form.values.date]);
  return (
    <Box className={classes.children}>
      <Image
        sx={{
          top: 0,
          [`@media (max-width:575px)`]: {
            // top: ,
          },
        }}
        className={classes.imgPro}
        src={phone ? images.birthProMobile : images.birthPro}
        alt="birthPro"
      />
      <Box
        sx={{
          [`@media (max-width:575px)`]: {
            height: 484,
          },
        }}
        className={classes.box}
      >
        <Text className={classes.titleChild}>Your birthday</Text>
        <Text className={classes.text}>
          Based on the birthday given, we will find you more suitable friends
        </Text>
        <Text
          sx={{
            color: '#929292',
            fontSize: 14,
            marginTop: 15,
            [`@media (max-width:575px)`]: {
              fontSize: 12,
            },
          }}
          align="center"
        >
          <IconAlertCircle />
          You cannot change this DOB later
        </Text>
        <form onSubmit={form.onSubmit(handleCreateBirthDay)}>
          <Box
            sx={{
              position: 'relative',
              borderRadius: 8,
              backgroundColor: 'var(--white)',
            }}
          >
            <DatePicker
              styles={{
                input: {
                  position: 'relative',
                  fontSize: 24,
                  fontWeight: 500,
                  lineHeight: '30px',
                  textAlign: 'right',
                  borderRadius: 8,
                  border: error ? '1px solid var(--red)' : 'none',
                  backgroundColor: 'transparent',
                  zIndex: 3,
                },
              }}
              // size="sx"
              clearable={false}
              dropdownPosition={phone ? 'top-end' : 'bottom-end'}
              inputFormat="DD/MM/YYYY"
              placeholder="DD/MM/YYYY"
              {...form.getInputProps('date')}
            />
            <DateBirth className={classes.birthIcon} />
          </Box>
          {age && (
            <Text
              sx={{
                textAlign: 'center',
                color: 'var(--red)',
                fontSize: 14,
                fontWeight: 400,
                [`@media (max-width:575px)`]: {
                  fontSize: 10,
                },
              }}
            >
              {t(
                'Profile.error.You have to be 15 years old or over to experience our App',
              )}
            </Text>
          )}
          <Button
            disabled={disableBtn}
            type="submit"
            variant="gradient"
            className={classes.nextBtn}
          >
            <IconChevronRight width={40} height={40} stroke={2.5} />
          </Button>
        </form>
        <Text
          sx={{
            fontSize: 20,
            fontWeight: 600,
            lineHeight: '25px',
            marginTop: 12,
            textAlign: 'center',
            color: 'var(--primary-1)',
            [`@media (max-width:575px)`]: {
              fontSize: 18,
              marginTop: 0,
            },
          }}
        >
          {`Oh! You are a lovely ${Zodiac(form.values.date)?.name}`}
        </Text>
        <Center mt={10}>
          <Image
            width={180}
            height={180}
            src={Zodiac(form.values.date)?.zodiac}
          />
        </Center>
        <Checkbox
          sx={{
            position: 'absolute',
            bottom: 30,
            zIndex: 4,
          }}
          styles={{
            label: {
              fontSize: 16,
              fontWeight: 500,
              lineHeight: '20px',
              paddingLeft: 4,
              [`@media (max-width:575px)`]: {
                fontSize: 14,
                lineHeight: '17.5px',
              },
            },
          }}
          defaultChecked={true}
          color="orange.7"
          label="Show this zodiac on my profile"
        />
      </Box>
    </Box>
  );
}
