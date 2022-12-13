import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons';
import React, { useEffect, useState } from 'react';
import { Group, Avatar, Text, Select, createStyles, Flex } from '@mantine/core';

import { images } from 'assets/images';

const data = [
  {
    image: images.vi,
    label: 'VIE',
    value: 'vi',
  },

  {
    image: images.en,
    label: 'ENG',
    value: 'en',
    description: 'One of the richest people on Earth',
  },
];
interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
  image: string;
  label: string;
  description: string;
}

const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ image, label, description, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap align="center" spacing={0}>
        <Avatar
          src={image}
          styles={{
            root: {
              height: 'max-content',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            },
            image: {
              width: 22.5,
              height: 22.5,
            },
          }}
        />
        <div>
          <Text size="sm">{label}</Text>
        </div>
      </Group>
    </div>
  ),
);
export default function Languages() {
  const { classes } = useStyles();
  const [t, i18n] = useTranslation();
  const phone = useMediaQuery('(max-width:575px)');
  const [lang, setLang] = useState<string | null>('vi');

  console.log(lang);
  useEffect(() => {
    i18n.changeLanguage(`${lang}`);
  }, [lang]);
  return (
    <Flex className={classes.wrapper}>
      <img
        className={classes.img}
        src={lang === 'vi' ? images.vi : images.en}
        alt="lang"
      />
      <Select
        styles={{
          input: {
            height: 38,
            width: 132,
            margin: 0,
            padding: '4px 16px 4px 42px',
            fontSize: 18,
            fontWeight: 600,
            lineHeight: '22px',
            border: 'none',
            outline: 'none',
            backgroundColor: 'transparent',
            position: 'relative',
            zIndex: 2,
            '&:focus': {
              border: 'none',
            },
            [`@media (max-width:575px)`]: {
              height: 28,
              width: 88,
              fontSize: 14,
              fontWeight: 600,
              lineHeight: '18px',
              padding: '4px 16px 4px 32px',
            },
          },
          rightSection: {
            position: 'absolute',
            right: 10,
            zIndex: -1,
            [`@media (max-width:575px)`]: {
              right: -6,
            },
          },
          item: {
            padding: '6px 0',
          },
        }}
        onChange={value => setLang(value)}
        itemComponent={SelectItem}
        data={data}
        maxDropdownHeight={400}
        defaultValue={'vi'}
        rightSection={
          <IconChevronDown width={phone ? 30 : 50} height={phone ? 20 : 30} />
        }
      />
    </Flex>
  );
}

const useStyles = createStyles(() => ({
  wrapper: {
    width: 132,
    borderRadius: '8px',
    alignItems: 'center',
    backgroundColor: 'var(--white)',
    position: 'absolute',
    top: '9.38%',
    right: '18.54%',
    zIndex: 2,
    [`@media (min-width:1200px) and (max-width:1439px)`]: {
      top: ' 5.5%',
      right: '10.27%',
      width: 132,
    },
    [`@media (min-width:992px) and (max-width:1199px)`]: {
      top: ' 4.06%',
      right: '10.27%',
      width: 132,
    },
    [`@media (min-width:768px) and (max-width:991px)`]: {
      top: ' 1.06%',
      right: '10.27%',
      width: 132,
    },
    [`@media (min-width:576px) and (max-width:767px)`]: {},
    [`@media (max-width:575px)`]: {
      top: ' 4.06%',
      right: '4.27%',
      width: 84,
    },
  },
  img: {
    width: 22.5,
    height: 22.5,
    borderRadius: '50%',
    position: 'absolute',
    left: 5,
    zIndex: 2,
  },
  button: {
    background: 'var(--white)',
    borderRadius: '27px',
    color: 'var(--black)',
    height: '32px',
  },
}));
