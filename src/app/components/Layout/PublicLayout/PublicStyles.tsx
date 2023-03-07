import { createStyles } from '@mantine/core';

export const makePublicStyles = createStyles(() => ({
  // LoginPage
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
    margin: '4px 0 16px',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '15px',
  },
  rightIcon: {
    right: 10,
  },
  errorLogin: {
    display: 'none',
  },
  inputIcon: {
    marginRight: 15,
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
    cursor: 'pointer',
  },
  rules: {
    margin: '6px 0 0 0',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '20px',
    '& span': {
      fontWeight: 600,
      cursor: 'pointer',
    },
  },
  loginBtn: {
    width: '50%',
    height: '52px !important',
    maxWidth: 269,
    marginTop: 50,
    [`@media (max-width: 575px)`]: {
      width: 200,
      marginTop: 28,
      height: '45px !important',
    },
  },
  or: {
    gap: 24,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  orText: {
    fontSize: 18,
    fontWeight: 600,
    lineHeight: '22px',
  },
  line: {
    width: 167,
    height: 1,
    backgroundColor: '#A9A9A9',
  },
  question: {
    fontSize: 18,
    fontWeight: 400,
    lineHeight: '22px',
    textAlign: 'center',
    marginTop: 28,
    '& span': {
      color: '#E46125',
      fontWeight: 600,
      textDecoration: 'underline',
      userSelect: 'none',
      cursor: 'pointer',
    },
    [`@media (max-width: 575px)`]: {
      marginTop: 18,
      fontSize: 14,
    },
  },

  // ForgotPage
  header: {
    alignItems: 'center',
    marginTop: 48,
    [`@media (max-width: 575px)`]: {
      marginTop: 0,
    },
  },
  backBtn: {},
  title: {
    fontWeight: 600,
    fontSize: 32,
    lineHeight: '40px',
    [`@media (max-width: 575px)`]: {
      fontWeight: 500,
      fontSize: 18,
      lineHeight: '22px',
    },
  },
  tutorial: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: '20px',
    marginBottom: 12,
    [`@media (max-width: 575px)`]: {
      fontWeight: 400,
      fontSize: 12,
      lineHeight: '15px',
    },
  },
  inputName: {},
  buttonInner: {
    justifyContent: 'flex-start',
  },
  buttonLabel: {
    gap: 16,
  },
  via: {
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '22px',
  },
  message: {
    background:
      'linear-gradient(81.84deg,#0099ff -9.4%,#a033ff 51.57%,#ff5280 84.07%,#ff7061 90.59%)',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
  },
  inputCode: {
    margin: '12px 0',
    border: '1px solid transparent',
    borderRadius: '8px',
    width: '70px !important',
    height: '78px',
    fontSize: '40px',
    color: '#000',
    fontWeight: 400,
    caretColor: 'blue',
    backgroundColor: '#FFE9E0',
    [`@media (max-width:575px)`]: {
      width: '46px !important',
      height: '56px',
    },
  },
  sendBtn: {
    width: 'max-content',
    padding: '0 8px',
    textDecoration: 'underline',
    color: '#000',
  },
  otpText: {
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: '22px',
    [`@media (max-width:575px)`]: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '18px',
    },
  },
}));
