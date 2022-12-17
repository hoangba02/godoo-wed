import React, { useState } from 'react';

import { useForm } from '@mantine/form';
import {
  NumberInput,
  TextInput,
  Button,
  Checkbox,
  createStyles,
  Center,
  BackgroundImage,
} from '@mantine/core';
import Modals from 'app/components/Modals';
import { images } from 'assets/images';
import UpLoad from 'app/components/UpLoad';

export default function Demo() {
  const { classes } = useStyles();
  const [checked, setChecked] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [urlImg, setUrlImg] = useState([]);

  return <></>;
}

const useStyles = createStyles(theme => ({
  button: {
    margin: 10,
  },
  input: {
    display: 'none',
  },
}));
