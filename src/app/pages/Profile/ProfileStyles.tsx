import { createStyles } from '@mantine/core';

export const ProfileStyle = createStyles(() => ({
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
}));
