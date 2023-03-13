import { createStyles } from '@mantine/core';

export const SettingStyles = createStyles(() => ({
  wrapper: {
    width: '100%',
    height: '100%',
    padding: '24px 16px',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '2px solid #FF9565',
    paddingBottom: 12,
    [`@media (max-width:575px)`]: {
      height: 74,
      alignItems: 'flex-end',
      padding: '0 10px 12px',
      background: '#FFFFFF',
      borderRadius: 0,
    },
  },
  options: {
    gap: 8,
    height: 667,
    paddingTop: 24,
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
    [`@media (max-width:575px)`]: {
      height: 'calc(100% - 74px)',
      padding: '24px 16px 0',
    },
  },
  option: {
    gap: 10,
    alignItems: 'center',
    width: 570,
    height: 55,
    padding: '0 16px',
    borderRadius: 8,
    border: '1px solid #A9A9A9',
    position: 'relative',
    transition: 'all 0.5s ease',
    ':active': {
      transform: 'scale(0.95)',
    },
    [`@media (max-width:575px)`]: {
      width: '100%',
      height: 45,
    },
  },
  name: {
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '22px',
    userSelect: 'none',
  },
  icon: {
    color: '#A9A9A9',
    position: 'absolute',
    right: 8,
  },
  wrapBtn: {
    position: 'absolute',
    bottom: 30,
  },

  logoutBtn: {
    width: 570,
    color: '#E46125',
    bottom: 30,
    [`@media (max-width:575px)`]: {
      width: 'calc(100vw - 32px)',
      bottom: 10,
    },
  },
  modalBtn: {
    height: '52px !important',
    width: '48%',
  },
  text: {
    fontWeight: 600,
    fontSize: 20,
    lineHeight: '25px',
  },

  // Account
  account: {
    height: '100%',
    padding: '24px 16px 0',
    maxWidth: 570,
    [`@media (max-width:575px)`]: {
      width: '100%',
    },
  },
  accountWrapper: {
    gap: 8,
    width: '100%',
    alignItems: 'center',
  },
  delBtn: {
    gap: 0,
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  info: {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '17.5px',
    userSelect: 'none',
    marginLeft: 6,
  },
  part: {
    width: 570,
    fontWeight: 500,
    fontSize: 18,
    lineHeight: '22px',
    [`@media (max-width:575px)`]: {
      width: '100%',
    },
  },
}));
