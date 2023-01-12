import { createStyles } from '@mantine/core';

export const MatchStyles = createStyles(() => ({
  container: {
    width: '100%',
    height: '100%',
    margin: 0,
    padding: '0 15px 0 0',
    [`@media (min-width:1200px) and (max-width:1439px)`]: {},
    [`@media (min-width:992px) and (max-width:1199px)`]: {
      paddingLeft: 15,
    },
    [`@media (min-width:768px) and (max-width:991px)`]: {
      padding: '0 15px',
      maxWidth: '100%',
    },
    [`@media (min-width:576px) and (max-width:767px)`]: {},
    [`@media (max-width:575px)`]: {
      padding: '0 16px',
      overflowY: 'scroll',
      height: 'calc(100vh - 65px)',
    },
  },
  wrapper: {
    width: '100%',
    height: '100%',
  },
  hollow: {
    marginTop: 100,
    padding: '0 !important',
    [`@media (max-width:575px)`]: {
      marginTop: 50,
    },
  },
}));
