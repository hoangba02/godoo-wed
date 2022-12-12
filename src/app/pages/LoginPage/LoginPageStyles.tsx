import { createStyles } from '@mantine/core';

export const LoginPageStyles = createStyles(() => ({
  container: {
    position: 'absolute',
    inset: 0,
    maxWidth: '100%',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    [`@media (max-width:575px)`]: {
      alignItems: 'flex-end',
      padding: '0px',
    },
  },
  wrapper: {
    position: 'relative',
    alignItems: 'center',
    width: '50%',
    maxWidth: '720px',
    height: '915px',
    margin: '0 auto  0',
    padding: '25px 75px 35px',
    backgroundColor: 'var(--white)',
    borderRadius: '20px',
    [`@media (min-width:1200px) and (max-width:1439px)`]: {
      width: '60%',
    },
    [`@media (min-width:992px) and (max-width:1199px)`]: {
      width: '60%',
    },
    [`@media (min-width:768px) and (max-width:991px)`]: {
      width: '80%',
      height: 'max-content',
    },
    [`@media (min-width:576px) and (max-width:767px)`]: {
      width: '80%',
    },
    [`@media (max-width:575px)`]: {
      width: '100%',
      // height: 'max-content',

      height: 'calc(100% - 178px)',
      borderRadius: '20px 20px 0 0',
      padding: '25px 16px 35px',
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
    marginTop: '58px',
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: '22.5px',
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
    // transform: 'rotate(-18deg)',
  },
  under: {
    // filter: 'blur(8px)',
    position: 'absolute',
    top: '389.85px',
    left: '-265px',
    width: '418px',
    height: ' 589px',
    // [`@media (min-width:1200px) and (max-width:1439px)`]: {
    //   position: 'absolute',
    //   top: '389.85px',
    //   left: '-4px',
    //   width: '773.3px',
    //   height: '598.19px',
    // },
    // [`@media (min-width:992px) and (max-width:1199px)`]: {
    //   position: 'absolute',
    //   top: '362.85px',
    //   left: ' -250px',
    //   width: '773.3px',
    //   height: '598.19px',
    // },
    // [`@media (min-width:768px) and (max-width:991px)`]: {
    //   position: 'absolute',
    //   top: '684.85px',
    //   left: '-105px',
    //   width: '506.3px',
    //   height: '500.19px',
    // },
    // [`@media (min-width:576px) and (max-width:767px)`]: {
    //   display: 'none',
    //   position: 'absolute',
    //   top: '389.85px',
    //   left: '-4px',
    //   width: '773.3px',
    //   height: '598.19px',
    // },
    // [`@media (max-width:575px)`]: {
    //   display: 'none',
    //   position: 'absolute',
    //   top: '389.85px',
    //   left: '-4px',
    //   width: '773.3px',
    //   height: '598.19px',
    // },
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
