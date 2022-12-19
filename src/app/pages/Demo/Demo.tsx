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
  const [checked, setChecked] = useState(true);
  console.log(checked);
  return (
    <div></div>
  );
}
