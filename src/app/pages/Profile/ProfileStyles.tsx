import { createStyles } from '@mantine/core';

export const ProfileStyle = createStyles(() => ({
  // Profile
  container: {
    width: '100vw',
    maxWidth: '100%',
    height: '100vh',
    padding: '42px 0',
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    [`@media (max-width:575px)`]: {
      padding: 0,
    },
  },
  wrapper: {
    width: '50%',
    maxWidth: 720,
    height: '100%',
    borderRadius: '30px',
    padding: '0 32px 32px !important',
    zIndex: 3,
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
      width: '100%',
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
    maxWidth: 90.29,
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
    '&:disabled': {
      color: 'var(--white)',
      background:
        'linear-gradient(90deg, rgba(228, 97, 37, 0.6) -0.01%, rgba(161, 47, 163, 0.6) 100%)',
    },
    [`@media (max-width:575px)`]: {
      width: 65,
      height: 65,
      bottom: 40,
      right: 16,
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
    height: 518,
    bottom: 0,
    width: '100%',
    padding: '0 43px',
    borderRadius: 30,
    backgroundColor: 'var(--primary-5)',
    position: 'absolute',
    zIndex: 3,
    [`@media (max-width:575px)`]: {
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
    fontWeight: 400,
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
    position: 'absolute',
    bottom: 281,
    left: '50%',
    transform: 'translateX(-50%)',
    [`@media (min-width:1200px) and (max-width:1439px)`]: {
      width: '100%',
    },
    [`@media (min-width:992px) and (max-width:1199px)`]: {
      width: '100%',
    },
    [`@media (min-width:768px) and (max-width:991px)`]: {
      width: '100%',
    },
    [`@media (min-width:576px) and (max-width:767px)`]: {
      width: '100%',
    },
    [`@media (max-width:575px)`]: {
      width: '140%',
      bottom: 255,
    },
  },
  nicknameIcon: {
    position: 'absolute',
    top: '50%',
    left: 10,
    zIndex: 1,
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
  picContent: {
    width: '100%',
    height: '70%',
    padding: '34px 44px 0',
    [`@media (min-width:1200px) and (max-width:1439px)`]: {
      padding: '34px 44px 0',
    },
    [`@media (min-width:992px) and (max-width:1199px)`]: {
      padding: '34px 20px 0',
    },
    [`@media (min-width:768px) and (max-width:991px)`]: {
      padding: '45px 10px 0',
    },
    [`@media (min-width:576px) and (max-width:767px)`]: {
      padding: '54px 0px 0',
    },
    [`@media (max-width:575px)`]: {
      padding: '87px 15px 0',
    },
    [`@media (max-width:376px)`]: {
      padding: '66px 15px 0',
    },
  },
  picMain: {
    padding: '0 !important',
    borderRadius: 30,
    position: 'relative',
    backgroundColor: 'var(--white-light)',
  },
  photoBtn: {
    color: 'var(--white)',
    borderRadius: 34,
    border: '1px solid var(--white)',
    backgroundColor: 'rgba(228, 97, 37, 0.4)',
    backdropFilter: 'blur(12.5px)',
    '&::before': {
      display: 'none',
    },
    '&:hover': {
      backgroundColor: 'rgba(228, 97, 37, 0.4)  !important',
    },
  },
  picCard: {
    height: '100%',
    width: '100%',
    padding: '0 !important',
    borderRadius: 30,
    position: 'relative',
    backgroundColor: 'var(--white-light)',
    display: 'flex',
    justifyContent: 'center',
  },
  label: {
    position: 'absolute',
    bottom: 21.5,
    [`@media (max-width:575px)`]: {
      bottom: 8,
    },
  },
  addBtnSmall: {
    width: 84,
    height: 26,
    color: 'var(--white)',
    padding: 0,
    backgroundColor: '#E46125',
    borderRadius: 34,
    fontWeight: 400,
    fontSize: '14px !important',
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
  addBtnBig: {
    width: 156,
    height: 56,
    fontSize: '32px !important',
    lineHeight: '40px',
    marginBottom: 30,
    [`@media (max-width:575px)`]: {
      fontSize: '20px !important',
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
    zIndex: 2,

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
    [`@media (max-width:575px)`]: {
      top: '10%',
      width: 264,
      height: 287,
    },
    [`@media (max-width:376px)`]: {
      top: '0%',
      width: 214,
      height: 237,
    },
  },
  //Mode Pro
  optionBtn: {
    height: 70,
    width: 430,
    fontWeight: 600,
    fontSize: 32,
    lineHeight: '40px',
    [`@media (min-width:1200px) and (max-width:1439px)`]: {
      width: '70%',
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
    [`@media (max-width:575px)`]: {
      width: 274,
      height: 52,
    },
  },
  imgMode: {
    width: '100%',
    height: 295,
    position: 'absolute',
    left: '50%',
    top: '5%',
    transform: 'translateX(-50%)',
    [`@media (max-width:575px)`]: {
      top: '7%',
      width: '140%',
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
    position: 'absolute',
    top: '5%',

    [`@media (min-width:768px) and (max-width:800px)`]: {
      top: '20%',
    },
    [`@media (min-width:800px) and (max-width:991px)`]: {
      top: '10%',
    },
    [`@media (min-width:576px) and (max-width:767px)`]: {
      top: '25%',
    },
    [`@media (max-width:575px)`]: {
      top: '20%',
    },
  },
}));
