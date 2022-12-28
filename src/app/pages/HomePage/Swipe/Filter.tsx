import React, { useState } from 'react';
import {
  Modal,
  Button,
  Group,
  createStyles,
  Box,
  Flex,
  Text,
  Stack,
  Center,
  RangeSlider,
} from '@mantine/core';
import { ReactComponent as FilterBtn } from 'assets/icons/filter.svg';
import { ReactComponent as ArrowLeft } from 'assets/icons/arrowLeft.svg';

function Filter() {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Modal
        styles={{
          inner: {
            width: 470,
            height: 722,
          },
          modal: {
            width: '100%',
            height: '100%',
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
            }}
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
            <RangeSlider
              styles={{
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
          </Box>
          <Box>
            <Text className={classes.indexing}>Distance</Text>
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
}

export default Filter;

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
