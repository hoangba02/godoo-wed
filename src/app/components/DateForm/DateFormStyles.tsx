import { createStyles } from '@mantine/core';

export const DateFormStylyes = createStyles(() => ({
  header: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 74,
    padding: '10px 20px !important',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
    borderBottom: '1px solid #FF9565',
  },

  dateBtn: {
    width: 24,
    height: 24,
    borderRadius: '50%',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  picker: {
    position: 'absolute',
    right: 5,
    top: 80,
    background: 'transparent',
    padding: '0 !important',
    overflow: 'initial',
    zIndex: 10,
    '::after': {
      width: 15,
      height: 15,
      content: '""',
      position: 'absolute',
      right: 20,
      top: -7.5,
      backgroundColor: '#FFFFFF',
      transform: 'rotate(225deg)',
      boxShadow: 'rgba(0, 0, 0, 0.15) 1px 1px 2.6px',
    },
  },
  title: {
    fontWeight: 600,
    fontSize: 24,
    lineHeight: '30px',
  },
  form: {
    // height: 'calc(100% - 200px)',
    backgroundColor: 'transparent',
  },
  time: {
    flex: 1,
  },
  save: {
    gap: 5,
    paddingTop: 'calc(100vh - 592px)',
    position: 'absolute',
    bottom: 0,
    zIndex: 2,
    [`@media (max-width:575px)`]: {
      position: 'static',
    },
  },
  remember: {
    width: '100%',
    padding: '0 16px',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  saveBtn: {
    width: '100%',
    height: 45,
    fontSize: 20,
    [`@media (max-width:575px)`]: {
      width: '100%',
    },
  },
}));
