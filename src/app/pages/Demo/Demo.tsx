import React from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Button, Group } from '@mantine/core';
import { randomId } from '@mantine/hooks';
import { handleClearSpecialCharacter } from 'app/components/ConvertLang/ConvertLang';

export default function Demo() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
    },
  });
  const handleConvertEng = e => {
    let a = handleClearSpecialCharacter(e.target.value.toLowerCase());
    console.log(a);
    form.setValues({
      email: a,
    });
    console.log(form.values.email);
  };
  return (
    <div style={{ maxWidth: 320, margin: 'auto' }}>
      <TextInput
        label="Name"
        placeholder="Name"
        {...form.getInputProps('name')}
      />
      <TextInput
        mt="md"
        label="Email"
        placeholder="Email"
        {...form.getInputProps('email')}
        onChange={e => {
          handleConvertEng(e);
        }}
      />

      <Group position="center" mt="xl">
        <Button
          variant="outline"
          onClick={() =>
            form.setValues({
              name: randomId(),
              email: `${randomId()}@test.com`,
            })
          }
        >
          Set random values
        </Button>
      </Group>
    </div>
  );
}
