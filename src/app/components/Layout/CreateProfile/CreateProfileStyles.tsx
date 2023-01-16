import { createStyles } from '@mantine/core';

export const CreateProfileStyles = createStyles(() => ({
  // Profile
  container: {
    width: '100vw',
    height: '100vh',
    padding: '42px 0',
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    inset: 0,
    zIndex: 2,
    [`@media (max-width:575px)`]: {
      paddingTop: 0,
      paddingBottom: 0,
      // paddingBottom: 'calc(1em + env(safe-area-inset-bottom)',
    },
  },
  wrapper: {
    width: '50%',
    maxWidth: 720,
    height: '888px',
    borderRadius: '30px',
    padding: '0 32px 32px !important',
    zIndex: 5,
    [`@media (min-width:1200px) and (max-width:1439px)`]: {
      width: '70%',
    },
    [`@media (min-width:992px) and (max-width:1199px)`]: {
      width: '70%',
    },
    [`@media (min-width:768px) and (max-width:991px)`]: {
      width: '537px', // 70%
      height: '789px', // 84%
    },
    [`@media (min-width:576px) and (max-width:767px)`]: {
      width: '80%',
      height: '84%',
    },
    [`@media (max-width:575px)`]: {
      width: '100%',
      height: '100%',
      alignItems: 'flex-end',
      padding: '0px !important',
      borderRadius: 0,
    },
  },

  card: { width: '100%', height: '100%', position: 'relative' },

  progress: {
    gap: 4,
    width: '100%',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: -20,
    [`@media (max-width:575px)`]: {
      height: 4,
      padding: '0 16px',
      bottom: 20,
      zIndex: 3,
    },
  },
  step: {
    flex: 1,
    height: 9,
    maxWidth: 106,
    borderRadius: 41,
    backgroundColor: 'var(--white-light)',
    [`@media (max-width:575px)`]: {
      height: 6,
    },
  },
  nextBtn: {
    width: 75,
    height: 75,
    borderRadius: '50%',
    position: 'absolute',
    bottom: 14,
    right: 14,
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
      width: 65,
      height: 65,
      bottom: 40,
      right: 16,
      zIndex: 9999,
    },
  },
  // Children
  children: {
    width: '100%',
    height: '100%',
  },
  imgPro: {
    position: 'absolute',
    [`@media (min-width:1200px) and (max-width:1439px)`]: {
      width: '60%',
    },
    [`@media (min-width:992px) and (max-width:1199px)`]: {
      width: '60%',
    },
    [`@media (min-width:768px) and (max-width:991px)`]: {
      width: '70%',
    },
    [`@media (min-width:576px) and (max-width:767px)`]: {
      width: '80%',
    },
    [`@media (max-width:575px)`]: {
      width: '150%',
      left: '50%',
      transform: 'translateX(-50%)',
    },
  },

  box: {
    height: '60%',
    bottom: 0,
    width: '100%',
    padding: '0 6.5%',
    borderRadius: 30,
    backgroundColor: 'var(--primary-5)',
    position: 'absolute',
    zIndex: 3,
    [`@media (max-width:575px)`]: {
      height: '63%',
      padding: '0 16px',
      borderRadius: '30px 30px 0 0',
    },
  },
  titleChild: {
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
  text: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: '20px',
    textAlign: 'center',
    marginTop: 6,
    [`@media (max-width:575px)`]: {
      fontSize: 14,
      marginBottom: 18,
    },
  },
  back: {
    textAlign: 'left',
    color: 'var(--primary-3)',
    position: 'absolute',
    left: 10,
    top: 10,
    padding: 10,
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    zIndex: 4,
    [`@media (max-width:575px)`]: {
      top: '2%',
      left: '5px',
    },
  },
  //NickName
  form: {
    position: 'relative',
  },
  imgNickname: {
    width: '100%',
    height: '100%',
  },
  nicknameIcon: {
    position: 'absolute',
    top: '50%',
    left: 10,
    zIndex: 2,
    transform: 'translateY(-50%)',
  },
  // Birday
  birthIcon: {
    position: 'absolute',
    top: '50%',
    left: 10,
    transform: 'translateY(-50%)',
    zIndex: 1,
  },
  //Picture Pro
  picMain: {
    padding: '0 !important',
    borderRadius: 30,
    position: 'relative',
    backgroundColor: 'var(--white-light)',
  },
  picCard: {
    height: '100%',
    width: '100%',
    padding: '0 !important',
    borderRadius: 30,
    position: 'relative',
    backgroundColor: 'var(--white)',
    display: 'flex',
    justifyContent: 'center',
  },
  label: {
    width: '63%',
    position: 'absolute',
    bottom: '6%',
    zIndex: 3,
    display: 'flex',
    justifyContent: 'center',
    [`@media (min-width:1200px) and (max-width:1439px)`]: {
      bottom: '6%',
    },
    [`@media (min-width:992px) and (max-width:1199px)`]: {
      bottom: '6%',
    },
    [`@media (min-width:768px) and (max-width:991px)`]: {
      bottom: '6%',
    },
    [`@media (min-width:576px) and (max-width:767px)`]: {
      bottom: '6%',
    },
    [`@media (max-width:575px)`]: {},
  },
  addBtnSmall: {
    width: '67% !important',
    height: '100% !important',
    color: 'var(--white)',
    padding: 0,
    backgroundColor: '#E46125',
    borderRadius: 34,
    fontWeight: 400,
    lineHeight: '18px',
    '&::before': {
      display: 'none',
    },
    '&:hover': {
      transition: '0.5s',
      backgroundColor: '#E46125 !important',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    [`@media (max-width:575px)`]: {
      height: 30,
      width: 84,
    },
  },

  upImg: {
    display: 'none',
  },
  clearBtn: {
    position: 'absolute',
    right: 14,
    top: 14,
    border: 'none',
    width: 26,
    height: 26,
    cursor: 'pointer',
    backgroundColor: 'transparent',
    transition: 'transform 0.5s ease',
    zIndex: 5,

    '&:active': {
      transform: 'translateY(3px)',
    },
  },
  // Decs
  imgDecs: {
    position: 'absolute',
    left: '50%',
    top: 20,
    transform: 'translateX(-50%)',
    [`@media (min-width:768px) and (max-width:991px)`]: {
      width: '70%',
      height: 287,
    },
    [`@media (min-width:576px) and (max-width:767px)`]: {
      width: '80%',
      height: 257,
    },
    [`@media (max-width:575px)`]: {
      top: '5%',
      height: 264,
    },
    [`@media (max-width:376px)`]: {
      top: '0%',
      height: 237,
    },
  },
  //Mode Pro
  optionBtn: {
    height: 70,
    width: '70%',
    fontWeight: 600,
    fontSize: 32,
    lineHeight: '40px',
    transition: 'all 0.25s ease',
    '&:hover': {
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    [`@media (min-width:768px) and (max-width:991px)`]: {
      fontSize: 24,
    },
    [`@media (min-width:576px) and (max-width:767px)`]: {
      fontSize: 24,
    },
    [`@media (max-width:575px)`]: {
      width: 274,
      height: 52,
    },
  },
  imgMode: {
    width: '100%',
    height: 336,
    position: 'absolute',
    left: '50%',
    top: '5%',
    transform: 'translateX(-50%)',
    [`@media (max-width:575px)`]: {
      top: '5%',
    },
    [`@media (max-width:375px)`]: {
      top: '0%',
    },
  },
  // tips
  thanksBtn: {
    width: 71,
    height: 18,
    position: 'absolute',
    top: 10,
    right: 0,
    textDecoration: 'underline',
    color: 'var(--black)',
    fontWeight: 500,
    fontSize: 14,
    lineHeight: '18px',
    zIndex: 3,
    [`@media (max-width:575px)`]: {
      right: 16,
      width: 61,
      fontSize: 12,
    },
  },
  addNow: {
    [`@media (max-width:575px)`]: {
      height: 52,
    },
  },
  imgGender: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '5%',
  },
}));
