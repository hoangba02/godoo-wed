import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Button, createStyles, Group, Stack } from '@mantine/core';
import { getUserSelector } from 'store/slice/userSlice/selectors';
import { apiPost } from 'utils/http/request';
import MyRadio from '../Customs/MyRadio/MyRadio';
import ModalLayout from './ModalLayout';

interface Props {
  reportModal: boolean;
  setReportModal: any;
  reportId: number;
  setAutoModal?: any;
}
function ReportModal({
  reportModal,
  setReportModal,
  reportId,
  setAutoModal,
}: Props) {
  const { classes } = makeStyles();
  const user = useSelector(getUserSelector);
  const handleReportUser = () => {
    apiPost(
      '/v1/godoo/match/report',
      {
        user_id_2: reportId,
      },
      {
        headers: {
          userid: user.id,
          token: user.token,
        },
      },
    )
      .then(res => {
        console.log(res);
        setAutoModal(true);
        setReportModal(false);
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => {
    return () => {
      setReportModal(false);
    };
  }, []);
  return (
    <ModalLayout
      position="translateX(35%)"
      openModal={reportModal}
      setOpenModal={setReportModal}
      name="Report"
      content="Seems like there’s something about this person makes you feel uncomfortable."
    >
      <Stack
        sx={{
          gap: 20,
          width: '100%',
          [`@media (max-width:575px)`]: {
            alignItems: 'center',
          },
        }}
      >
        <Group
          sx={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '0 80px',
            [`@media (max-width:575px)`]: {
              gap: 0,
              padding: '0 20px',
            },
          }}
        >
          <MyRadio value="one" label="Fake account" />
          <MyRadio value="two" label="This person is disturbing me" />
          <MyRadio
            value="three"
            label="Toxic profile (sex, violence, disgusting content, ...)"
          />
        </Group>
        <Button
          className={classes.button}
          variant="gradient"
          onClick={handleReportUser}
        >
          Send
        </Button>
      </Stack>
    </ModalLayout>
  );
}

export default ReportModal;
const makeStyles = createStyles(() => ({
  button: {
    width: '100%',
    height: 52,
    fontSize: 20,
  },
}));
