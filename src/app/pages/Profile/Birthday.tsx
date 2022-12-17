import React, { useState } from 'react';
import { useForm } from '@mantine/form';
import { IconAlertCircle, IconChevronRight } from '@tabler/icons';
import { Box, Button, Center, Checkbox, Image, Text } from '@mantine/core';

import { images } from 'assets/images';
import { DatePicker } from '@mantine/dates';
import { ProfileStyle } from './ProfileStyles';
import { ReactComponent as DateBirth } from 'assets/icons/dateBirth.svg';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { CounterSlice } from 'store/slice/counterSlice';
import { UserSlice } from 'store/slice/userSlice';
import { useMediaQuery } from '@mantine/hooks';

export default function Birth() {
  const { classes } = ProfileStyle();
  const { t } = useTranslation();
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const { counterActions } = CounterSlice();
  const { actions } = UserSlice();
  const phone = useMediaQuery('(max-width:575px)');
  const form = useForm({
    initialValues: { date: '' },
  });
  const handleCreateBirthDay = () => {
    let currentYear = new Date().getFullYear();
    let birthYear = Number(new Date(form.values.date).getFullYear());
    let age = currentYear - birthYear;
    if (!form.values.date) {
      setError(true);
    } else if (age < 15) {
      form.setErrors({
        date: t(
          'Profile.error.You have to be 15 years old or over to experience our App',
        ),
      });
    } else {
      dispatch(
        actions.createProfile({
          data_of_birth: new Date(form.values.date),
        }),
      );
      dispatch(counterActions.increase());
    }
    // console.log(form.values.date.getFullYear());
  };
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
            height: 552,
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
          <DatePicker
            styles={{
              input: {
                fontSize: 24,
                fontWeight: 500,
                lineHeight: '30px',
                textAlign: 'right',
                borderRadius: 8,
                border: error ? '1px solid var(--red)' : 'none',
              },
            }}
            error={form.errors.date}
            clearable={false}
            dropdownPosition="bottom-end"
            inputFormat="MM/DD/YYYY"
            placeholder="MM/DD/YYYY"
            {...form.getInputProps('date')}
          />
          <DateBirth className={classes.birthIcon} />
          <Button type="submit" variant="gradient" className={classes.nextBtn}>
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
            },
          }}
        >
          Oh! You are a lovely Libra
        </Text>
        <Center mt={10}>
          <Image width={180} height={180} src={images.libra} />
        </Center>
        <Checkbox
          mt={68}
          styles={{
            label: {
              fontSize: 16,
              fontWeight: 500,
              lineHeight: '20px',
            },
          }}
          color="orange.7"
          label="Show this zodiac on my profile"
        />
      </Box>
    </Box>
  );
}
