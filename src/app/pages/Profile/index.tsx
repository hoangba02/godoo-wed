import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  BackgroundImage,
  Box,
  Button,
  Card,
  Center,
  Checkbox,
  Container,
  FileInput,
  Flex,
  Image,
  Progress,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core';
import { IconChevronRight, IconAlertCircle, IconCamera } from '@tabler/icons';
import { ProfileStyle } from './ProfileStyles';
import { images } from 'assets/images';
import { useForm } from '@mantine/form';
import UpLoad from 'app/components/UpLoad';
// import { FunctionComponent as LaughPro } from 'assets/icons/laughPro.svg';

const STEPS = [
  {
    id: 1,
    status: true,
    value: 'nickname',
  },
  {
    id: 2,
    value: 'picture',
  },
  {
    id: 3,
    value: 'birthday',
  },
  {
    id: 4,
    value: 'gender',
  },

  {
    id: 5,
    value: 'description',
  },
  {
    id: 6,
    value: 'mode',
  },
  {
    id: 7,
    value: 'tips',
  },
];

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
export function Profile() {
  const { classes } = ProfileStyle();
  const [counter, setCounter] = useState(1);

  const handleNextStep = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <Helmet>
        <title>Profile</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Container className={classes.container}>
        <Card className={classes.wrapper}>
          <BackgroundImage src=""></BackgroundImage>
          <Box className={classes.card}>
            <PicturePro />
            <Button
              variant="gradient"
              className={classes.nextBtn}
              onClick={handleNextStep}
            >
              <IconChevronRight width={40} height={40} stroke={2.5} />
            </Button>
            <Flex className={classes.progress}>
              {STEPS.map((step, index) => {
                return (
                  <Box
                    sx={{
                      backgroundColor:
                        index < counter
                          ? 'var(--primary-4)'
                          : 'var(--white-light)',
                    }}
                    key={index}
                    className={classes.step}
                  ></Box>
                );
              })}
            </Flex>
          </Box>
        </Card>
      </Container>
    </>
  );
}

export function NickNamePro() {
  const { classes } = ProfileStyle();
  const form = useForm({
    initialValues: { nickname: '' },

    validate: {
      nickname: value =>
        value.length < 2 ? 'Name must have at least 2 letters' : null,
    },
  });
  return (
    <Box className={classes.children}>
      <Image
        sx={{
          bottom: 281,
        }}
        className={classes.imgPro}
        src={images.nicknamePro}
        alt="nickname"
      />
      <Box
        sx={{
          height: 283,
        }}
        className={classes.box}
      >
        <Text className={classes.titleChild}>NickName</Text>
        <form onSubmit={form.onSubmit(console.log)}>
          <TextInput
            styles={{
              input: {
                fontSize: 24,
                fontWeight: 500,
                lineHeight: '30px',
                textAlign: 'right',
                borderRadius: 8,
                border: 'none',
              },
            }}
            {...form.getInputProps('nickname')}
          />
        </form>
        <Text className={classes.text}>
          As a GoDooer, you are free to give yourself an interesting name.
        </Text>
      </Box>
    </Box>
  );
}

export function PicturePro() {
  const { classes } = ProfileStyle();

  return (
    <Box className={classes.children}>
      <Box className={classes.picContent}>
        <Flex justify="space-between">
          <UpLoad width={370} height={370} />
          <Stack justify="space-between">
            <UpLoad width={170} height={170} />
            <UpLoad width={170} height={170} />
          </Stack>
        </Flex>
        <Flex mt={30} justify="space-between">
          <UpLoad width={170} height={170} />
          <UpLoad width={170} height={170} />
          <UpLoad width={170} height={170} />
        </Flex>
      </Box>
      <Box
        sx={{
          height: 223,
        }}
        className={classes.box}
      >
        <Text className={classes.titleChild}>
          Some photos so we can get to know you.
        </Text>
      </Box>
    </Box>
  );
}

export function BirthPro() {
  const { classes } = ProfileStyle();
  const form = useForm({
    initialValues: { data: '' },

    validate: {
      data: value =>
        value.length < 2 ? 'Name must have at least 2 letters' : null,
    },
  });
  return (
    <Box className={classes.children}>
      <Image
        sx={{
          top: 0,
        }}
        className={classes.imgPro}
        src={images.birthPro}
        alt="birthPro"
      />
      <Box className={classes.box}>
        <Text className={classes.titleChild}>Your birthday</Text>
        <Text>
          Based on the birthday given, we will find you more suitable friends
        </Text>
        <Text align="center">
          <IconAlertCircle />
          You cannot change this DOB later
        </Text>
        <form onSubmit={form.onSubmit(console.log)}>
          <TextInput
            styles={{
              input: {
                fontSize: 24,
                fontWeight: 500,
                lineHeight: '30px',
                textAlign: 'right',
                borderRadius: 8,
                border: 'none',
              },
            }}
            {...form.getInputProps('date')}
          />
        </form>
        <Text
          sx={{
            fontSize: 20,
            fontWeight: 600,
            lineHeight: '25px',
            marignTop: 13,
            textAlign: 'center',
            color: 'var(--primary-1)',
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

export function GenderPro() {
  const { classes } = ProfileStyle();

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
      <Box className={classes.box}>
        <Text className={classes.titleChild}>Genders</Text>
        <Text
          sx={{
            fontSize: 18,
            textAlign: 'center',
          }}
        >
          Pick maximum 3 genders
        </Text>
        <SimpleGrid cols={2} mt={28}>
          {GENDER.map((gender, index) => {
            return (
              <Button
                key={index}
                sx={{
                  color: 'var(--black)',
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
                }}
                onClick={e => {
                  if (gender.id === index) {
                    e.currentTarget.classList.toggle('active');
                  }
                }}
              >
                {gender.text}
              </Button>
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export function DescPro() {
  const { classes } = ProfileStyle();
  const [couterText, setCouterText] = useState(0);

  return (
    <Box className={classes.children}>
      <Image
        className={classes.imgPro}
        src={images.nicknamePro}
        alt="nickname"
      />
      <Box className={classes.box}>
        <Text className={classes.titleChild}>Description</Text>
        <Text className={classes.text}>
          Anything you wanna say about yourself?
        </Text>
        <Textarea
          styles={{
            input: {
              width: '100%',
              height: '226px !important',
              fontWeight: 400,
              fontSize: 24,
              lineHeight: '30px',
            },
          }}
          maxRows={4}
          maxLength={200}
          onKeyDown={e => {
            console.log(e.key);
            if (e.key.length === 1) {
              setCouterText(couterText + 1);
            } else if (e.key === 'Backspace' || e.key === 'Delete') {
              setCouterText(couterText - 1);
            }
          }}
          placeholder="Say something..."
        />
        <Text
          sx={{
            width: '100%',
            color: '#929292',
            fontWeight: 400,
            fontSize: 16,
            lineHeight: '20px',
          }}
        >
          {`${couterText}`}
          <span>/200 characters</span>
        </Text>
      </Box>
    </Box>
  );
}
export function ModePro() {
  const { classes } = ProfileStyle();

  return (
    <Box className={classes.children}>
      <Image
        className={classes.imgPro}
        src={images.nicknamePro}
        alt="nickname"
      />
      <Box className={classes.box}>
        <Text className={classes.titleChild}>
          What’re you looking for in GoDoo?
        </Text>
        <Stack align="center" mt={28}>
          <Button variant="outline" className={classes.optionBtn}>
            Friends to hangout with
          </Button>
          <Button variant="filled" className={classes.optionBtn}>
            Someone to date
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
export function TipsPro() {
  const { classes } = ProfileStyle();

  return (
    <Box className={classes.children}>
      <Image
        className={classes.imgPro}
        src={images.nicknamePro}
        alt="nickname"
      />
      <Box className={classes.box}>
        <Text className={classes.titleChild}>
          What’re you looking for in GoDoo?
        </Text>
        <Stack
          sx={{
            alignItems: 'center',
          }}
        >
          <Button variant="outline" className={classes.optionBtn}>
            Friends to hangout with
          </Button>
          <Button variant="default" className={classes.optionBtn}>
            Someone to date
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
