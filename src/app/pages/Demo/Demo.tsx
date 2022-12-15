import React, { useState } from 'react';

import { useForm } from '@mantine/form';
import { NumberInput, TextInput, Button, Checkbox } from '@mantine/core';
import Modals from 'app/components/Modals';
import { images } from 'assets/images';

export default function Demo() {
  const [checked, setChecked] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  return (
    <Modals
      btnFunc={false}
      isBtn={false}
      openModal={openModal}
      setOpenModal={setOpenModal}
      isDesc={true}
      desc="Đổi mật khẩu thành công"
      img={images.success}
    />
  );
}
