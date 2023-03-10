import { createStyles } from '@mantine/core';

export const ConversationStyles = createStyles(() => ({
  container: {
    width: '100%',
    marginRight: 135,
    padding: '32px 0 0 30px',
    borderLeft: '1px solid #BFBFBF',
    position: 'relative',
    backgroundColor: 'var(--white)',
    [`@media (max-width:575px)`]: {
      height: '100%',
      padding: 0,
    },
  },
  header: {
    width: '100%',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #FFE0D2',
    [`@media (max-width:575px)`]: {
      height: 74,
      alignItems: 'flex-end',
      padding: '0 10px 12px',
      background: '#FF9565',
      borderRadius: '0px 0px 20px 20px',
    },
  },
  nickname: {
    fontSize: 24,
    fontWeight: 600,
    lineHeight: '30px',
  },
  body: {
    height: 'calc(100% - 125px)',
    padding: '0 16px !important',
    overflowY: 'scroll',
    [`@media (max-width:575px)`]: {
      height: 'calc(100% - 150px)',
    },
  },
  avatar: {
    marginBottom: 16,
    alignItems: 'center',
  },
  message: {
    height: 'max-content',
    gap: 0,
    justifyContent: 'flex-end',
    padding: ' 0 !important',
    position: 'relative',
  },

  text: {
    marginTop: 32,
    color: '#E46125',
    fontWeight: 500,
    fontSize: 18,
    lineHeight: '22px',
  },
  footer: {
    gap: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 75,
    padding: '0 16px',
    background: '#FFE9E0',
    borderRadius: '20px 20px 0px 0px',
    position: 'absolute',
    bottom: 0,
    left: 30,
    right: 0,
    [`@media (max-width:575px)`]: {
      left: 0,
    },
  },
  options: {
    position: 'absolute',
    top: -40,
    left: 10,
    borderRadius: 8,
    background: '#FFFFFF',
    padding: '10px',
    filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.2))',
    zIndex: 99,

    ':before': {
      content: "''",
      position: 'absolute',
      bottom: -5,
      left: 17,
      width: 10,
      height: 10,
      background: '#FFFFFF',
      transform: 'rotate(45deg)',
    },
  },

  chatBox: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    width: 'calc(100% - 84px)',
    borderRadius: 32,
    padding: '0 8px 0 16px',
    backgroundColor: 'var(--white)',
    position: 'relative',
  },
  input: {
    height: '100%',
    width: '100%',
    outline: 'none',
    border: 'none',
  },
  emoij: {
    background: 'transparent',
    '::before': {
      display: 'none',
    },
  },
  chatBtn: {
    width: 32,
    height: 32,
    borderRadius: '50%',
    background: 'linear-gradient(90deg, #E46125 -0.01%, #C91A44 100%)',
  },
  footerBtn: {
    width: '32px !important',
    height: '32px !important',
    backgroundColor: 'transparent',
    ':hover': {
      color: 'var(--primary-4)',
      backgroundColor: 'transparent',
    },
  },
}));
