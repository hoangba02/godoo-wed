import React, { useState } from 'react';
import { Modal, Button, Group, Stack, Text, createStyles } from '@mantine/core';
import { Link } from 'react-router-dom';
import { images } from 'assets/images';

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
  const { classes } = useStyles();

  return (
    <>
      <Modal
        styles={{
          modal: {
            width: 570,
            height: 'max-content',
            minHeight: 300,
            padding: '40px !important',
            backgroundImage: `url(${images.bgPopUp})`,
            backgroundSize: 'cover',
          },
        }}
        centered
        withCloseButton={btnClose}
        opened={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Stack align="center">
          {isTitle && <Text className={classes.text}>{title}</Text>}

          <img className={classes.img} src={img} alt="warn" />

          {isDesc && <Text className={classes.desc}>{desc}</Text>}
          <Link to="/login">
            {btnFunc && (
              <Button
                sx={{
                  fontSize: 20,
                  fontWeight: 600,
                  lineHeight: '25px',
                }}
                variant="gradient"
              >
                {textBtn}
              </Button>
            )}
          </Link>
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

const useStyles = createStyles(() => ({
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
    fontWeight: 400,
    fontSize: 24,
    lineHeight: '30px',
    marginTop: 40,
  },
}));
