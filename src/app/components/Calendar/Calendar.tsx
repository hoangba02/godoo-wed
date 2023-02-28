import React, { useEffect } from 'react';
import { Calendar } from '@mantine/dates';
import { createStyles } from '@mantine/core';
import Marked from '../Marked/Marked';
import { format } from '../FormatDate/FormatDate';
import { useSelector } from 'react-redux';
import { getUserSelector } from 'store/slice/userSlice/selectors';

interface Props {
  day: Date | null;
  setDay: any;
}
const COMMINGS = [
  {
    dateId: '16012023',
    date: '16/01/2023',
    list: [
      {
        title: 'Cafe Dating',
        content: 'Có làm người yêu em không?',
        address: 'Kayla Cafe - 101 Cầu giấy Hà Nội',
        avatar:
          'https://i.pinimg.com/236x/fe/d7/93/fed793198a515471a728c4dba8397f56.jpg',
        people: 'Anna',
        color: '#00AECC',
        background: '#DCFAFF',
        hour: '19:20',
      },
      {
        title: 'Cafe Dating',
        content: 'Có làm người yêu em không?',
        address: 'Kayla Cafe - 101 Cầu giấy Hà Nội',
        avatar:
          'https://i.pinimg.com/236x/fe/d7/93/fed793198a515471a728c4dba8397f56.jpg',
        people: 'Anna',
        color: '#F11FA5',
        background: '#FFE4F5',
        hour: '21:20',
      },
      {
        title: 'Cafe Dating',
        content: 'Có làm người yêu em không?',
        address: 'Kayla Cafe - 101 Cầu giấy Hà Nội',
        avatar:
          'https://i.pinimg.com/236x/fe/d7/93/fed793198a515471a728c4dba8397f56.jpg',
        people: 'Anna',
        color: '#46DF9F',
        background: '#DCFCEF',
        hour: '20:20',
      },
    ],
  },
  {
    dateId: '31012023',
    date: '31/01/2023',
    list: [
      {
        title: 'Cafe Dating',
        content: 'Có làm người yêu em không?',
        address: 'Kayla Cafe - 101 Cầu giấy Hà Nội',
        avatar:
          'https://i.pinimg.com/236x/fe/d7/93/fed793198a515471a728c4dba8397f56.jpg',
        people: 'Anna',
        color: '#46DF9F',
        background: '#DCFCEF',
        hour: '19:20',
      },
      {
        title: 'Cafe Dating',
        content: 'Có làm người yêu em không?',
        address: 'Kayla Cafe - 101 Cầu giấy Hà Nội',
        avatar:
          'https://i.pinimg.com/236x/fe/d7/93/fed793198a515471a728c4dba8397f56.jpg',
        people: 'Anna',
        color: '#00AECC',
        background: '#DCFAFF',
        hour: '21:20',
      },
      {
        title: 'Cafe Dating',
        content: 'Có làm người yêu em không?',
        address: 'Kayla Cafe - 101 Cầu giấy Hà Nội',
        avatar:
          'https://i.pinimg.com/236x/fe/d7/93/fed793198a515471a728c4dba8397f56.jpg',
        people: 'Anna',
        color: '#F11FA5',
        background: '#FFE4F5',
        hour: '20:20',
      },
      {
        title: 'Cafe Dating',
        content: 'Có làm người yêu em không?',
        address: 'Kayla Cafe - 101 Cầu giấy Hà Nội',
        avatar:
          'https://i.pinimg.com/236x/fe/d7/93/fed793198a515471a728c4dba8397f56.jpg',
        people: 'Anna',
        color: '#46DF9F',
        background: '#DCFCEF',
        hour: '19:20',
      },
    ],
  },
];
function MyCalendar({ day, setDay }: Props) {
  // Global
  const user = useSelector(getUserSelector);
  // Local
  const { classes, cx } = makeStyles();

  return (
    <Calendar
      value={day}
      onChange={setDay}
      labelFormat="MMMM/YYYY"
      allowLevelChange={false}
      dayClassName={(date, modifiers) =>
        cx({
          [classes.outside]: modifiers.outside,
        })
      }
      dayStyle={date =>
        date.getTime() + 86400000 < new Date().getTime()
          ? { color: '#A9A9A9' }
          : { color: '#000' }
      }
      renderDay={date => {
        const time = format(date);
        const comingList = user.comingList.find(coming => {
          if (coming.date === time) return coming;
        });
        return (
          <Marked comings={comingList?.list}>
            <div>{date.getDate()}</div>
          </Marked>
        );
      }}
      styles={{
        day: {
          width: 43,
          height: 33,
          transform: 'translateX(6.5px)',
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
          width: '100%',
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
          ':hover': {
            background: 'transparent',
          },
          '& svg': {
            width: '24px !important',
            height: '24px !important',
          },
        },
        calendarBase: {
          display: 'initial',
        },
        calendarHeader: {
          margin: '4px 0',
        },
      }}
    />
  );
}

export default MyCalendar;

const makeStyles = createStyles(theme => ({
  outside: {
    opacity: 0,
  },

  weekend: {
    color: `${theme.colors.blue[6]} !important`,
  },
}));
