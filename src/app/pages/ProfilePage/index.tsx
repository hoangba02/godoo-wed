import React from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from '@mantine/hooks';

import { ProfilePageProps } from 'types';
import ProfileWeb from './Web/ProfileWeb';
import ProfileMobile from './Mobile/ProfileMobile';
import { selectIsMobile } from 'store/slice/authSlice/selectors';

export function ProfilePage({
  children,
  image,
  progress,
  back,
}: ProfilePageProps) {
  const isMobile = useSelector(selectIsMobile);
  // Local
  const mobile = useMediaQuery('(max-width:575px)', isMobile, {
    getInitialValueInEffect: !isMobile,
  });
  if (mobile)
    return (
      <ProfileMobile image={image} progress={progress} back={back}>
        {children}
      </ProfileMobile>
    );
  return (
    <ProfileWeb image={image} progress={progress} back={back}>
      {children}
    </ProfileWeb>
  );
}
