import React from 'react';
import { useForm } from '@mantine/form';
import {
  TextInput,
  Button,
  Group,
  Container,
  BackgroundImage,
  Card,
} from '@mantine/core';
import { randomId } from '@mantine/hooks';
import { handleClearSpecialCharacter } from 'app/components/ConvertLang/ConvertLang';
import { images } from 'assets/images';

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
    <Container
      fluid
      sx={{
        height: '100%',
        // backgroundColor: 'var(--grey)',
        position: 'relative',
        backgroundImage: `url(${images.bgLogin})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent',
          backgroundImage: `url(${images.bgLoginTop})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          zIndex: 2,
        },
      }}
    >
      <Card
        sx={{
          width: 720,
          height: '915px',
          position: 'relative',
          backgroundColor: '#FFFFFF',
        }}
      >
        <Card
          sx={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            zIndex: 3,
            backgroundColor: 'transparent',
          }}
        >
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
        </Card>
      </Card>
    </Container>
  );
}
