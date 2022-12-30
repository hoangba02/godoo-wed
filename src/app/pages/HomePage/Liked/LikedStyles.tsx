import { createStyles } from '@mantine/core';

export const LikedStyles = createStyles(() => ({
  container: {
    maxWidth: 308,
    minWidth: 308,
    margin: 0,
    padding: 0,
    aspectRatio: '2 / 3',
    transition: 'all 1s ease',
    [`@media (min-width:1200px) and (max-width:1439px)`]: {},
    [`@media (min-width:992px) and (max-width:1199px)`]: {},
    [`@media (min-width:768px) and (max-width:991px)`]: {
      minWidth: 290,
    },
    [`@media (min-width:576px) and (max-width:767px)`]: {},
    [`@media (max-width:575px)`]: {},
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
      color: '#E46125',
      backgroundColor: '#F3F3F3',
    },
    '&.active': {
      color: '#FFFFFF',
      background: 'linear-gradient(90deg, #E46125 -0.01%, #C91A44 100%)',
    },
  },
  content: {},
}));
