import React, { useState } from 'react';
import MyOverlay from '../Layout/MyOverlay/MyOverlay';
import { createPortal } from 'react-dom';
import {
  Box,
  Button,
  Card,
  Checkbox,
  Chip,
  ColorPicker,
  Container,
  Flex,
  Group,
  NumberInput,
  SegmentedControl,
  Stack,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core';
import MyCarousel, { BioDescription } from '../MyCarousel/MyCarousel';
import Nav from '../Swipe/Nav';

import { DateFormStylyes } from './DateFormStyles';
import { DatePicker, TimeInput } from '@mantine/dates';
import { ReactComponent as ArrowLeft } from 'assets/icons/arrowLeft.svg';
import { ReactComponent as Gradient } from 'assets/icons/chat/gradient.svg';
import { ReactComponent as Calendar } from 'assets/icons/chat/calendarMini.svg';
import { ReactComponent as Clock } from 'assets/icons/chat/clock.svg';

interface Props {
  hide: () => void;
  isShowing: boolean;
  height?: number | string;
  width?: number | string;
  translateX?: number | string;
}
function DateForm({ hide, isShowing, height, width, translateX }: Props) {
  const { classes } = DateFormStylyes();
  const [active, setActive] = useState();
  const [now, setNow] = useState<any>(new Date());
  const [minute, setMinute] = useState<any>(1);
  const [optionTime, setOptionTime] = useState<string>('Hours');
  if (!isShowing) return null;
  return createPortal(
    <MyOverlay
      hide={hide}
      width={width}
      height={height}
      translateX={translateX}
    >
      <>
        <Flex className={classes.header}>
          <button className={classes.datebtn} onClick={hide}>
            <ArrowLeft />
          </button>
          <Text className={classes.title}>Add a date</Text>
          <button className={classes.datebtn}>
            <Gradient />
          </button>
        </Flex>
        <Card className={classes.form}>
          <form>
            <Stack>
              <TextInput
                withAsterisk
                label="Title"
                placeholder="set a name for this date"
              />
              <TextInput
                label="Invitation to your partner"
                placeholder="say something ..."
              />
              <Textarea
                sx={{
                  height: 'auto',
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
                      height: '45px !important',
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
            <Group>
              <Flex>
                <Checkbox
                  checked
                  styles={{
                    label: {
                      color: 'orange',
                    },
                  }}
                  color="orange.7"
                  label="Remind me before:"
                />
                <Flex>
                  <NumberInput
                    styles={{
                      input: {
                        textAlign: 'center',
                        width: '34px !important',
                        height: '24px !important',
                        background: '#FFE9E0',
                        padding: 0,
                      },
                    }}
                    value={minute}
                    onChange={setMinute}
                    hideControls
                  />
                  <SegmentedControl
                    styles={{
                      root: {
                        height: '24px',
                      },
                    }}
                    size="xs"
                    value={optionTime}
                    onChange={setOptionTime}
                    data={[
                      { label: 'Minutes', value: 'minutes' },
                      { label: 'Hours', value: 'hours' },
                    ]}
                  />
                </Flex>
              </Flex>
            </Group>
          </form>
        </Card>
      </>
    </MyOverlay>,
    document.body,
  );
}

export default DateForm;
