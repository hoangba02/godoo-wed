import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { images } from 'assets/images';
import { Modal, Button, Group, Stack, Text, createStyles } from '@mantine/core';
import { ReactComponent as XCircle } from 'assets/icons/xCircle.svg';

interface Props {
  btnClose?: boolean;
  img?: string;
  desc?: string;
  title?: string;
  isDesc?: boolean;
  isTitle?: boolean;
  openModal?: any;
  btnFunc?: boolean;
  isBtn?: boolean;
  textBtn?: string;
  setOpenModal?: any;
}
function Modals({
  img,
  desc,
  isDesc,
  title,
  isTitle,
  textBtn,
  openModal,
  setOpenModal,
  btnClose,
  btnFunc,
  isBtn,
}: Props) {
  const { classes } = makeStyles();
  const navigate = useNavigate();
  return (
    <>
      <Modal
        styles={{
          modal: {
            width: 570,
            height: 468,
            minHeight: 300,
            backgroundColor: 'var(--whilte)',
          },
        }}
        centered
        withCloseButton={btnClose}
        opened={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Stack
          sx={{
            alignItems: 'center',
            position: 'absolute',
            inset: 0,
            padding: '56px 43.5px 0 !important',
            zIndex: 4,
            backgroundColor: '#FFFFFF',
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
          <button
            className={classes.closse}
            onClick={() => setOpenModal(false)}
          >
            <XCircle />
          </button>
          {isTitle && <Text className={classes.text}>{title}</Text>}

          <img className={classes.img} src={img} alt="warn" />

          {isDesc && <Text className={classes.desc}>{desc}</Text>}
          {btnFunc && (
            <Button
              sx={{
                width: '100%',
                fontSize: 20,
                fontWeight: 600,
                lineHeight: '25px',
                marginTop: 50,
              }}
              variant="gradient"
              onClick={() => navigate('/register')}
            >
              {textBtn}
            </Button>
          )}
        </Stack>
      </Modal>

      {isBtn && (
        <Group position="center">
          <Button onClick={() => setOpenModal(true)}>Open Modal</Button>
        </Group>
      )}
    </>
  );
}

export default Modals;

const makeStyles = createStyles(() => ({
  modal: {
    alignItems: 'center',
    position: 'absolute',
    inset: 0,
    padding: '56px 43.5px 0 !important',
    zIndex: 4,
  },
  closse: {
    position: 'absolute',
    right: 24,
    top: 24,
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  text: {
    textAlign: 'center',
    fontWeight: 400,
    fontSize: 24,
    lineHeight: '30px',
  },
  img: {
    width: 150,
    height: 150,
  },
  desc: {
    textAlign: 'center',
    fontWeight: 400,
    fontSize: 24,
    lineHeight: '30px',
    marginTop: 40,
  },
}));
