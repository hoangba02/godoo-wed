import { createStyles } from '@mantine/core';

export const ProfilePageStyles = createStyles(() => ({
  title: {
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
  tutorial: {
    fontSize: 18,
    fontWeight: 400,
    lineHeight: '22px',
    textAlign: 'center',
    [`@media (max-width:575px)`]: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: '18px',
    },
  },
  nextBtn: {
    width: '75px !important',
    height: '75px !important',
    borderRadius: '50% !important',
    position: 'absolute',
    bottom: 14,
    right: '14px',
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
      width: '65px !important',
      height: '65px !important',
      bottom: 40,
      right: 16,
      zIndex: 9999,
    },
  },
  inputWrraper: {
    height: '55px !important',
    marginTop: 12,
    position: 'relative',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    [`@media (max-width:575px)`]: {
      height: '45px !important',
    },
  },
  // Nickname
  rootName: {
    height: '100%',
  },
  inputName: {
    fontSize: 24,
    fontWeight: 500,
    lineHeight: '30px',
    textAlign: 'right',
    border: 'none',
    borderRadius: 8,
    backgroundColor: 'transparent',
    position: 'absolute',
    width: '100%',
    height: '100% !important',
    zIndex: 2,
  },

  // Birthday
  birthIcon: {
    position: 'absolute',
    left: 10,
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1,
  },
  rootPicker: {
    height: '100%',
  },
  inputPicker: {
    height: '100%',
    fontSize: 24,
    fontWeight: 500,
    lineHeight: '30px',
    textAlign: 'right',
    borderRadius: 8,
    border: 'none',
    backgroundColor: 'transparent',
    position: 'absolute',
    zIndex: 2,
  },

  checkboxLabel: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: '20px',
    paddingLeft: 2,
    marginLeft: 5,
    [`@media (max-width:575px)`]: {
      fontSize: 14,
      lineHeight: '17.5px',
    },
  },
  inputIcon: {
    position: 'absolute',
    left: 10,
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1,
  },
  // Gender
}));
