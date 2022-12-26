import { createStyles } from '@mantine/core';

export const DemoStyles = createStyles(() => ({
  container: {
    width: 720,
    height: '100vh',
    padding: 40,
    backgroundColor: 'var(--primary-2)',
  },
  box: {
    width: 570,
    height: 570,
    background: ' var(--white)',
    aspectRatio: '1 / 1',
    position: 'relative',
    zIndex: 99,
    borderRadius: 30,
  },
  picMain: {
    padding: '0 !important',
    borderRadius: 30,
    position: 'relative',
    backgroundColor: 'var(--white-light)',
  },
  picCard: {
    height: '100%',
    width: '100%',
    padding: '0 !important',
    borderRadius: 30,
    position: 'relative',
    backgroundColor: 'var(--white)',
    display: 'flex',
    justifyContent: 'center',
  },
  label: {
    width: '63%',
    position: 'absolute',
    bottom: '6%',
    zIndex: 3,
    display: 'flex',
    justifyContent: 'center',
    [`@media (min-width:1200px) and (max-width:1439px)`]: {
      bottom: '6%',
    },
    [`@media (min-width:992px) and (max-width:1199px)`]: {
      bottom: '6%',
    },
    [`@media (min-width:768px) and (max-width:991px)`]: {
      bottom: '6%',
    },
    [`@media (min-width:576px) and (max-width:767px)`]: {
      bottom: '6%',
    },
    [`@media (max-width:575px)`]: {},
  },
  addBtnSmall: {
    width: '67% !important',
    height: '100% !important',
    color: 'var(--white)',
    padding: 0,
    backgroundColor: '#E46125',
    borderRadius: 34,
    fontWeight: 400,
    lineHeight: '18px',
    '&::before': {
      display: 'none',
    },
    '&:hover': {
      transition: '0.5s',
      backgroundColor: '#E46125 !important',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    [`@media (max-width:575px)`]: {
      height: 30,
      width: 84,
    },
  },

  upImg: {
    display: 'none',
  },
  clearBtn: {
    position: 'absolute',
    right: 14,
    top: 14,
    border: 'none',
    width: 26,
    height: 26,
    cursor: 'pointer',
    backgroundColor: 'transparent',
    transition: 'transform 0.5s ease',
    zIndex: 5,

    '&:active': {
      transform: 'translateY(3px)',
    },
  },
}));
