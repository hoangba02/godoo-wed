import React, { useState } from 'react';
import { ProfileStyles } from './ProfileStyles';
import MyOverlay from '../Layout/MyOverlay/MyOverlay';
import { createPortal } from 'react-dom';
import { Button, Card, Container, Flex, Group, Text } from '@mantine/core';
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
import { useDispatch, useSelector } from 'react-redux';
import { UserSlice } from 'store/slice/userSlice';
import { getUserSelector } from 'store/slice/userSlice/selectors';
import HideModal from '../Modals/HideModal';
import UnpairModal from '../Modals/UnpairModal';
import ReportModal from '../Modals/ReportModal';
import { images } from 'assets/images';
import AutoModal from '../Modals/AutoModal';

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
  const dispatch = useDispatch();
  const { actions } = UserSlice();
  const user = useSelector(getUserSelector);
  // Local
  const { classes } = ProfileStyles();
  const [active, setActive] = useState();
  const [hideModal, setHideModal] = useState(false);
  const [unpairModal, setUnpairModal] = useState(false);
  const [reportModal, setReportModal] = useState(false);
  const [autoModal, setAutoModal] = useState(false);
  const listGender = genders.filter(value =>
    profile.gender.includes(value.name),
  );
  const handleMatched = data => {
    dispatch(
      actions.requestLikeAction({
        id: user.id,
        token: user.token,
        user_2: data,
      }),
    );
  };
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
            {listGender.map((gender, index) => (
              <Flex
                key={index}
                sx={{
                  width: 'max-content',
                  padding: '2px 10px',
                  borderRadius: 200,
                  backgroundColor: '#FFE9E0',
                  border: '1px solid var(--primary-4)',
                }}
                className={classes.chip}
              >
                {gender.icon} {gender.name}
              </Flex>
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
              <Button
                variant="subtle"
                className={classes.optionBtn}
                onClick={() => setUnpairModal(true)}
              >
                <Unpair />
              </Button>
            ) : (
              <Button
                variant="subtle"
                className={classes.optionBtn}
                onClick={() => {
                  setHideModal(true);
                }}
              >
                <Hide />
              </Button>
            )}

            {status === undefined ? (
              <Flex>
                <Button
                  variant="subtle"
                  className={classes.optionBtn}
                  onClick={() => setReportModal(true)}
                >
                  <Report />
                </Button>
              </Flex>
            ) : status === 'likedyou' ? (
              <Flex>
                <Button variant="subtle" className={classes.optionBtn}>
                  <Nope />
                </Button>
                <Button
                  variant="subtle"
                  className={classes.optionBtn}
                  onClick={() => {
                    handleMatched(profile);
                  }}
                >
                  <Like />
                </Button>
              </Flex>
            ) : null}

            <Button variant="subtle" className={classes.optionBtn}>
              <Share />
            </Button>
          </Flex>
        </Card>
        <UnpairModal
          unpairModal={unpairModal}
          setUnpairModal={setUnpairModal}
        />
        <HideModal hideModal={hideModal} setHideModal={setHideModal} />
        <ReportModal
          reportId={profile.userId}
          reportModal={reportModal}
          setReportModal={setReportModal}
          setAutoModal={setAutoModal}
        />
        <AutoModal
          image={images.warn}
          autoModal={autoModal}
          notification="Our system has recieved your concern. We will keep an eye on this account!"
          setAutoModal={setAutoModal}
        />
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
