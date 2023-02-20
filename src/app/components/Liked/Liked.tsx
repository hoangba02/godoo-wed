import { Container, Tabs } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserSlice } from 'store/slice/userSlice';
import { getUserSelector } from 'store/slice/userSlice/selectors';
import { LikedStyles } from './LikedStyles';
import NewLiked from './NewLiked';

interface Props {
  drawer?: boolean;
}
function Liked({ drawer }: Props) {
  const dispatch = useDispatch();
  const { actions } = UserSlice();
  const user = useSelector(getUserSelector);

  // Local
  const pointRef = useRef<any>(null);
  const { classes } = LikedStyles();
  const { width } = useViewportSize();
  const [amountLikedYou, setAmountLikedYou] = useState<number>(0);
  const [amountYouLiked, setAmountYouLiked] = useState<number>(0);

  useEffect(() => {
    setAmountYouLiked(user.youLikedList.length);
  }, [user.youLikedList]);
  useEffect(() => {
    setAmountLikedYou(user.likedYouList.length);
  }, [user.likedYouList]);

  useEffect(() => {
    dispatch(
      actions.setPoint({
        width: pointRef.current?.getBoundingClientRect().width,
        top: pointRef.current?.getBoundingClientRect().top,
        left: pointRef.current?.getBoundingClientRect().left,
        right: pointRef.current?.getBoundingClientRect().right,
        bottom: pointRef.current?.getBoundingClientRect().bottom,
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drawer]);
  return (
    <Container fluid className={classes.container}>
      <div ref={pointRef} className={classes.point} />
      <Tabs
        defaultValue="first"
        unstyled
        styles={{
          root: {
            width: '100%',
          },
          tabsList: {
            gap: 8,
            width: '100%',
            paddingBottom: 12,
            display: 'flex',
            justifyContent: 'space-around',
            borderBottom: '1px solid #FFE0D2',
          },
          tab: {
            width: '48%',
            height: 38,
            border: 'none',
            borderRadius: 8,
            padding: 0,
            color: '#E46125',
            fontSize: 16,
            fontWeight: 400,
            lineHeight: '20px',
            backgroundColor: '#F3F3F3',
            transition: 'none',
            '::before': {
              display: 'none',
            },
            ':hover': {
              color: '#E46125',
              backgroundColor: '#F3F3F3',
            },
            '&[data-active]': {
              color: '#FFFFFF',
              background:
                'linear-gradient(90deg, #E46125 -0.01%, #C91A44 100%)',
            },
            [`@media (max-width:575px)`]: {
              width: 165,
              height: '38px ',
            },
          },
          panel: {
            marginTop: 12,
          },
        }}
      >
        <Tabs.List>
          <Tabs.Tab value="first">Liked you ({`${amountLikedYou}`})</Tabs.Tab>
          <Tabs.Tab value="second">You liked ({`${amountYouLiked}`})</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="first">
          <NewLiked status="likedyou" />
        </Tabs.Panel>
        <Tabs.Panel value="second">
          <NewLiked status="youliked" />
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
}

export default Liked;
