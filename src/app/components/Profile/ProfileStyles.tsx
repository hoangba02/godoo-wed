import { createStyles } from '@mantine/core';

export const ProfileStyles = createStyles(() => ({
  carousel: {
    position: 'relative',
    height: '61%',
    padding: 0,
    [`@media (max-width:575px)`]: {
      minHeight: 448,
    },
  },
  bio: {
    position: 'absolute',
    bottom: 10,
    backgroundColor: 'transparent',
  },
  card: {
    padding: '0 48px !important',
    [`@media (max-width:575px)`]: {
      padding: '0 7.5px !important',
    },
  },
  title: {
    fontWeight: 700,
    fontSize: 18,
    lineHeight: '22px',
    marginBottom: 4,
  },
  gender: {
    gap: 8,
    justifyContent: 'center',
    borderRadius: '8px',
    backgroundColor: 'var(--light)',
    padding: '9px 12px',
  },
  chip: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 700,
  },
  //   Profile Options
  options: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: '8px 16px !important',
    [`@media (max-width:575px)`]: {
      position: 'static',
      padding: '8px 0 !important',
    },
  },
  optionBtn: {
    width: 'max-content',
    height: 'max-content',
    [`@media (max-width:799px)`]: {
      width: 'max-content',
      height: 'max-content',
    },
  },
}));
