import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { ProfileStyles } from './ProfileStyles';
import MyOverlay from '../Layout/MyOverlay/MyOverlay';
import { useDispatch, useSelector } from 'react-redux';
import MyCarousel, { BioDescription } from '../MyCarousel/MyCarousel';
import { Button, Card, Container, Flex, Group, Text } from '@mantine/core';

import Nav from '../Swipe/Nav';
import { UserSlice } from 'store/slice/userSlice';
import HideModal from '../Modals/HideModal';
import UnpairModal from '../Modals/UnpairModal';
import ReportModal from '../Modals/ReportModal';
import { images } from 'assets/images';
import AutoModal from '../Modals/AutoModal';
import { getUserSelector } from 'store/slice/userSlice/selectors';
import { ReactComponent as Hide } from 'assets/icons/profile/Hide.svg';
import { ReactComponent as Like } from 'assets/icons/profile/Like.svg';
import { ReactComponent as Nope } from 'assets/icons/profile/Nope.svg';
import { ReactComponent as Report } from 'assets/icons/profile/Report.svg';
import { ReactComponent as Share } from 'assets/icons/profile/Share.svg';
import { ReactComponent as Unpair } from 'assets/icons/profile/Unpair.svg';
import GendersList, { genders } from '../GendersList/GendersList';

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
          <GendersList profile={profile} />
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
