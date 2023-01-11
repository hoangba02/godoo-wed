import { createStyles } from '@mantine/core';

export const DateFormStylyes = createStyles(() => ({
  header: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 74,
    padding: '10px 20px !important',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
    borderBottom: '1px solid #FF9565',
  },
  datebtn: {
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  title: {
    fontWeight: 600,
    fontSize: 24,
    lineHeight: '30px',
  },
  form: {
    backgroundColor: 'transparent',
  },
  time: {
    flex: 1,
  },
}));
