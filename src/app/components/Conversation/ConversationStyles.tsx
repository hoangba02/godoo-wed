import { createStyles } from '@mantine/core';

export const ConversationStyles = createStyles(() => ({
  container: {
    width: '100%',
    marginRight: 135,
    padding: '32px 0 0 30px',
    borderLeft: '1px solid #BFBFBF',
    position: 'relative',
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
    height: 'calc(100% - 150px)',
    padding: '0 16px !important',
    overflowY: 'scroll',
    [`@media (max-width:575px)`]: {},
  },
  avatar: {
    alignItems: 'center',
  },
  message: {
    height: '1000px',
  },
  text: {
    marginTop: 32,
    color: '#E46125',
    fontWeight: 500,
    fontSize: 18,
    lineHeight: '22px',
  },
  footer: {
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
  chatBox: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    width: '90%',
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
  sendBtn: {
    width: 32,
    height: 32,
    border: 'none',
    borderRadius: '50%',
    background: 'linear-gradient(90deg, #E46125 -0.01%, #C91A44 100%)',
  },
}));
