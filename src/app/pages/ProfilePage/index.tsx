import React from 'react';
import { useMediaQuery } from '@mantine/hooks';
import ProfileWeb from './Web/ProfileWeb';
import ProfileMobile from './Mobile/ProfileMobile';
import { ProfilePageProps } from 'types';

export function ProfilePage({
  children,
  image,
  progress,
  back,
}: ProfilePageProps) {
  const mobile = useMediaQuery('(max-width:575px)');
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
