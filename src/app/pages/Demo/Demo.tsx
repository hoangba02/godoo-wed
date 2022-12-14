import React, { useState } from 'react';

import { useForm } from '@mantine/form';
import { NumberInput, TextInput, Button, Checkbox } from '@mantine/core';

export default function Demo() {
  const [checked, setChecked] = useState(true);
  const form = useForm({
    initialValues: { name: '', email: '', age: 0 },

    // functions will be used to validate values at corresponding key
    validate: {
      name: value =>
        value.length < 2 ? 'Name must have at least 2 letters' : null,
      email: value => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      age: value => (value < 18 ? 'You must be at least 18 to register' : null),
    },
  });

  return (
    <Checkbox
      checked={checked}
      onChange={event => setChecked(event.currentTarget.checked)}
      mt="md"
      color="orange.7"
      {...form.getInputProps('termsOfService', { type: 'checkbox' })}
    />
  );
}
