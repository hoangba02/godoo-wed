import { Button, createStyles, Flex } from '@mantine/core';
import React from 'react';
import ModalLayout from './ModalLayout';

interface Props {
  unpairModal: boolean;
  setUnpairModal: any;
}
function UnpairModal({ unpairModal, setUnpairModal }: Props) {
  const { classes } = makeStyles();
  return (
    <ModalLayout
      position="translateX(35%)"
      openModal={unpairModal}
      setOpenModal={setUnpairModal}
      name="Unpair"
      content="This person is gonna disappear from your chat line. However, your profile still can be seen by each other on Swipe."
    >
      <Flex
        sx={{
          gap: 20,
          width: '100%',
          [`@media (max-width:575px)`]: {
            gap: 8,
            alignItems: 'center',
            flexDirection: 'column',
          },
        }}
      >
        <Button className={classes.button} variant="outline">
          Unpair
        </Button>
        <Button
          className={classes.button}
          variant="gradient"
          onClick={() => setUnpairModal(false)}
        >
          Unpair & Hide
        </Button>
      </Flex>
    </ModalLayout>
  );
}

export default UnpairModal;
const makeStyles = createStyles(() => ({
  button: {
    height: 45,
    fontSize: 20,
    [`@media (max-width:575px)`]: {
      width: '100%',
    },
  },
}));
