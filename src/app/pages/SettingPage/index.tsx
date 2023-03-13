import React from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from '@mantine/hooks';

import { SettingPageProps } from 'types';
import { selectIsMobile } from 'store/slice/authSlice/selectors';
import SettingMobile from './Mobile/SettingMobile';
import SettingWeb from './Web/SettingWeb';

export function SettingPage({
  children,
  screen,
  handleClick,
}: SettingPageProps) {
  const isMobile = useSelector(selectIsMobile);
  // Local
  const mobile = useMediaQuery('(max-width:575px)', isMobile, {
    getInitialValueInEffect: !isMobile,
  });
  if (mobile)
    return (
      <SettingMobile screen={screen} handleClick={handleClick}>
        {children}
      </SettingMobile>
    );
  return (
    <SettingWeb screen={screen} handleClick={handleClick}>
      {children}
    </SettingWeb>
  );
}
