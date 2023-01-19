import React, { useState } from 'react';
import { Button, createStyles, Flex, Modal, Stack, Text } from '@mantine/core';
import { images } from 'assets/images';
import { ReactComponent as XCircle } from 'assets/icons/xCircle.svg';

interface Props {
  name?: string;
  content?: string;
  openModal?: any;
  setOpenModal?: any;
  children?: JSX.Element;
  position?: string | number;
}
function ModalLayout({
  name,
  content,
  openModal,
  setOpenModal,
  children,
  position,
}: Props) {
  const { classes } = useStyles();
  return (
    <Modal
      centered
      opened={openModal}
      onClose={() => setOpenModal(false)}
      closeOnClickOutside={false}
      withCloseButton={false}
      styles={{
        root: {
          zIndex: 9999,
        },
        modal: {
          width: 570,
          borderRadius: 8,
          padding: '60px 16px 20px !important',
          backgroundImage: `url(${images.bgPopUp})`,
          transform: `${position} !important`,

          [`@media (max-width:575px)`]: {
            transform: `translate(0%) !important`,
          },
        },
      }}
    >
      <Button
        variant="subtle"
        className={classes.closeBtn}
        onClick={() => setOpenModal(false)}
      >
        <XCircle />
      </Button>
      <Stack className={classes.container}>
        <Text className={classes.name}>{name}</Text>
        <Text className={classes.content}>{content}</Text>
        {children}
      </Stack>
    </Modal>
  );
}

export default ModalLayout;

const useStyles = createStyles(() => ({
  closeBtn: {
    width: '32px !important',
    height: '32px !important',
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 16,
    right: 16,
    ':hover': {
      backgroundColor: 'transparent',
    },
  },
  container: {
    width: '100%',
    justifyContent: 'center',
    textAlign: 'center',
  },
  name: {
    fontWeight: 600,
    fontSize: 48,
    lineHeight: '60px',
    [`@media (max-width:575px)`]: {
      fontSize: 32,
      lineHeight: '40px',
    },
  },
  content: {
    fontWeight: 400,
    fontSize: 24,
    lineHeight: '30px',
    [`@media (max-width:575px)`]: {
      fontSize: 14,
      lineHeight: '18px',
    },
  },
}));
