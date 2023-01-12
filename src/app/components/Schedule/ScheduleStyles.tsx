import { createStyles } from '@mantine/core';

export const ScheduleStyles = createStyles(() => ({
  header: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: 74,
    padding: '10px 20px !important',
    backgroundColor: 'var(--primary-4)',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
    position: 'relative',
  },
  backBtn: {
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    position: 'absolute',
    left: 20,
    bottom: 10,
  },
  title: {
    fontWeight: 600,
    fontSize: 24,
    lineHeight: '30px',
  },
  schedule: {
    position: 'static',
    height: 'calc(100% - 74px)',
    padding: '0 !important',
    backgroundColor: '#FFE9E0',
  },
  text: {
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '22px',
    color: 'var(--primary-1)',
  },
  coming: {
    backgroundColor: '#FFFFFF',
    borderRadius: '20px 20px 0px 0px',
    overflow: 'scroll',
  },
  calendar: {
    backgroundColor: '#FFE9E0',
    padding: '0 16px !important',
  },
  note: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: '20px',
    textAlign: 'center',
    color: '#929292',
  },
}));
