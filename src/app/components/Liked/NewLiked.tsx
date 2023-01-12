import React, { useEffect, useState } from 'react';
import { Box, createStyles, SimpleGrid } from '@mantine/core';
import LikedAccount from 'app/components/LikedAccount/LikedAccount';
import { useDispatch, useSelector } from 'react-redux';
import { getUserSelector } from 'store/slice/userSlice/selectors';
import { apiPost } from 'utils/http/request';
import { UserSlice } from 'store/slice/userSlice';

interface Props {
  status: string;
}
function NewLiked({ status }: Props) {
  // Global
  const dispatch = useDispatch();
  const { actions } = UserSlice();
  const user = useSelector(getUserSelector);
  // Local
  const { classes } = useStyles();
  useEffect(() => {
    apiPost(
      `/v1/godoo/match/get${status}`,
      {
        quantity: 8,
      },
      {
        userid: user.id,
        token: user.token,
      },
    )
      .then(res => {
        if (status === 'youliked') {
          dispatch(actions.getYouLikedList(res.data));
        } else {
          dispatch(actions.getLikedYouList(res.data));
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <Box className={classes.container}>
      {status === 'youliked' ? (
        <SimpleGrid cols={2} className={classes.gird}>
          {user.youLikedList.map((liked, index) => (
            <LikedAccount key={index} data={liked} isLiked={status} />
          ))}
        </SimpleGrid>
      ) : (
        <SimpleGrid cols={2} className={classes.gird}>
          {user.likedYouList.map((liked, index) => (
            <LikedAccount key={index} data={liked} isLiked={status} />
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
}

export default NewLiked;

const useStyles = createStyles(() => ({
  container: {
    width: '100%',
    marginTop: 12,
  },
  gird: {
    gap: '12px 12px',
    justifyItems: 'center',
    [`@media (max-width:575px)`]: {
      gap: '8px',
    },
  },
}));
