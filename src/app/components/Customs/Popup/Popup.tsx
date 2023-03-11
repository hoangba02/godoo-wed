import React from 'react';
import { Avatar, createStyles, Modal, Stack, Text } from '@mantine/core';
import { images } from 'assets/images';
import { ReactComponent as XCircle } from 'assets/icons/x-circle.svg';
import { PopupProps } from 'types';
import { SubtleButton } from '../Button/SubtleButton';

function Popup({
  name,
  image,
  content,
  show,
  toggle,
  children,
  position = 0,
  isClose,
}: PopupProps) {
  const { classes } = useStyles({ position });
  return (
    <Modal
      centered
      opened={show}
      onClose={() => toggle(false)}
      closeOnClickOutside={false}
      withCloseButton={false}
      classNames={{
        root: classes.rootModal,
        modal: classes.modal,
      }}
    >
      {isClose && (
        <SubtleButton
          variant="subtle"
          className={classes.closeBtn}
          onClick={() => {
            toggle(false);
          }}
        >
          <XCircle />
        </SubtleButton>
      )}
      <Stack className={classes.container}>
        {name && <Text className={classes.name}>{name}</Text>}
        {image && <Avatar src={image} className={classes.img} />}
        <Text className={classes.content}>{content}</Text>
        {children}
      </Stack>
    </Modal>
  );
}

export default Popup;

const useStyles = createStyles((theme, { position }: PopupProps) => ({
  rootModal: {
    zIndex: 9999,
  },
  modal: {
    width: 570,
    borderRadius: 8,
    padding: '60px 22px 20px !important',
    backgroundImage: `url(${images.modal})`,
    transform: `${position} !important`,

    [`@media (max-width:575px)`]: {
      transform: `translate(0%) !important`,
    },
  },
  closeBtn: {
    width: 32,
    height: 32,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 2,
    right: 2,
    zIndex: 99,
    ':hover': {
      backgroundColor: 'transparent',
    },
  },
  container: {
    gap: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
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
  img: {
    width: 150,
    height: 150,
    [`@media (max-width:575px)`]: {
      width: 80,
      height: 80,
    },
  },
}));
