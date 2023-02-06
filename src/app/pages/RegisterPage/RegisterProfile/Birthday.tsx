import React, { useEffect, useState } from 'react';
import { useForm } from '@mantine/form';
import { useMediaQuery } from '@mantine/hooks';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { IconChevronRight } from '@tabler/icons';
import { Box, Button, Center, Checkbox, Image, Text } from '@mantine/core';

import { images } from 'assets/images';
import { DatePicker } from '@mantine/dates';
import { CreateProfileStyles } from '../../../components/Layout/CreateProfile/CreateProfileStyles';
import { Zodiac } from 'app/components/Zodiac/Zodiac';
import { CounterSlice } from 'store/slice/counterSlice';
import { ReactComponent as DateBirth } from 'assets/icons/dateBirth.svg';
import {
  getProfileSelector,
  getUserSelector,
} from 'store/slice/userSlice/selectors';
import { UserSlice } from 'store/slice/userSlice';
import { useNavigate } from 'react-router-dom';
import { ProfileLayout } from 'app/components/Layout/CreateProfile/CreateProfile';

const ADJ = ['lovely', 'cute', 'mischievious', 'bonny', 'affable'];
export default function Birth() {
  // Global
  const dispatch = useDispatch();
  const { counterActions } = CounterSlice();
  const { actions } = UserSlice();
  const profile = useSelector(getProfileSelector);
  const user = useSelector(getUserSelector);
  // Local
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { classes } = CreateProfileStyles();
  const [age, setAge] = useState(false);
  const [adj, setAdj] = useState(ADJ[0]);
  const [error, setError] = useState(false);
  const [disableBtn, setDisableBtn] = useState(true);
  const phone = useMediaQuery('(max-width:575px)');

  console.log(
    profile.date_of_birth.slice(0, 2),
    profile.date_of_birth.slice(3, 5),
    profile.date_of_birth.slice(6),
  );
  const form = useForm({
    initialValues: {
      date:
        profile.date_of_birth === ''
          ? new Date()
          : new Date(
              profile.date_of_birth.slice(6),
              profile.date_of_birth.slice(3, 5) - 1,
              profile.date_of_birth.slice(0, 2),
            ),
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
      let day =
        new Date(form.values.date).getDate() < 10
          ? `0${new Date(form.values.date).getDate()}`
          : new Date(form.values.date).getDate();
      let month =
        new Date(form.values.date).getMonth() < 10
          ? `0${new Date(form.values.date).getMonth()}`
          : new Date(form.values.date).getMonth();
      let year = new Date(form.values.date).getFullYear();
      dispatch(
        actions.requestProfile({
          id: user.id,
          isLogin: false,
          token: user.token,
          profile: {
            nickname: profile.nickname,
            picture: profile.picture,
            date_of_birth: `${day}/${month}/${year}`,
            gender: profile.gender,
            zodiac: Zodiac(form.values.date)?.name,
            introduction: profile.introduction,
            relationship: profile.relationship,
          },
        }),
      );
      dispatch(counterActions.increase());
      // navigate('/register/gender');
    }
  };
  useEffect(() => {
    if (form.values.date) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
    setAdj(ADJ[Math.floor(Math.random() * 5)]);
  }, [form.values.date]);
  return (
    <ProfileLayout>
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
          <Text className={classes.titleChild}>Your birthday</Text>
          <Text className={classes.text}>
            {t(
              'Profile.text.Based on the birthday given, we will find you more suitable friends',
            )}
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
                    fontSize: 24,
                    fontWeight: 500,
                    lineHeight: '30px',
                    textAlign: 'right',
                    borderRadius: 8,
                    border: error ? '1px solid var(--red)' : 'none',
                    backgroundColor: 'transparent',
                  },
                }}
                // value={birth}
                clearable={false}
                dropdownPosition={phone ? 'top-end' : 'bottom-end'}
                inputFormat="DD/MM/YYYY"
                placeholder="DD/MM/YYYY"
                {...form.getInputProps('date')}
                onFocus={() => {
                  setAge(false);
                }}
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
                  marginTop: 4,
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
            {`Oh! You are a ${adj} ${Zodiac(form.values.date)?.name}`}
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
                paddingLeft: 2,
                [`@media (max-width:575px)`]: {
                  fontSize: 14,
                  lineHeight: '17.5px',
                },
              },
            }}
            defaultChecked={true}
            color="orange.7"
            label={t('Profile.text.Show this zodiac on my profile')}
          />
        </Box>
      </Box>
    </ProfileLayout>
  );
}
