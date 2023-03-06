import { createStyles } from '@mantine/core';

export const ProfilePageStyles = createStyles(() => ({
  title: {
    fontSize: 48,
    fontWeight: 600,
    lineHeight: '60px',
    textAlign: 'center',
    marginTop: 10,
    color: 'var(--primary-1)',
    [`@media (max-width:575px)`]: {
      fontSize: 32,
      lineHeight: '40px',
    },
  },
  tutorial: {
    fontSize: 18,
    fontWeight: 400,
    lineHeight: '22px',
    textAlign: 'center',
    [`@media (max-width:575px)`]: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: '18px',
    },
  },
  nextBtn: {
    width: '75px !important',
    height: '75px !important',
    borderRadius: '50% !important',
    position: 'absolute',
    bottom: 14,
    right: '14px',
    zIndex: 3,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    '&:disabled': {
      boxShadow: 'none',
      color: 'var(--white)',
      border: '1px solid #FFFFFF',
      background:
        'linear-gradient(90deg, rgba(228, 97, 37, 0.6) -0.01%, rgba(161, 47, 163, 0.6) 100%)',
    },
    [`@media (max-width:575px)`]: {
      position: 'fixed',
      width: '65px !important',
      height: '65px !important',
      bottom: 40,
      right: 16,
      zIndex: 9999,
    },
  },
}));
