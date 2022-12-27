import React from 'react';
import { Box, createStyles, Input } from '@mantine/core';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';

function Search() {
  const { classes } = useStyles();
  return (
    <Box>
      <Input
        styles={{
          input: {
            fontSize: 14,
            fontWeight: 400,
            lineHeight: '18px',
            height: '100%',
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
    </Box>
  );
}

export default Search;

export const useStyles = createStyles(() => ({
  search: {
    height: 38,
    border: 'none',
    borderRadius: 29,
    background: '#EAEAEA',
  },
}));
