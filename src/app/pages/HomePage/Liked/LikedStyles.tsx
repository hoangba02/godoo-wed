import { createStyles } from '@mantine/core';

export const LikedStyles = createStyles(() => ({
  container: {
    width: '26%',
    margin: 0,
    padding: 0,
  },
  btn: {
    width: '48%',
    height: 38,
    border: 'none',
    borderRadius: 8,
    padding: 0,
    color: '#E46125',
    fontSize: 16,
    fontWeight: 400,
    lineHeight: '20px',
    backgroundColor: '#F3F3F3',
    '::before': {
      display: 'none',
    },
    ':hover': {
      color: '#FFFFFF',
      background: 'linear-gradient(90deg, #E46125 -0.01%, #C91A44 100%)',
    },
    '&.active': {
      color: '#FFFFFF',
      background: 'linear-gradient(90deg, #E46125 -0.01%, #C91A44 100%)',
    },
  },
}));
