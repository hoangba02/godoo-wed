import React, { useState } from 'react';
import { SwipeStyles } from './SwipeStyles';
import { Card, Container, Flex } from '@mantine/core';
import { useMediaQuery, useViewportSize } from '@mantine/hooks';

import Nav from './Nav';
import { FilterUser } from './FilterUser';
import SwipeTutorial from './SwipeTutorial';
import Draggable from '../Draggable/Draggable';
import { ReactComponent as Undo } from 'assets/icons/undo.svg';
import Control from './Control';

const DATA = [
  {
    userId: 1,
    nickname: 'nature1',
    profile: {
      picture: [
        'https://i.pinimg.com/236x/0d/39/dc/0d39dc251efd5694113e99b4ec077f0c.jpg',
        'https://i.pinimg.com/236x/72/f8/12/72f8122584d5ebc91d65682d38050ef4.jpg',
        'https://i.pinimg.com/236x/be/05/50/be0550911da79e4cc02e8b8fd16ca9a4.jpg',
        'https://i.pinimg.com/236x/3d/74/63/3d74639d40ae75295fd25719ce35b886.jpg',
      ],
    },
  },
  {
    userId: 2,
    nickname: 'nature2',
    profile: {
      picture: [
        'https://i.pinimg.com/236x/98/76/1b/98761b431a9f80b43199bb38d044b396.jpg',
        'https://i.pinimg.com/236x/0d/39/dc/0d39dc251efd5694113e99b4ec077f0c.jpg',
      ],
    },
  },
  {
    userId: 3,
    nickname: 'nature3',
    profile: {
      picture: [
        'https://i.pinimg.com/236x/24/55/5a/24555abc6290a637787a08110f8fbab9.jpg',
        'https://i.pinimg.com/236x/72/f8/12/72f8122584d5ebc91d65682d38050ef4.jpg',
        'https://i.pinimg.com/236x/01/ec/6b/01ec6b79228e3960abd78717e9159c3a.jpg',
      ],
    },
  },
  {
    userId: 4,
    nickname: 'natur4',
    profile: {
      picture: [
        'https://i.pinimg.com/236x/be/05/50/be0550911da79e4cc02e8b8fd16ca9a4.jpg',
        'https://i.pinimg.com/236x/24/55/5a/24555abc6290a637787a08110f8fbab9.jpg',
      ],
    },
  },
  {
    userId: 5,
    nickname: 'natur5',
    profile: {
      picture: [
        'https://i.pinimg.com/236x/af/1d/f9/af1df9d971e18030e7586f367870e44d.jpg',
        'https://i.pinimg.com/236x/01/ec/6b/01ec6b79228e3960abd78717e9159c3a.jpg',
        'https://i.pinimg.com/236x/0d/39/dc/0d39dc251efd5694113e99b4ec077f0c.jpg',
      ],
    },
  },
];
function Swipe() {
  const { classes } = SwipeStyles();
  const [active, setActive] = useState<number>();
  const { width, height } = useViewportSize();
  const tablet = useMediaQuery('(max-width:799px)');
  // console.log(active);

  return (
    <Container
      fluid
      className={classes.container}
      sx={{
        aspectRatio: '0.67',
        [`@media (max-width:575px)`]: {
          aspectRatio: `calc(${width}/${height - 65})`,
        },
      }}
    >
      <Flex className={classes.nav}>
        <button className={classes.btn}>
          <Undo />
        </button>
        {!tablet && <Nav active={active} lengths={3} />}
        <FilterUser />
      </Flex>
      <Flex
        sx={{
          width: '100%',
          height: 'calc(470px /0.69)',
        }}
        className={classes.overlay}
      >
        {DATA.map((draggable, index) => (
          <Draggable
            key={draggable.userId}
            setActive={setActive}
            data={draggable.profile.picture}
          />
        ))}
      </Flex>
      {!tablet && <Control />}
      <SwipeTutorial />
      {tablet && <Nav active={active} lengths={3} />}
    </Container>
  );
}

export default Swipe;
