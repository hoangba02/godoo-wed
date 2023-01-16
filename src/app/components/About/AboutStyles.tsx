import { createStyles } from '@mantine/core';

export const AboutStyles = createStyles(() => ({
  wrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    width: '100%',
    maxWidth: 570,
    margin: 0,
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
  },
  textWallet: {
    color: 'var(--white)',
    fontWeight: 600,
    fontSize: 20,
    lineHeight: '25px',
  },
}));
