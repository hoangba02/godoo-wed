import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Card, Flex, Text } from '@mantine/core';
import { ScheduleStyles } from './ScheduleStyles';
import MyOverlay from '../Layout/MyOverlay/MyOverlay';
import Calendar from '../Calendar/Calendar';
import { ReactComponent as ArrowLeft } from 'assets/icons/arrowLeft.svg';
import ListComing from '../ListComing/ListComing';
import { format } from '../FormatDate/FormatDate';
import { useSelector } from 'react-redux';
import { getUserSelector } from 'store/slice/userSlice/selectors';

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
function Schedule({ hide, isShowing }) {
  // Global
  const user = useSelector(getUserSelector);
  // Local
  const { classes } = ScheduleStyles();
  const [day, setDay] = useState<Date>(new Date());
  const [list, setList] = useState<any>([]);

  useEffect(() => {
    const comingList = user.comingList.find(item => {
      if (format(day) === item.date) return item;
    });
    setList(comingList?.list);
  }, [day]);
  if (!isShowing) return null;
  return createPortal(
    <MyOverlay hide={hide} fullScreen>
      <>
        <Flex className={classes.header}>
          <button className={classes.backBtn} onClick={hide}>
            <ArrowLeft />
          </button>
          <Text className={classes.title}>My Schedule</Text>
        </Flex>
        <Card className={classes.schedule}>
          <Card className={classes.calendar}>
            <Calendar day={day} setDay={setDay} />
          </Card>
          <Card
            sx={{
              height: 'calc(100% - 315px)',
            }}
            className={classes.coming}
          >
            <Text className={classes.text}>Upcoming</Text>
            <ListComing comings={list} />
          </Card>
        </Card>
      </>
    </MyOverlay>,
    document.body,
  );
}

export default Schedule;
