import React, { memo, useState } from 'react';
import { Button, Checkbox, Stack } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

interface Props {
  tab: string;
}
function NextTab({ tab }: Props) {
  const navigate = useNavigate();
  const [checked, setChecked] = useState<boolean>(false);
  const handleNextTab = () => {
    navigate(`/about/profile/more/${tab}`);
  };
  return (
    <Stack
      sx={{
        gap: 4,
        width: 570,
        position: 'absolute',
        bottom: '20%',
      }}
    >
      <Checkbox
        checked={checked}
        styles={{
          root: {
            height: '100%',
            display: 'flex',
            alignItems: 'flex-end',
          },
          label: {
            color: checked ? '#FF9565' : '#000',
          },
        }}
        color="orange.8"
        label="Show on my profile"
        name="checkbox"
        onChange={event => setChecked(event.currentTarget.checked)}
      />
      <Button
        sx={{
          width: '100%',
          height: '45px !important',
        }}
        variant="gradient"
        onClick={handleNextTab}
      >
        Next
      </Button>
    </Stack>
  );
}

export default memo(NextTab);
