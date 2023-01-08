import { createStyles } from '@mantine/core';

export const LikedStyles = createStyles(() => ({
  container: {
    maxWidth: 308,
    minWidth: 308,
    margin: 0,
    padding: 0,
    aspectRatio: '2 / 3',
    transition: 'all 1s ease',
    [`@media (min-width:1200px) and (max-width:1439px)`]: {},
    [`@media (min-width:992px) and (max-width:1199px)`]: {},
    [`@media (min-width:768px) and (max-width:991px)`]: {
      minWidth: 290,
    },
    [`@media (min-width:576px) and (max-width:767px)`]: {},
    [`@media (max-width:575px)`]: {
      maxWidth: '100%',
      height: '100vh',
      overflowY: 'scroll',
      padding: '28px 16.5px 75px',
    },
  },
  btn: {},
  content: {},
}));
