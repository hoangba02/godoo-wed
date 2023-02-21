import { createStyles } from '@mantine/core';

export const AboutLayoutStyles = createStyles(() => ({
  container: {
    width: '100%',
    padding: '0 135px',
    [`@media (max-width:799px)`]: {
      padding: 0,
    },
  },
  content: {
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    padding: '45px 30px 0',
    borderLeft: '1px solid #BFBFBF',
    [`@media (max-width:799px)`]: {
      padding: 0,
    },
  },
  child: {
    gap: 10,
    width: '100%',
    height: 'calc(100vh - 91px)',
    alignItems: 'center',
    overflowY: 'scroll',
    paddingTop: 24,
    [`@media (max-width:575px)`]: {
      padding: '24px 16px 0',
    },
  },
}));
