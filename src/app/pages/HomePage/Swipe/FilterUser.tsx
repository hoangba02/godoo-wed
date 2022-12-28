import React, { useState } from 'react';
import {
  Modal,
  Button,
  Group,
  createStyles,
  Box,
  Text,
  Stack,
  Center,
  RangeSlider,
  Select,
} from '@mantine/core';
import { ReactComponent as FilterBtn } from 'assets/icons/filter.svg';
import { ReactComponent as ArrowLeft } from 'assets/icons/arrowLeft.svg';
import { ReactComponent as ArrowDown } from 'assets/icons/arrowDown.svg';

const data = [
  'No promblem',
  '< 10 km',
  '< 20 km',
  '< 50 km',
  '< 100 km',
  '< 1000 km',
  '< 10 000 km',
];

export const FilterUser = () => {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Modal
        styles={{
          modal: {
            width: 470,
            height: 722,
            padding: '0 !important',
            borderRadius: 20,
          },
          close: {
            display: 'none',
          },
          header: {
            margin: 0,
          },
        }}
        opened={opened}
        onClose={() => setOpened(false)}
      >
        <Center
          sx={{
            position: 'relative',
            paddingTop: 28,
            paddingBottom: 12,
            borderBottom: '1px solid #FFE0D2',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              left: 50,
              cursor: 'pointer',
            }}
            onClick={() => setOpened(false)}
          >
            <ArrowLeft />
          </Box>
          <Text className={classes.title}>Filter</Text>
        </Center>
        <Stack className={classes.content}>
          <Text className={classes.question}>
            What you are looking for in your match?
          </Text>
          <Box>
            <Text className={classes.indexing}>Age</Text>
            <div>
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
                mt="xl"
                defaultValue={[20, 80]}
              />
            </div>
          </Box>
          <Box>
            <Text className={classes.indexing}>Distance</Text>
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
                  transform: 'translateY(-50%)',
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
          </Box>
          <Box>
            <Text className={classes.indexing}>Advanced Filters</Text>
          </Box>
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
    width: 32,
    height: 32,
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
  },
  question: {
    color: 'var(--primary-1)',
    fontSize: 14,
    lineHeight: '22px',
    fontWeight: 400,
  },

  indexing: {
    backgroundImage: 'linear-gradient(90deg, #E46125 -0.01%, #C91A44 100%)',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    fontSize: 18,
    lineHeight: '22px',
    fontWeight: 500,
  },
}));
