import { createStyles } from '@mantine/core';

export const ForgotPassStyles = createStyles(() => ({
  // Forgot Password
  wrapper: {
    position: 'absolute',
    inset: 0,
    [`@media (max-width:575px)`]: {
      display: 'flex',
      alignItems: 'flex-end',
    },
  },
  card: {
    position: 'relative',
    zIndex: 2,
    width: '50%',
    height: 'max-content',
    maxWidth: '720px',
    borderRadius: '30px',
    padding: '30px 75px 75px ',
    margin: '120px auto 0',
    background: 'var(--white)',
    [`@media (min-width:1200px) and (max-width:1439px)`]: {
      width: '60%',
    },
    [`@media (min-width:992px) and (max-width:1199px)`]: {
      width: '70%',
    },
    [`@media (min-width:768px) and (max-width:991px)`]: {
      width: '80%',
    },
    [`@media (min-width:576px) and (max-width:767px)`]: {
      width: '90%',
    },
  },
  logo: {
    [`@media (max-width:575px)`]: {
      position: 'absolute',
      left: 0,
      top: '-30%',
    },
  },
  header: {
    marginTop: '60px',
    [`@media (max-width:575px)`]: {
      position: 'relative',
      marginTop: '0px',
      justifyContent: 'center',
    },
  },
  next: {
    fontWeight: 600,
    fontSize: '20px',
    lineHeight: '25px',
  },
  back: {
    width: '44px',
    height: '44px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    textAlign: 'left',
    [`@media (max-width:575px)`]: {
      position: 'absolute',
      top: '-10px',
      left: '5px',
      zIndex: 5,
    },
  },
  title: {
    fontSize: '32px',
    fontWeight: 600,
    lineHeight: '40px',
    [`@media (max-width:575px)`]: {
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: '22px',
    },
  },

  //   Input Name
  input: {
    marginTop: '64px',
    marginBottom: '10px',
    [`@media (max-width:575px)`]: {
      marginTop: '10px',
      lineHeight: '20px',
    },
  },
  desc: {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '20px',
    marginTop: '4px',
    [`@media (max-width:575px)`]: {
      fontSize: '14px',
      lineHeight: '15px',
      marginTop: '38px',
    },
  },
  error: {
    color: 'var(--red)',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '15px',
    marginTop: '4px',
  },

  //MedthodOTP

  guide: {
    marginTop: '48px',
    fontSize: '18px',
    fontWeight: 600,
    lineHeight: '22px',
    [`@media (max-width:575px)`]: {
      lineHeight: '20px',
      marginTop: 10,
    },
  },
  linkBtn: {
    width: '100%',
    [`@media (max-width:575px)`]: {
      width: '100%',
    },
  },
  text: {
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '22px',
    marginLeft: 16,
    [`@media (max-width:575px)`]: {
      fontSize: '14px',
    },
  },
  //   Code
  inputCode: {
    margin: '24px 0',
    border: '1px solid transparent',
    borderRadius: '8px',
    width: '70px !important',
    height: '78px',
    fontSize: '40px',
    color: '#000',
    fontWeight: 400,
    caretColor: 'blue',
    backgroundColor: 'var(--primary-5)',
    [`@media (max-width:575px)`]: {
      width: '46px !important',
      height: '56px',
    },
  },
  senTo: {
    width: 'max-content',
    padding: '0 8px',
    color: 'var(--black)',
    textDecoration: 'underline',
    [`@media (max-width:575px)`]: {
      width: 'max-content',
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '17.5px',
    },
  },
  forgotForm: {
    width: '100%',
  },
}));
