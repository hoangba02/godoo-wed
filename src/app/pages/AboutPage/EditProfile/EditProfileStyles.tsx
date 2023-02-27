import { createStyles } from '@mantine/core';

export const EditProfileStyles = createStyles(() => ({
  container: {
    width: 570,
    height: '100%',
    maxWidth: '100%',
    padding: 0,
  },
  clearBtn: {
    width: '24px !important',
    height: '24px !important',
    padding: 0,
    position: 'absolute',
    right: 10,
    top: '55%',
  },
  title: {
    flex: 1,
    fontWeight: 500,
    fontSize: 18,
    lineHeight: '22px',
    marginTop: 18,
    textOverflow: 'ellipsis',
  },
  label: {
    color: 'currentColor',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '18px',
  },
  stack: {
    gap: 6,
  },
  options: {
    gap: 28,
    width: '100%',
    minHeight: 48,
    borderRadius: 8,
    border: ' 1px solid #EAEAEA',
    padding: '8px 12px',
  },
  more: {
    width: '100%',
    height: 55,
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid #A9A9A9',
    borderRadius: 8,
    padding: '16px 14px 16px 12px',
  },
  addBtn: {
    color: '#929292',
    width: '52px !important',
    height: '100%',
    border: 'none',
    padding: 0,
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '18px',
    ':hover': {
      color: 'var(--primary-4)',
    },
  },
  navigate: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    color: '#929292',
    transition: 'all 0.5s linear',
    cursor: 'pointer',
    ':hover': {
      color: 'var(--primary-4)',
    },
  },
}));
