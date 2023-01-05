import { createStyles } from '@mantine/core';

export const SwipeStyles = createStyles(() => ({
  container: {
    position: 'relative',
    width: 470,
    padding: '0 15px',
    margin: 0,
    transitionProperty: 'all',
    transitionDuration: '10ms',
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

  tutorial: {
    gap: 14,
    width: '100%',
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    width: 24,
    height: 24,
    borderRadius: 4,
    border: 'none',
  },
  overlay: {
    padding: '0px !important',
    position: 'relative',
  },
}));
