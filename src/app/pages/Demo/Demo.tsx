import React, { useState } from 'react';

import { useForm } from '@mantine/form';
import {
  NumberInput,
  TextInput,
  Button,
  Checkbox,
  createStyles,
  Center,
} from '@mantine/core';
import Modals from 'app/components/Modals';
import { images } from 'assets/images';
import UpLoad from 'app/components/UpLoad';

export default function Demo() {
  const { classes } = useStyles();
  const [checked, setChecked] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  return (
    <Center>
      <UpLoad width={170} height={170} />
    </Center>
  );
}

const useStyles = createStyles(theme => ({
  button: {
    margin: 10,
  },
  input: {
    display: 'none',
  },
}));
