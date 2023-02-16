import { createStyles } from '@mantine/core';

export const SwipeStyles = createStyles(() => ({
  container: {
    position: 'relative',
    width: 470,
    padding: '0 15px',
    margin: 0,
    transitionProperty: 'all',
    transitionDuration: '10ms',
    zIndex: 99,
    [`@media (min-width:1200px) and (max-width:1439px)`]: {},
    [`@media (min-width:992px) and (max-width:1199px)`]: {},
    [`@media (min-width:768px) and (max-width:991px)`]: {},
    [`@media (max-width:799px)`]: {
      width: '70%',
      margin: '24px auto 0',
    },
  },
  nav: {
    width: '100%',
    height: 48,
    padding: '8px 0 16px',
    alignItems: 'center',
    justifyContent: 'flex-end',
    [`@media (max-width:575px)`]: {
      padding: '8px 0',
    },
  },
  arrow: {
    width: 24,
    height: 24,
    borderRadius: 4,
    border: 'none',
  },
  swipe: {
    width: '100%',
    height: '100%',
    padding: 0,
    borderRadius: '20px',
    borderCollapse: 'separate',
    perspective: 1,
    overflow: 'overlay',
    scrollSnapType: 'y mandatory',
    scrollBehavior: 'smooth',
    scrollSnapStop: 'always',
    // scrollPaddingTop: -20,
    // scrollPaddingBottom: 20,
  },
  overlay: {
    gap: 0,
    width: '100%',
    padding: '0px !important',
    [`@media (max-width:575px)`]: {
      // gap: 8,
    },
  },
}));
