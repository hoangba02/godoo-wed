import { createStyles } from '@mantine/core';

export const DraggableStyles = createStyles(() => ({
  content: {
    padding: '0 !important',
    width: '100%',
    position: 'absolute',
    aspectRatio: '0.69',
  },
  info: {
    color: 'var(--white)',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    position: 'absolute',
    padding: '0 16px',
    bottom: 104,
    [`@media (max-width:799px)`]: {
      bottom: 50,
    },
    [`@media (max-width:575px)`]: {
      bottom: 20,
    },
  },
  title: {
    width: 251,
    fontWeight: 400,
    lineHeight: '18px',
    fontSize: 14,
    marginTop: 2,
    userSelect: 'none',
  },

  nickname: {
    fontWeight: 600,
    fontSize: 32,
    lineHeight: '40px',
    userSelect: 'none',
  },
}));
