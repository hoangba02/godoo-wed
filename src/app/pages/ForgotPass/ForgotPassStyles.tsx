import { createStyles } from '@mantine/core';

export const ForgotPassStyles = createStyles(() => ({
  // Forgot Password
  wrapper: {
    position: 'absolute',
    inset: 0,
  },
  card: {
    width: '50%',
    height: '613px',
    maxWidth: '720px',
    borderRadius: '30px',
    padding: '30px 75px 75px ',
    margin: '120px auto 0',
    background: 'var(--white)',
    border: '1px solid #000',
  },
  back: {
    width: '44px',
    height: '44px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    textAlign: 'left',
  },
  title: {
    fontSize: '32px',
    fontWeight: 600,
    lineHeight: '40px',
  },

  //   Input Name
  input: {
    marginTop: '40px',
  },
  desc: {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '20px',
    marginTop: '4px',
  },

  //MedthodOTP

  guide: {
    marginTop: '48px',
    fontSize: '18px',
    fontWeight: 600,
    lineHeight: '22px',
  },
  linkBtn: {
    width: '100%',
  },

  //   Code
  inputCode: {
    width: '70px',
    height: '78px',
    borderRadius: '8px',
    background: '#FFEADE',
  },
  senTo: {
    width: 'max-content',
    padding: '0 8px',
    color: 'var(--black)',
    textDecoration: 'underline',
  },
  forgotForm: {
    width: '100%',
  },
}));
