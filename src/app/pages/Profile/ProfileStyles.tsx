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
  },
  wrapper: {
    width: '100%',
    maxWidth: 720,
    height: '100%',
    borderRadius: '30px',
    padding: '0 32px 32px !important',
    [`@media (max-width:575px)`]: {
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
    [`@media (max-width:575px)`]: {
      width: 65,
      height: 65,
      bottom: '8%',
      right: 16,
    },
  },
  // Children
  children: {
    width: '100%',
    height: '100%',
    // position: 'relative',
  },
  imgPro: {
    position: 'absolute',
    [`@media (max-width:575px)`]: {
      width: '150%',
      left: '50%',
      transform: 'translateX(-50%)',
    },
  },
  imgNickname: {
    position: 'absolute',
    bottom: 281,
    left: '50%',
    transform: 'translateX(-50%)',
    [`@media (max-width:575px)`]: {
      width: '150%',
      bottom: 255,
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
  //NickName
  form: {
    position: 'relative',
  },
  nicknameIcon: {
    position: 'absolute',
    top: '34%',
    left: 53,
    transform: 'translateY(-50%)',
    [`@media (max-width:575px)`]: {
      top: '30.7%',
    },
  },
  // Birday
  birthIcon: {
    position: 'absolute',
    top: '28%',
    left: 55,
    transform: 'translateY(-50%)',
    [`@media (max-width:575px)`]: {
      left: 25,
    },
  },
  //Picture Pro
  picContent: {
    width: '100%',
    padding: '24px 44px 0',
    [`@media (max-width:575px)`]: {
      padding: '120px 16px 20px',
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
  },
  picCard: {
    height: 170,
    width: 170,
    padding: '0 !important',
    borderRadius: 30,
    position: 'relative',
    backgroundColor: 'var(--white-light)',
    display: 'flex',
    justifyContent: 'center',
    [`@media (max-width:575px)`]: {
      height: 106,
      width: 106,
    },
  },
  label: {
    position: 'absolute',
    bottom: 21.5,
    [`@media (max-width:575px)`]: {
      bottom: 11.5,
    },
  },
  button: {
    width: 84,
    height: 26,
    color: 'var(--white)',
    padding: 0,
    background: '#E46125',
    borderRadius: 34,
    fontWeight: 400,
    fontSize: '14px !important',
    lineHeight: '18px',
    '&::before': {
      display: 'none',
    },
    [`@media (max-width:575px)`]: {
      height: 26,
      width: 60,
    },
  },
  icon: {
    // position: 'absolute',
  },
  upImg: {
    display: 'none',
  },
  // Decs
  imgDecs: {
    position: 'absolute',
    left: '50%',
    top: 20,
    transform: 'translateX(-50%)',
    [`@media (max-width:575px)`]: {
      width: 214,
      height: 227,
    },
  },
  //Mode Pro
  optionBtn: {
    height: 70,
    width: 430,
    fontWeight: 600,
    fontSize: 32,
    lineHeight: '40px',
    [`@media (max-width:575px)`]: {
      width: 274,
      height: 52,
    },
  },
  imgMode: {
    width: '100%',
    position: 'absolute',
    left: '50%',
    top: 50,
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
}));
