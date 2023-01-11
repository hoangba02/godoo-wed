import React, { useState } from 'react';
import { ProfileStyles } from './ProfileStyles';
import MyOverlay from '../Layout/MyOverlay/MyOverlay';
import { createPortal } from 'react-dom';
import {
  Box,
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
  status?: string;
  profile?: any;
  isSlide?: boolean;
  height?: number | string;
  width?: number | string;
  translateX?: number | string;
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
function Profile({
  hide,
  isShowing,
  status,
  profile,
  isSlide = true,
  height,
  width,
  translateX,
}: Props) {
  const { classes } = ProfileStyles();
  const [active, setActive] = useState();

  const listGender = genders.filter(value =>
    profile.gender.includes(value.name),
  );

  if (!isShowing) return null;
  return createPortal(
    <MyOverlay
      hide={hide}
      width={width}
      height={height}
      translateX={translateX}
    >
      <>
        {isSlide && (
          <>
            <Container fluid className={classes.carousel}>
              <MyCarousel setActive={setActive} data={profile} />
              <Card className={classes.bio}>
                <BioDescription data={profile} />
              </Card>
            </Container>
            <Nav active={active} data={profile} />
          </>
        )}
        <Card className={classes.card}>
          <Text className={classes.title}>Gender</Text>
          <Group className={classes.gender}>
            <Chip.Group defaultChecked={false} position="center"></Chip.Group>
            {listGender.map((gender, index) => (
              <Chip
                key={index}
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
        <Card className={classes.options}>
          <Flex
            sx={{
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            {status === undefined ? (
              <Button variant="subtle" className={classes.optionBtn}>
                <Unpair />
              </Button>
            ) : (
              <Button variant="subtle" className={classes.optionBtn}>
                <Hide />
              </Button>
            )}

            {status === undefined ? (
              <Flex>
                <Button variant="subtle" className={classes.optionBtn}>
                  <Report />
                </Button>
              </Flex>
            ) : status === 'likedyou' ? (
              <Flex>
                <Button variant="subtle" className={classes.optionBtn}>
                  <Nope />
                </Button>
                <Button variant="subtle" className={classes.optionBtn}>
                  <Like />
                </Button>
              </Flex>
            ) : null}

            <Button variant="subtle" className={classes.optionBtn}>
              <Share />
            </Button>
          </Flex>
        </Card>
      </>
    </MyOverlay>,
    document.body,
  );
}

export default Profile;

// export function ProfileOptions({}) {
//   const { classes } = ProfileStyles();
//   return (
//     <Card className={classes.options}>
//       <Flex
//         sx={{
//           justifyContent: 'space-around',
//           alignItems: 'center',
//         }}
//       >
//         <Button variant="subtle" className={classes.optionBtn}>
//           <Unpair />
//         </Button>
//         <Flex>
//           <Button variant="subtle" className={classes.optionBtn}>
//             <Report />
//           </Button>
//         </Flex>
//         <Button variant="subtle" className={classes.optionBtn}>
//           <Share />
//         </Button>
//       </Flex>
//     </Card>
//   );
// }
