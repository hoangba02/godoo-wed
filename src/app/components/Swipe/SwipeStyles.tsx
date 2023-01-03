import { createStyles } from '@mantine/core';

export const SwipeStyles = createStyles(() => ({
  container: {
    position: 'relative',
    width: 470,
    padding: '0 15px',
    margin: 0,
    transitionProperty: 'all',
    transitionDuration: '10ms',
    aspectRatio: '0.67',
    [`@media (min-width:1200px) and (max-width:1439px)`]: {},
    [`@media (min-width:992px) and (max-width:1199px)`]: {},
    [`@media (min-width:768px) and (max-width:991px)`]: {},
    [`@media (max-width:799px)`]: {
      width: '70%',
      margin: '24px auto 0',
    },
    [`@media (max-width:575px)`]: {
      width: '100%',
      margin: 0,
    },
  },
  nav: {
    width: '100%',
    height: 48,
    padding: '8px 0 16px',
    alignItems: 'center',
    justifyContent: 'space-between',
    [`@media (max-width:575px)`]: {
      padding: '8px 0',
    },
  },
  btn: {
    border: 'none',
    background: 'inherit',
    cursor: 'pointer',
  },
  content: {
    width: '100%',
    position: 'relative',
    aspectRatio: '0.69',
  },
  info: {
    color: 'var(--white)',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    position: 'absolute',
    padding: '0 16px',
    bottom: 104,
    [`@media (max-width:799px)`]: {
      bottom: 50,
    },
    [`@media (max-width:575px)`]: {
      bottom: 20,
    },
  },
  title: {
    width: 251,
    fontWeight: 400,
    lineHeight: '18px',
    fontSize: 14,
    marginTop: 2,
  },

  nickname: {
    fontWeight: 600,
    fontSize: 32,
    lineHeight: '40px',
  },
  tutorial: {
    gap: 14,
    width: '100%',
    marginTop: 8,
    justifyContent: 'center',
  },
  arrow: {
    width: 24,
    height: 24,
    borderRadius: 4,
    border: 'none',
  },
}));
