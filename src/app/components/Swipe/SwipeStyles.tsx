import { createStyles } from '@mantine/core';

export const SwipeStyles = createStyles(() => ({
  container: {
    position: 'relative',
    maxWidth: '40%',
    minWidth: 470,
    minHeight: 622,
    maxHeight: '68%',
    padding: '0 15px',
    margin: 0,
    transitionProperty: 'all',
    transitionDuration: '10ms',
    aspectRatio: '2 / 3',
  },
  nav: {
    width: '100%',
    height: 32,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    border: 'none',
    background: 'inherit',
    cursor: 'pointer',
  },
  content: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  info: {
    color: 'var(--white)',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    position: 'absolute',
    padding: '0 16px',
    bottom: 104,
  },
  title: {
    width: 251,
    fontWeight: 400,
    lineHeight: '18px',
    fontSize: 14,
    marginTop: 2,
  },

  nickname: {
    fontWeight: 600,
    fontSize: 32,
    lineHeight: '40px',
  },
}));
