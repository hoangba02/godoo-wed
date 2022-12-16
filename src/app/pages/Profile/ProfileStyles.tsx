import { createStyles } from '@mantine/core';

export const ProfileStyle = createStyles(() => ({
  // Profile
  container: {
    width: '100vw',
    maxWidth: '100%',
    height: '100vh',
    position: 'absolute',
    inset: 0,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  wrapper: {
    width: '100%',

    maxWidth: 720,
    height: 876,
    borderRadius: '30px',
    padding: '0 32px 32px !important',
  },

  card: { width: '100%', height: '100%', position: 'relative' },

  progress: {
    gap: 4,
    width: '100%',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: -20,
  },
  step: {
    flex: 1,
    height: 9,
    maxWidth: 90.29,
    borderRadius: 41,
    backgroundColor: 'var(--white-light)',
  },
  nextBtn: {
    width: 75,
    height: 75,
    borderRadius: '50%',
    position: 'absolute',
    bottom: 14,
    right: 14,
  },
  // Children
  children: {
    width: '100%',
    height: '100%',
    // position: 'relative',
  },
  imgPro: {
    position: 'absolute',
  },
  box: {
    height: 518,
    bottom: 0,
    width: '100%',
    padding: '0 43px',
    borderRadius: 30,
    backgroundColor: 'var(--primary-5)',
    position: 'absolute',
  },
  titleChild: {
    fontSize: 48,
    fontWeight: 600,
    lineHeight: '60px',
    textAlign: 'center',
    color: 'var(--primary-1)',
  },
  text: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: '20px',
    textAlign: 'center',
    marginTop: 6,
  },
  //NickName
  //Picture Pro
  picContent: {
    width: '100%',
    padding: '24px 44px 0',
  },
  picMain: {
    padding: '0 !important',
    borderRadius: 30,
    position: 'relative',
    backgroundColor: 'var(--white-light)',
  },
  photoBtn: {
    width: 233,
    height: 38,
    color: 'var(--white)',
    borderRadius: 34,
    border: '1px solid var(--white)',
    backgroundColor: 'rgba(228, 97, 37, 0.4)',
    backdropFilter: 'blur(12.5px)',
    '&::before': {
      display: 'none',
    },
  },
  //Mode Pro
  optionBtn: {
    height: 70,
    width: 430,
    fontWeight: 600,
    fontSize: 32,
    lineHeight: '40px',
  },
}));
