import { useMediaQuery } from '@mantine/hooks';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getUserSelector } from 'store/slice/userSlice/selectors';
import AboutMobile from './Mobile/AboutMobile';
import AboutWeb from './Web/AboutWeb';

interface Props {
  title?: string;
  children?: JSX.Element | JSX.Element[];
}
export function AboutPage({ title, children }: Props) {
  // Global
  const user = useSelector(getUserSelector);
  // Local
  const phone = useMediaQuery('(max-width:575px)', user.device, {
    getInitialValueInEffect: !user.device,
  });

  return phone ? (
    <AboutMobile title={title}>{children}</AboutMobile>
  ) : (
    <AboutWeb title={title}>{children}</AboutWeb>
  );
}
