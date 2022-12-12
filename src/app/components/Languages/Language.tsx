import React, { useState } from 'react';
import { forwardRef } from 'react';
import { IconChevronDown } from '@tabler/icons';
import { Group, Text, Select } from '@mantine/core';
import { ReactComponent as Vi } from 'assets/icons/vi.svg';
import { ReactComponent as En } from 'assets/icons/en.svg';

const data = [
  {
    image: <Vi />,
    label: `VIE`,
    value: 'vi',
  },

  {
    image: <En />,
    label: 'ENG',
    value: 'en',
  },
];

interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
  image: string;
  label: string;
  description: string;
}

const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ image, label, description, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        {image}
        <div>
          <Text size="sm">{label}</Text>
        </div>
      </Group>
    </div>
  ),
);

export default function Language() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <Select
      value={value}
      onChange={setValue}
      placeholder="Pick one"
      itemComponent={SelectItem}
      data={data}
      maxDropdownHeight={400}
      rightSection={<IconChevronDown size={14} />}
    />
  );
}
