import { createStyles } from '@mantine/core';

export const AboutStyles = createStyles(() => ({
  wrapper: {
    minWidth: 378,
    display: 'flex',
    justifyContent: 'center',
    [`@media (max-width:575px)`]: {
      minWidth: '100%',
      height: '100vh',
      overflow: 'scroll',
    },
  },
  container: {
    width: '100%',
    maxWidth: 570,
    margin: 0,
    padding: '50px 20px 90px',
    [`@media (max-width:575px)`]: {
      height: 'max-content',
    },
  },
  header: {
    width: '100%',
    justifyContent: 'space-between',
  },

  aboutBtn: {
    width: '32px !important',
    height: '32px !important',
    ':before': {
      display: 'none',
    },
  },
  nickname: {
    color: 'var(--primary-1)',
    fontWeight: 500,
    fontSize: 32,
    lineHeight: '40px',
  },
  editBtn: {
    marginTop: 8,
    padding: 0,
    width: '133px !important',
    height: '28px !important',
    background: 'var(--light)',
    color: 'var(--grey-dark)',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: '20px',
    borderRadius: 53,
    ':hover': {
      background: 'var(--light)',
    },
    [`@media (max-width:575px)`]: {
      fontSize: 16,
    },
  },
  wallet: {
    gap: '2%',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 28,
  },
  moneyBtn: {
    gap: 7.5,
    width: '49%',
    height: 82,
    borderRadius: 8,
    alignItems: 'center',
    transition: 'all 0.5s ease',
    cursor: 'pointer',
    ':active': {
      transform: 'scale(0.9)',
    },
  },
  textWallet: {
    color: 'var(--white)',
    fontWeight: 600,
    fontSize: 20,
    lineHeight: '25px',
    userSelect: 'none',
  },
  premiums: {
    width: '100%',
    marginTop: 24,
  },
}));
