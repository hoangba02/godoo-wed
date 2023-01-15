import React from 'react';
import useModal from 'hooks/useModal';
import { useMediaQuery } from '@mantine/hooks';

import Schedule from '../Schedule/Schedule';
import { createStyles, Flex, Group, Input } from '@mantine/core';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
import { ReactComponent as Square } from 'assets/icons/square.svg';

function Search() {
  const { classes } = useStyles();
  const { isShowing, toggle } = useModal();
  const phone = useMediaQuery('(max-width:575px');
  return (
    <Flex className={classes.wrapper}>
      <Input
        styles={{
          wrapper: {
            width: '100% ',
          },
          input: {
            fontSize: 14,
            fontWeight: 400,
            lineHeight: '18px',
            margin: '0 !important',
            height: '38px !important',
            border: 'none',
            borderRadius: 29,
            color: '#929292',
            background: '#EAEAEA',
            '&:focus': {
              background: '#EAEAEA',
            },
          },
        }}
        className={classes.search}
        icon={<SearchIcon />}
        placeholder="Search"
      />
      {phone && (
        <Group
          sx={{
            padding: '0 4px 0 10px',
            cursor: 'pointer',
          }}
          onClick={toggle}
        >
          <Square />
        </Group>
      )}
      <Schedule hide={toggle} isShowing={isShowing} />
    </Flex>
  );
}

export default Search;

export const useStyles = createStyles(() => ({
  wrapper: {
    width: '100%',
    height: 38,
    marginTop: 12,
    [`@media (max-width:575px)`]: {
      marginTop: 38,
    },
  },
  search: {
    minHeight: '100%',
    border: 'none',
    borderRadius: 29,
    background: '#EAEAEA',
  },
}));
