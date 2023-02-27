import React, { useEffect } from 'react';
import { images } from 'assets/images';
import { Modal, Stack, Text, createStyles, Image } from '@mantine/core';

interface Props {
  image: string;
  autoModal?: any;
  setAutoModal?: any;
  notification: string;
  translateX: number | string;
}
function AutoModal({
  image,
  autoModal,
  setAutoModal,
  notification,
  translateX,
}: Props) {
  const { classes } = useStyles();
  useEffect(() => {
    if (!autoModal) {
      return;
    } else {
      setTimeout(function () {
        setAutoModal(false);
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoModal]);
  useEffect(() => {
    return () => {
      setAutoModal(false);
    };
  }, []);
  return (
    <>
      <Modal
        styles={{
          root: {
            zIndex: 99999,
          },
          modal: {
            width: 570,
            height: 300,
            backgroundColor: 'var(--white)',
            transform: `translateX(${translateX}) !important`,
            [`@media (max-width:575px)`]: {
              transform: 'translateX(0%) !important',
            },
          },
        }}
        closeOnClickOutside={false}
        centered
        opened={autoModal}
        onClose={() => setAutoModal(false)}
      >
        <Stack
          sx={{
            alignItems: 'center',
            position: 'absolute',
            inset: 0,
            borderRadius: 8,
            padding: '30px 43.5px 0 !important',
            backgroundColor: '#FFFFFF',
            zIndex: 4,
            '::before': {
              content: '""',
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${images.bgPopUp})`,
              backgroundSize: 'cover',
              zIndex: -1,
            },
          }}
          className={classes.modal}
        >
          <Image width={150} height={150} src={image} alt="warn" />
          <Text className={classes.text}>{notification}</Text>
        </Stack>
      </Modal>
    </>
  );
}

export default AutoModal;

const useStyles = createStyles(() => ({
  modal: {
    alignItems: 'center',
    position: 'absolute',
    inset: 0,
    padding: '56px 43.5px 0 !important',
  },
  text: {
    textAlign: 'center',
    fontWeight: 400,
    fontSize: 24,
    lineHeight: '30px',
  },
}));
