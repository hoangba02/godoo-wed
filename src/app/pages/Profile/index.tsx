import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { BackgroundImage, Box, Button, Container } from '@mantine/core';
import { ProfileStyle } from './ProfileStyles';

const STEP = [
  {
    id: 1,
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
export function Profile() {
  const { classes } = ProfileStyle();
  return (
    <>
      <Helmet>
        <title>Profile</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Container>
        <Box>
          <BackgroundImage src=""></BackgroundImage>
        </Box>
      </Container>
    </>
  );
}

export function NickNamePro() {
  const { classes } = ProfileStyle();

  return <></>;
}

export function PicturePro() {
  const { classes } = ProfileStyle();

  return <></>;
}

export function BirthPro() {
  const { classes } = ProfileStyle();

  return <></>;
}

export function GenderPro() {
  const { classes } = ProfileStyle();

  return <></>;
}

export function DescPro() {
  const { classes } = ProfileStyle();

  return <></>;
}
export function TipsPro() {
  const { classes } = ProfileStyle();

  return <></>;
}
