import { Button, createStyles, Flex } from '@mantine/core';
import React, { useEffect } from 'react';
import ModalLayout from './ModalLayout';

interface Props {
  hideModal: boolean;
  setHideModal: any;
}
function HideModal({ hideModal, setHideModal }: Props) {
  const { classes } = makeStyles();
  useEffect(() => {
    return () => {
      setHideModal(false);
    };
  }, []);
  return (
    <ModalLayout
      openModal={hideModal}
      setOpenModal={setHideModal}
      name="Hide"
      content="Never show this profile on my Swipe screen again"
    >
      <Flex
        sx={{
          gap: 20,
          width: '100%',
        }}
      >
        <Button className={classes.button} variant="outline">
          Hide now
        </Button>
        <Button
          className={classes.button}
          variant="gradient"
          onClick={() => setHideModal(false)}
        >
          Cancel
        </Button>
      </Flex>
    </ModalLayout>
  );
}

export default HideModal;
const makeStyles = createStyles(() => ({
  button: {
    height: 45,
    fontSize: 20,
    [`@media (max-width:575px)`]: {
      width: '145px !important',
    },
  },
}));
