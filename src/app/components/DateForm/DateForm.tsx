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
import { format } from '../FormatDate/FormatDate';
import { UserSlice } from 'store/slice/userSlice';
import { useDispatch } from 'react-redux';

interface Props {
  hide: () => void;
  isShowing: boolean;
  height?: number | string;
  width?: number | string;
  translateX?: number | string;
  profile?: any;
}
export const DateForm = ({
  hide,
  isShowing,
  height,
  width,
  translateX,
  profile,
}: Props) => {
  // Global
  const dispatch = useDispatch();
  const { actions } = UserSlice();
  // Local
  const { classes } = DateFormStylyes();
  const [bgInput, setGbInput] = useState({ top: '', bottom: '' });
  const [colorPicker, setColorPicker] = useState(false);
  const [date, setDate] = useState<any>(new Date());
  const [hour, setHour] = useState<any>(new Date());
  const [minute, setMinute] = useState<any>(0);
  const [optionTime, setOptionTime] = useState<string>('hours');
  const [checked, setChecked] = useState(false);
  const [coming, setComing] = useState({
    title: '',
    content: '',
    address: '',
    remind: false,
    remindTime: '',
  });
  const handleInputInfoComing = e => {
    setComing({ ...coming, [e.target.name]: e.target.value });
  };
  const handleSaveComingDate = () => {
    const formatHours =
      hour.getHours() < 10 ? `0${hour.getHours()}` : hour.getHours();
    const formatMinutes =
      hour.getMinutes() < 10 ? `0${hour.getMinutes()}` : hour.getMinutes();
    dispatch(
      actions.updateComingList({
        date: format(date),
        list: [
          {
            title: coming.title,
            content: coming.content,
            address: coming.address,
            avatar: profile.picture[0],
            people: profile.nickname,
            color: bgInput.top ? bgInput.top : '#E46125',
            background: bgInput.bottom ? bgInput.bottom : '#FFE9E0',
            hour: `${formatHours}:${formatMinutes}`,
            remind: checked,
            remindTime: minute,
            optionTime: optionTime,
          },
        ],
      }),
    );
  };
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
              placeholder="set a name for this date"
              label="Title"
              name="title"
              onChange={e => handleInputInfoComing(e)}
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
              name="content"
              onChange={e => handleInputInfoComing(e)}
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
              name="address"
              onChange={e => handleInputInfoComing(e)}
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
                value={date}
                onChange={setDate}
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
                value={hour}
                onChange={setHour}
                className={classes.time}
              />
            </Flex>
          </Stack>
        </Card>
        <Group className={classes.save}>
          <Flex className={classes.remember}>
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
              label="Remind me before:"
              name="checkbox"
              onChange={event => setChecked(event.currentTarget.checked)}
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
                onChange={setMinute}
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
                value={optionTime}
                onChange={setOptionTime}
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
            <Button
              variant="gradient"
              className={classes.saveBtn}
              onClick={handleSaveComingDate}
            >
              Save the date
            </Button>
          </Card>
        </Group>
      </>
    </MyOverlay>,
    document.body,
  );
};
