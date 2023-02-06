import React from 'react';
import dayjs from 'dayjs';
import { useState } from 'react';
import { Calendar } from '@mantine/dates';
import { createStyles, useMantineTheme } from '@mantine/core';
import { ReactComponent as Arrow } from 'assets/icons/arrow.svg';

function Demo3() {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();
  const [value, setValue] = useState<Date | null>(new Date());
  console.log(value);
  return (
    <Calendar
      value={value}
      onChange={setValue}
      labelFormat="MMMM/YYYY"
      allowLevelChange={false}
      dayClassName={(date, modifiers) =>
        cx({
          [classes.outside]: modifiers.outside,
        })
      }
      // excludeDate={date => date.getTime() <= new Date().getTime()}
      // initialMonth={new Date()}
      dayStyle={(date, modifiers) =>
        date.getTime() + 86400000 < new Date().getTime()
          ? { color: '#A9A9A9' }
          : { color: '#000' }
      }
      styles={{
        day: {
          '&[data-selected]': {
            backgroundColor: '#FF9565',
            color: '#FFFFFF !important',
          },
        },
        weekday: {
          color: 'var(--primary-1)',
          fontWeight: 400,
          fontSize: 16,
          lineHeight: '20px',
        },
        month: {
          padding: '9px 14px',
          borderRadius: '16px',
          borderCollapse: 'separate',
          border: '1px solid var(--primary-4)',
        },
        calendarHeaderLevel: {
          color: 'var(--primary-1)',
          fontWeight: 600,
          fontSize: 16,
          lineHeight: '20px',
        },
        calendarHeaderControl: {
          width: 40,
          height: 40,
          color: 'var(--primary-1)',
        },
      }}
    />
  );
}

export default Demo3;

const useStyles = createStyles(theme => ({
  outside: {
    opacity: 0,
  },

  weekend: {
    color: `${theme.colors.blue[6]} !important`,
  },
}));
