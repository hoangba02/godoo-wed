import { useMediaQuery } from '@mantine/hooks';
import React, { useEffect, useState } from 'react';
import AboutMobile from './Mobile/AboutMobile';
import AboutWeb from './Web/AboutWeb';

interface Props {
  title?: string;
  children?: JSX.Element | JSX.Element[];
}
function AboutLayout({ title, children }: Props) {
  const [isPhone, setIsPhone] = useState(false);
  const phone = useMediaQuery('(max-width:575px)', !isPhone, {
    getInitialValueInEffect: isPhone,
  });
  console.log(phone);

  useEffect(() => {
    setIsPhone(phone);
  }, [phone]);
  return isPhone ? (
    <AboutMobile title={title}>{children}</AboutMobile>
  ) : (
    <AboutWeb title={title}>{children}</AboutWeb>
  );
}

export default AboutLayout;
