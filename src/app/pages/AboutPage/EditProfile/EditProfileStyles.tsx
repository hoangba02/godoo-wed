import { createStyles } from '@mantine/core';

export const EditProfileStyles = createStyles(() => ({
  container: {
    width: 570,
    height: '100%',
    maxWidth: '100%',
    paddingTop: 24,
    overflow: 'scroll',
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
    fontWeight: 500,
    fontSize: 18,
    lineHeight: '22px',
    marginTop: 18,
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
}));
