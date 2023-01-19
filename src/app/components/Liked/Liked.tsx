import { Container, Tabs } from '@mantine/core';
import React, { useState } from 'react';
import { LikedStyles } from './LikedStyles';
import NewLiked from './NewLiked';

function Liked() {
  const { classes } = LikedStyles();
  const [amountLikedYou, setAmountLikedYou] = useState(0);
  const [amountYouLiked, setAmountYouLiked] = useState(0);

  return (
    <Container fluid className={classes.container}>
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
          <NewLiked status="likedyou" setAmountLikedYou={setAmountLikedYou} />
        </Tabs.Panel>
        <Tabs.Panel value="second">
          <NewLiked status="youliked" setAmountYouLiked={setAmountYouLiked} />
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
}

export default Liked;
