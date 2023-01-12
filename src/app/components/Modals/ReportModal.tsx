import { Button, createStyles, Flex, Group, Radio, Stack } from '@mantine/core';
import React from 'react';
import ModalLayout from '../Layout/Modal/ModalLayout';

interface Props {
  reportModal: boolean;
  setReportModal: any;
}
function ReportModal({ reportModal, setReportModal }: Props) {
  const { classes } = useStyles();
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
        }}
      >
        <Group
          sx={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '0 80px',
          }}
          className={classes.radio}
        >
          <Radio value="one" label="Fake account" />
          <Radio value="two" label="This person is disturbing me" />
          <Radio
            value="three"
            label="Toxic profile (sex, violence, disgusting content, ...)"
          />
        </Group>
        <Button
          className={classes.button}
          variant="gradient"
          onClick={() => setReportModal(false)}
        >
          Send
        </Button>
      </Stack>
    </ModalLayout>
  );
}

export default ReportModal;
const useStyles = createStyles(() => ({
  button: {
    width: '100%',
    height: 52,
    fontSize: 20,
  },
  radio: {
    alignItems: 'flex-start',
    padding: '0 40px',
  },
}));
