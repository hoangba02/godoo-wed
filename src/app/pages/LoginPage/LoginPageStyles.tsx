import { createStyles } from '@mantine/core';

export const LoginPageStyles = createStyles(() => ({
  container: {
    position: 'absolute',
    inset: 0,
    maxWidth: '100%',
    width: '100vw',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    [`@media (max-width:575px)`]: {
      alignItems: 'flex-end',
      padding: '0px',
    },
  },
  wrapper: {
    position: 'relative',
    alignItems: 'center',
    width: '100%',
    maxWidth: '720px',
    height: '915px',
    padding: '25px 75px 35px',
    borderRadius: '20px',
    [`@media (max-width:575px)`]: {
      position: 'static',
      width: '100%',
      height: '100%',
      padding: 0,
      borderRadius: '20px 20px 0 0',
    },
  },
  logo: {
    [`@media (max-width:575px)`]: {
      position: 'absolute',
      top: '8%',
    },
  },
  registerBtn: {
    width: '269px',
    height: '52px',
    fontSize: '18px',
    fontWeight: 500,
    marginTop: '42px',
    padding: '16px 19px 16px 19px',
  },
  ques: {
    justifySelf: 'flex-end',
    marginTop: '55px',
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: '22.5px',
    position: 'relative',
    zIndex: 2,
    '& span': {
      color: 'var(--primary-1 )',
      fontWeight: 600,
      textDecoration: 'underline',
      userSelect: 'none',
      cursor: 'pointer',
    },
    [`@media (max-width:575px)`]: {
      marginTop: '18px',
    },
  },
  big: {
    position: 'absolute',
    top: '-713px',
    left: '764.98px',
    width: '1289.38px',
    height: '1843.88px',
  },
  under: {
    position: 'absolute',
    top: '389.85px',
    left: '-265px',
    width: '418px',
    height: ' 589px',
  },
  social: {
    width: '60%',
    justifyContent: 'space-around',
    [`@media (max-width:575px)`]: {
      marginTop: '18px',
    },
  },
  socialBtn: {
    width: '64px',
    height: '64px',
    padding: '0',
    borderRadius: '50%',
    [`@media (max-width:575px)`]: {
      width: '50px',
      height: '50px',
    },
  },
  img: {
    width: '100%',
    height: '100%',
  },
}));
