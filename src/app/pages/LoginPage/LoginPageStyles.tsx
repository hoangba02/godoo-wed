import { createStyles } from '@mantine/core';

export const LoginPageStyles = createStyles(() => ({
  container: {
    padding: 0,
    [`@media (max-width:575px)`]: {
      alignItems: 'flex-end',
      padding: '0px',
    },
  },
  wrapper: {
    paddingBottom: '20px',
    maxWidth: 720,
    width: '50%',
    height: '915px',
    borderRadius: 30,
    margin: 'auto',
    backgroundColor: 'var(--white)',
    [`@media (min-width:1200px) and (max-width:1439px)`]: {
      width: '60%',
    },
    [`@media (min-width:992px) and (max-width:1199px)`]: {
      width: '60%',
    },
    [`@media (min-width:768px) and (max-width:991px)`]: {
      width: '70%',
      // height: '100%',
    },
    [`@media (min-width:576px) and (max-width:767px)`]: {
      width: '80%',
      // height: '100%',
    },
    [`@media (max-width:575px)`]: {
      width: '100%',
      height: '80vh',
      borderRadius: '20px 20px 0 0',
      padding: 0,
      position: 'absolute',
      bottom: 0,
    },
    [`@media (max-width:376px)`]: {
      padding: 0,
      height: '70vh',
    },
  },
  content: {
    position: 'relative',
    maxWidth: 720,
    width: '100%',
    borderRadius: 30,
    margin: 'auto',
    padding: '188px 75px 0',
    zIndex: 3,
    [`@media (min-width:1200px) and (max-width:1439px)`]: {
      padding: '188px 75px 0 ',
    },
    [`@media (min-width:992px) and (max-width:1199px)`]: {
      padding: '188px 75px 0 ',
    },
    [`@media (min-width:768px) and (max-width:991px)`]: {
      padding: '188px 45px 0',
    },
    [`@media (min-width:576px) and (max-width:767px)`]: {
      padding: '20px 25px ',
    },
    [`@media (max-width:575px)`]: {
      padding: '25px 16px 0',
      // height: 615,
      borderRadius: '30px 30px 0 0',
      backgroundColor: 'var(--white)',
    },
    [`@media (max-width:376px)`]: {
      padding: '20px ',
      borderRadius: '30px 30px 0 0',
      // height: 634,
      backgroundColor: 'var(--white)',
    },
  },

  logo: {
    position: 'absolute',
    top: 50,
    [`@media (max-width:575px)`]: {
      position: 'static',
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
    textAlign: 'center',
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
      marginTop: '38px',
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
}));
