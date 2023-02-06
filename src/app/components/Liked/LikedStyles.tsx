import { createStyles } from '@mantine/core';

export const LikedStyles = createStyles(() => ({
  container: {
    padding: '32px 31px 32px 31px',
    maxWidth: '100%',
    minWidth: '100%',
    margin: 0,
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
