import { createStyles } from '@mantine/core';

export const makePublicStyles = createStyles(() => ({
  root: {
    marginBottom: 16,
  },
  input: {
    height: 52,
    borderRadius: '8px',
    marginTop: '8px',
    fontSize: '18px',
    '[type="password"]': {
      width: '100%',
      height: '100%',
      fontSize: '18px',
    },
    '[type="text"]': {
      height: '100%',
      fontSize: '18px',
    },
    '&:focus, &:focus-within': {
      borderColor: 'var(--primary-4)',
      backgroundColor: '#FFFFFF',
    },
    '&:-webkit-autofill,[type="password"]:-webkit-autofill': {
      boxShadow: '0 0 0px 1000px #FFFFFF inset',
    },
    [`@media (max-width:575px)`]: {
      marginTop: '4px',
      height: '45px',
      '[type="text"]': {
        height: '100%',
        fontSize: '16px',
      },
      '[type="password"]': {
        width: '100%',
        height: '100%',
        fontSize: '16px',
      },
    },
  },
  inputLabel: {
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '22.5px',
    [`@media (max-width:575px)`]: {
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: '20px',
    },
  },
  inputError: {
    color: '#FF0000',
    marginTop: '4px',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '15px',
  },
  save: {
    marginTop: 16,
    justifyContent: 'space-between',
  },
  forgot: {
    color: '#000',
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '20px',
  },
}));
