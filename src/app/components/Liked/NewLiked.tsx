import React, { useEffect, useState } from 'react';
import { Box, createStyles, SimpleGrid } from '@mantine/core';
import LikedAccount from 'app/components/LikedAccount/LikedAccount';
import { useSelector } from 'react-redux';
import { getUserSelector } from 'store/slice/userSlice/selectors';
import { apiPost } from 'utils/http/request';

interface Props {
  status: string;
}
function NewLiked({ status }: Props) {
  // Global
  const user = useSelector(getUserSelector);
  // Local
  const { classes } = useStyles();
  const [likeMap, setLikeMap] = useState([]);
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
        setLikeMap(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [status]);
  return (
    <Box className={classes.container}>
      <SimpleGrid cols={2} className={classes.gird}>
        {likeMap.map((liked, index) => (
          <LikedAccount key={index} data={liked} isLiked={status} />
        ))}
      </SimpleGrid>
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
