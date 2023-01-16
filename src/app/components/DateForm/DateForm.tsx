import React, { useState } from 'react';
import MyOverlay from '../Layout/MyOverlay/MyOverlay';
import { createPortal } from 'react-dom';
import {
  Box,
  Button,
  Card,
  Checkbox,
  Flex,
  Group,
  NumberInput,
  SegmentedControl,
  Stack,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core';
import { DatePicker, TimeInput } from '@mantine/dates';

import { DateFormStylyes } from './DateFormStyles';
import { ReactComponent as ArrowLeft } from 'assets/icons/arrowLeft.svg';
import { ReactComponent as Gradient } from 'assets/icons/chat/gradient.svg';
import { ReactComponent as Calendar } from 'assets/icons/chat/calendarMini.svg';
import { ReactComponent as Clock } from 'assets/icons/chat/clock.svg';
import ColorPicker from '../ColorPicker/ColorPicker';

interface Props {
  hide: () => void;
  isShowing: boolean;
  height?: number | string;
  width?: number | string;
  translateX?: number | string;
}
export const DateForm = ({
  hide,
  isShowing,
  height,
  width,
  translateX,
}: Props) => {
  const { classes } = DateFormStylyes();
  const [bgInput, setGbInput] = useState({ top: '', bottom: '' });
  const [colorPicker, setColorPicker] = useState(false);
  const [now, setNow] = useState<any>(new Date());
  const [minute, setMinute] = useState<any>(0);
  const [optionTime, setOptionTime] = useState<string>('hours');
  const [checked, setChecked] = useState(false);
  if (!isShowing) return null;
  return createPortal(
    <MyOverlay
      hide={hide}
      width={width}
      height={height}
      translateX={translateX}
      fullScreen
    >
      <>
        <Flex className={classes.header}>
          <button className={classes.dateBtn} onClick={hide}>
            <ArrowLeft />
          </button>
          <Text className={classes.title}>Add a date</Text>
          <button
            className={classes.dateBtn}
            onClick={() => {
              setColorPicker(prev => !prev);
            }}
          >
            {bgInput.top !== '' ? (
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  background: bgInput.top || '#FFFFFF',
                }}
              />
            ) : (
              <Gradient />
            )}
          </button>
          {colorPicker && (
            <Card className={classes.picker}>
              <ColorPicker
                setColorPicker={setColorPicker}
                setGbInput={setGbInput}
              />
            </Card>
          )}
        </Flex>
        <Card className={classes.form}>
          <Stack>
            <TextInput
              styles={{
                input: {
                  height: 45,
                  backgroundColor: bgInput.top,
                  '::placeholder': {
                    color: bgInput.top && 'var(--black)',
                  },
                },
              }}
              withAsterisk
              label="Title"
              placeholder="set a name for this date"
            />
            <TextInput
              styles={{
                input: {
                  height: 45,
                  backgroundColor: bgInput.top,
                  '::placeholder': {
                    color: bgInput.top && 'var(--black)',
                  },
                },
              }}
              label="Invitation to your partner"
              placeholder="say something ..."
            />
            <Textarea
              styles={{
                input: {
                  height: 'auto',
                  backgroundColor: bgInput.top,
                  '::placeholder': {
                    color: bgInput.top && 'var(--black)',
                  },
                  [`@media (max-width:575px)`]: {
                    height: 'auto',
                  },
                },
              }}
              minRows={2}
              maxRows={2}
              withAsterisk
              label="Address"
              placeholder="type place you and your partner are going to"
            />
            <Flex gap={6} justify="space-between">
              <DatePicker
                styles={{
                  input: {
                    height: '45px !important',
                    textAlign: 'center',
                    backgroundColor: bgInput.top,
                    '::placeholder': {
                      color: bgInput.top && 'var(--black)',
                    },
                  },
                }}
                placeholder="Pick date"
                label="Date & Time"
                withAsterisk
                value={now}
                onChange={setNow}
                inputFormat="DD/MM/YYYY"
                labelFormat="MM/YYYY"
                clearable={false}
                icon={<Calendar />}
                className={classes.time}
              />
              <TimeInput
                styles={{
                  controls: {
                    height: '100%',
                    justifyContent: 'center',
                  },
                  input: {
                    backgroundColor: bgInput.top,
                    height: '45px !important',
                    '::placeholder': {
                      color: bgInput.top && 'var(--black)',
                    },
                  },
                }}
                label="Pick time"
                placeholder="Pick time"
                icon={<Clock />}
                value={now}
                onChange={setNow}
                className={classes.time}
              />
            </Flex>
          </Stack>
        </Card>
        <Group className={classes.save}>
          <Flex className={classes.remember}>
            <Checkbox
              checked={checked}
              onChange={event => setChecked(event.currentTarget.checked)}
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
              label="Remind me before:"
            />
            <Flex gap={16} align="center">
              <NumberInput
                styles={{
                  input: {
                    color: 'var(--primary-1)',
                    textAlign: 'center',
                    width: '34px !important',
                    minHeight: 24,
                    height: 24,
                    fontSize: 12,
                    fontWeight: 500,
                    background: checked ? '#FFE9E0' : '#EAEAEA',
                    padding: 0,
                    margin: 0,
                    [`@media (max-width:575px)`]: {
                      height: 24,
                    },
                  },
                }}
                value={minute}
                onChange={() => {
                  if (minute < 10) {
                    setMinute(prev => '0' + prev);
                  }
                }}
                hideControls
              />
              <SegmentedControl
                styles={{
                  root: {
                    width: 117,
                    height: 24,
                    borderRadius: 8,
                  },
                  label: {
                    padding: '0 2.5px',
                    fontSize: 12,
                    borderRadius: 8,
                  },
                }}
                size="sm"
                color={checked ? 'orange.7' : 'gray.5'}
                // value={optionTime}
                // onChange={setOptionTime}
                transitionDuration={500}
                data={[
                  { label: 'Minutes', value: 'minutes' },
                  { label: 'Hours', value: 'hours' },
                ]}
              />
            </Flex>
          </Flex>
          <Card
            sx={{
              width: '100%',
              background: '#FFE9E0',
            }}
          >
            <Button variant="gradient" className={classes.saveBtn}>
              Save the date
            </Button>
          </Card>
        </Group>
      </>
    </MyOverlay>,
    document.body,
  );
};
