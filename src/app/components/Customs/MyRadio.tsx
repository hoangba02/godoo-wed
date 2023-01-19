import { createStyles } from '@mantine/core';
import React from 'react';
import './MyRadio.css';

interface Props {
  value: string;
  label: string;
}
function MyRadio({ value, label }: Props) {
  const { classes } = useStyles();
  return (
    <div className="radio">
      <input id={value} name="radio" type="radio" />
      <label htmlFor={value} className="radio-label">
        <p className="label">{label}</p>
      </label>
    </div>
  );
}

export default MyRadio;

const useStyles = createStyles(() => ({}));
