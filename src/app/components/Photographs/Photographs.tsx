import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Container,
  createStyles,
  Text,
} from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Plus } from 'assets/icons/plus.svg';
import { images } from 'assets/images';

function Photographs() {
  const { t } = useTranslation();
  const { cx, classes } = makeStyles();
  return (
    <Container
      fluid
      sx={{
        padding: 0,
      }}
    >
      <div className={classes.container}>
        {Array.from({ length: 6 }).map((item, index) => (
          <Box className={cx(classes.item, index === 0 ? classes.first : null)}>
            <Avatar
              src={index === 0 ? images.slimeBig : images.slime}
              className={classes.img}
            />
            <Button
              className={cx(
                classes.addBtn,
                index === 0 ? classes.addFirst : null,
              )}
            >
              <Plus />
              {t('Profile.Add')}
            </Button>
          </Box>
        ))}
      </div>
      <Text className={classes.tutorial}>
        {t(
          'Profile.Upload at least one photo. Hold & drag photos to change the order.',
        )}
      </Text>
    </Container>
  );
}

export default Photographs;

const makeStyles = createStyles(() => ({
  container: {
    gap: '5%',
    width: '100%',
    maxWidth: 570,
    maxHeight: 570,
    display: 'grid',
    marginTop: 24,
    gridTemplateColumns: '30% 30% 30%',
    gridTemplateRows: '30% 30% 30%',
    aspectRatio: '1',

    after: {
      content: '""',
      display: 'block',
      clear: 'both',
    },
    '@media (max-width:575px)': {
      maxWidth: '100%',
    },
  },
  item: {
    width: '100%',
    height: '100%',
    maxWidth: 170,
    background: '#FFFFFF',
    borderRadius: 30,
    aspectRatio: '1',
    position: 'relative',
    '@media (max-width:575px)': {
      maxWidth: 106,
    },
  },
  first: {
    // width: 370,
    maxWidth: 370,
    gridColumn: '1/3',
    gridRow: '1/3',
    aspectRatio: '1/1',
    '@media (max-width:575px)': {
      width: '100%',
      maxWidth: 225,
    },
  },
  tutorial: {
    width: 370,
    fontWeight: 400,
    fontSize: 16,
    lineHeight: '20px',
    color: '#929292',
    marginTop: 12,
    '@media (max-width:575px)': {
      width: '70%',
    },
  },

  img: {
    width: '100%',
    height: '100%',
  },
  addBtn: {
    width: 84,
    height: 26,
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '18px',
    background: '#E46125',
    borderRadius: 30,
    position: 'absolute',
    bottom: '8%',
    left: '50%',
    transform: 'translateX(-50%)',
    ':active': {
      transform: 'translateX(-50%)',
    },
    ':hover': {
      background: '#E46125',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    '@media (max-width:575px)': {
      width: 66,
      height: 20,
      fontSize: 10,
    },
  },
  addFirst: {
    width: 156,
    height: 56,
    fontWeight: 400,
    fontSize: 32,
    lineHeight: '40px',
    '@media (max-width:575px)': {
      width: 120,
      height: 38,
      fontWeight: 400,
      fontSize: 24,
      lineHeight: '40px',
    },
  },
}));
