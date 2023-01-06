import React, { useState } from 'react';
import { ProfileStyles } from './ProfileStyles';
import MyOverlay from '../Layout/MyOverlay/MyOverlay';
import { createPortal } from 'react-dom';
import {
  Button,
  Card,
  Chip,
  Container,
  Flex,
  Group,
  Text,
} from '@mantine/core';
import MyCarousel, { BioDescription } from '../MyCarousel/MyCarousel';
import Nav from '../Swipe/Nav';

import { ReactComponent as Hide } from 'assets/icons/profile/Hide.svg';
import { ReactComponent as Like } from 'assets/icons/profile/Like.svg';
import { ReactComponent as Nope } from 'assets/icons/profile/Nope.svg';
import { ReactComponent as Report } from 'assets/icons/profile/Report.svg';
import { ReactComponent as Share } from 'assets/icons/profile/Share.svg';
import { ReactComponent as Unpair } from 'assets/icons/profile/Unpair.svg';

import { ReactComponent as Asexual } from 'assets/icons/gender/Asexual.svg';
import { ReactComponent as Bisexual } from 'assets/icons/gender/Bisexual.svg';
import { ReactComponent as Female } from 'assets/icons/gender/Female.svg';
import { ReactComponent as Gay } from 'assets/icons/gender/Gay.svg';
import { ReactComponent as Lesbian } from 'assets/icons/gender/Lesbian.svg';
import { ReactComponent as Male } from 'assets/icons/gender/Male.svg';
import { ReactComponent as Nonbinary } from 'assets/icons/gender/Nonbinary.svg';
import { ReactComponent as Transgender } from 'assets/icons/gender/Transgender.svg';

interface Props {
  hide: () => void;
  isShowing: boolean;
}
const genders = [
  {
    name: 'Women',
    icon: <Female />,
  },
  {
    name: 'Men',
    icon: <Male />,
  },
  {
    name: 'Bisexual',
    icon: <Bisexual />,
  },
  {
    name: 'Asexual',
    icon: <Asexual />,
  },
  {
    name: 'Gay',
    icon: <Gay />,
  },

  {
    name: 'Lesbian',
    icon: <Lesbian />,
  },

  {
    name: 'Nonbinary',
    icon: <Nonbinary />,
  },
  {
    name: 'Transgender',
    icon: <Transgender />,
  },
];
function Profile({ hide, isShowing }: Props) {
  const profiles = {
    userId: 5,
    nickname: 'natur5',
    profile: {
      picture: [
        'https://i.pinimg.com/236x/c9/5b/7c/c95b7c87811061e3e82b0b02ebd5c24d.jpg',
        'https://i.pinimg.com/236x/d8/29/d7/d829d71b48f5efbe37e4761e15a5aaf0.jpg',
        'https://i.pinimg.com/236x/09/d3/51/09d3513c96669399a6ccc3ddc1d0a012.jpg',
      ],
    },
  };
  const { classes } = ProfileStyles();
  const [active, setActive] = useState();
  if (!isShowing) return null;
  return createPortal(
    <MyOverlay hide={hide}>
      <>
        <Container fluid className={classes.carousel}>
          <MyCarousel setActive={setActive} data={profiles.profile.picture} />
          <Card className={classes.bio}>
            <BioDescription />
          </Card>
        </Container>
        <Nav active={active} lengths={3} />
        <Card className={classes.card}>
          <Text className={classes.title}>Gender</Text>
          <Group className={classes.gender}>
            <Chip.Group defaultChecked={false} position="center"></Chip.Group>
            {genders.map((gender, index) => (
              <Chip
                styles={{
                  label: {
                    padding: '0 14px ',
                  },
                }}
              >
                <Flex className={classes.chip}>
                  {gender.icon} {gender.name}
                </Flex>
              </Chip>
            ))}
          </Group>
        </Card>
        <ProfileOptions />
      </>
    </MyOverlay>,
    document.body,
  );
}

export default Profile;

export function ProfileOptions() {
  const { classes } = ProfileStyles();
  return (
    <Card className={classes.options}>
      <Flex
        sx={{
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <Button variant="subtle" className={classes.optionBtn}>
          <Unpair />
        </Button>
        <Flex>
          <Button variant="subtle" className={classes.optionBtn}>
            <Report />
          </Button>
        </Flex>
        <Button variant="subtle" className={classes.optionBtn}>
          <Share />
        </Button>
      </Flex>
    </Card>
  );
}
