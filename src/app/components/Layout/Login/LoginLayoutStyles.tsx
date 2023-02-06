import { createStyles } from '@mantine/core';

export const LoginLayoutStyles = createStyles(() => ({
  container: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    padding: 0,
    margin: 0,
    [`@media (min-width:768px) and (max-width:991px)`]: {
      padding: '4% 0',
    },
    [`@media (max-width:575px)`]: {
      // height: 'max-content',
      overflowY: 'scroll',
      position: 'relative',
      paddingTop: 176,
    },
  },
  wrapper: {
    position: 'relative',
    width: 720,
    maxWidth: 720,
    margin: 'auto',
    borderRadius: 30,
    backgroundColor: 'var(--white)',
    [`@media (max-width:575px)`]: {
      width: '100%',
      height: 'calc(100% - 176px)',
      padding: 0,
      borderRadius: '20px 20px 0 0',
      position: 'absolute',
      bottom: 0,
    },
    [`@media (max-width:376px)`]: {
      padding: 0,
      // height: '70vh',
    },
  },
  content: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    padding: '20px 75px 0',
    borderRadius: 30,
    zIndex: 5,
    // [`@media (min-width:1200px) and (max-width:1439px)`]: {
    //   padding: '20px 75px 0 ',
    // },
    // [`@media (min-width:992px) and (max-width:1199px)`]: {
    //   padding: '20px 75px 0 ',
    // },
    // [`@media (min-width:768px) and (max-width:991px)`]: {
    //   padding: '20px 45px 0',
    // },
    // [`@media (min-width:576px) and (max-width:767px)`]: {
    //   padding: '20px 25px 0',
    // },
    [`@media (max-width:575px)`]: {
      padding: '25px 16px 120px',
      height: 'max-content',
      // height: 615,
      borderRadius: '30px 30px 0 0',
      backgroundColor: 'var(--white)',
    },
    [`@media (max-width:376px)`]: {
      padding: '20px 20px 120px ',
      borderRadius: '30px 30px 0 0',
      // height: 634,
      backgroundColor: 'var(--white)',
    },
  },

  logo: {
    height: 150,
    position: 'absolute',
    [`@media (max-width:575px)`]: {
      height: 100,
      top: -130,
      zIndex: 4,
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
      fontSize: 16,
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
