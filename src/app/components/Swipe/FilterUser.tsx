import React, { useState } from 'react';
import {
  Modal,
  Button,
  Group,
  createStyles,
  Text,
  Stack,
  Center,
  RangeSlider,
  Select,
} from '@mantine/core';
import { ReactComponent as FilterBtn } from 'assets/icons/filter.svg';
import { ReactComponent as ArrowLeft } from 'assets/icons/arrowLeft.svg';
import { ReactComponent as ArrowDown } from 'assets/icons/arrowDown.svg';
import { useMediaQuery } from '@mantine/hooks';
import GendersList from '../GendersList/GendersList';

const data = [
  'No promblem',
  '< 10 km',
  '< 20 km',
  '< 50 km',
  '< 100 km',
  '< 1000 km',
  '< 10 000 km',
];

interface Props {
  drawer?: boolean;
}
export const FilterUser = ({ drawer }: Props) => {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);
  const phone = useMediaQuery('(max-width:575px)');

  return (
    <>
      <Modal
        styles={{
          inner: {
            padding: '40px 16px',
          },
          modal: {
            width: 475,
            height: 722,
            padding: '0 !important',
            borderRadius: 20,
            transform: drawer ? 'translateX(0%)' : 'translateX(40%) !important',
            [`@media (max-width:575px)`]: {
              width: '100%',
              height: '100%',
              transform: 'translateX(0%) !important',
            },
          },
          close: {
            display: 'none',
          },
          header: {
            margin: 0,
          },
        }}
        fullScreen={phone ? true : false}
        opened={opened}
        onClose={() => setOpened(false)}
      >
        <Center
          sx={{
            position: 'relative',
            paddingTop: 28,
            paddingBottom: 12,
            borderBottom: '1px solid #FFE0D2',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
          }}
        >
          <button onClick={() => setOpened(false)} className={classes.backBtn}>
            <ArrowLeft />
          </button>
          <Text className={classes.title}>Filter</Text>
        </Center>
        <Stack className={classes.content}>
          <Text className={classes.question}>
            What you are looking for in your match?
          </Text>
          <GendersList />
          <Stack spacing={20} mb={20}>
            <Text className={classes.indexing}>Age</Text>
            <RangeSlider
              styles={{
                root: {
                  padding: '0 15px',
                },
                thumb: {
                  backgroundColor: '#FFE9E0',
                  border: '4px solid #E46125',
                },
                bar: {
                  background:
                    'linear-gradient(90deg, #E46125 -0.01%, #C91A44 100%)',
                },
              }}
              thumbSize={24}
              defaultValue={[20, 80]}
              min={15}
            />
          </Stack>
          <Stack spacing={20} mb={20}>
            <Text className={classes.indexing}>Distance (km)</Text>
            <RangeSlider
              styles={{
                root: {
                  padding: '0 15px',
                },
                thumb: {
                  backgroundColor: '#FFE9E0',
                  border: '4px solid #E46125',
                },
                bar: {
                  background:
                    'linear-gradient(90deg, #E46125 -0.01%, #C91A44 100%)',
                },
              }}
              thumbSize={24}
              defaultValue={[0, 200]}
              max={200}
            />
          </Stack>
          <Stack spacing={5} mb={20}>
            <Text className={classes.indexing}>Advanced Filters</Text>
            <Select
              rightSection={<ArrowDown />}
              defaultValue="No promblem"
              data={data}
              styles={{
                item: {
                  textAlign: 'center',
                  // applies styles to selected item
                  '&[data-selected]': {
                    backgroundColor: '#FFE9E0',
                    '&, &:hover': {
                      backgroundColor: 'var(--light)',
                      color: 'var(--black)',
                    },
                  },
                  '&:hover': {
                    backgroundColor: '#FFE9E0',
                    color: 'var(--black)',
                  },

                  // applies styles to hovered item (with mouse or keyboard)
                  '&[data-hovered]': {},
                },
                rightSection: {
                  right: 4,
                  top: '50%',
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  backgroundColor: 'var(--white)',
                  transform: 'translateY(-50%) rotate(-90deg)',
                },

                input: {
                  textAlign: 'center',
                  color: 'var(--white)',
                  height: 32,
                  borderRadius: 32,
                  background:
                    'linear-gradient(90deg, #E46125 -0.01%, #C91A44 100%)',
                },
              }}
            />
          </Stack>
        </Stack>
      </Modal>

      <Group position="center">
        <Button
          variant="subtle"
          className={classes.btn}
          onClick={() => setOpened(true)}
        >
          <FilterBtn />
        </Button>
      </Group>
    </>
  );
};

const useStyles = createStyles(() => ({
  btn: {
    width: '32px !important',
    height: '32px !important',
    border: 'none',
    background: 'inherit',
    cursor: 'pointer',
  },

  title: {
    fontSize: 20,
    fontWeight: 600,
    lineHeight: '20px',
  },
  content: {
    padding: '24px 50px 0',
    [`@media (max-width:575px)`]: {
      padding: '12px 16px 0',
    },
  },
  question: {
    textAlign: 'center',
    color: 'var(--black)',
    fontSize: 16,
    lineHeight: '22px',
    fontWeight: 400,
  },

  indexing: {
    color: 'var(--black)',
    fontSize: 18,
    lineHeight: '22px',
    fontWeight: 500,
  },
  backBtn: {
    width: '32px',
    height: '32px',
    position: 'absolute',
    left: 50,
    background: 'transparent',
    [`@media (max-width:575px)`]: {
      left: 20,
    },
  },
}));
