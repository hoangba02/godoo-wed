import React, { useRef, useState } from 'react';
import useModal from 'hooks/useModal';
import { useMediaQuery } from '@mantine/hooks';

import Schedule from '../Schedule/Schedule';
import { Button, createStyles, Flex, Group, Input } from '@mantine/core';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
import { ReactComponent as Square } from 'assets/icons/square.svg';
import { ReactComponent as Cancel } from 'assets/icons/edit/cancel.svg';

interface Props {
  placeholder: string;
}
function Search({ placeholder }: Props) {
  const inputRef = useRef<null | HTMLInputElement>(null);
  const { classes } = useStyles();
  const { isShowing, toggle } = useModal();
  const [content, setContent] = useState<string>('');
  const phone = useMediaQuery('(max-width:575px');

  const handleChangeInput = e => {
    setContent(e.target.value);
  };
  const handleClearInput = e => {
    inputRef.current?.focus();
    setContent('');
  };
  const handleCancelResult = () => {
    setContent('');
  };
  return (
    <Flex className={classes.wrapper}>
      <Input.Wrapper
        sx={{
          width: '100%',
          position: 'relative',
          display: 'flex',
          transition: 'all 0.5s linear',
        }}
      >
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
              border: '1px solid #EAEAEA ',
              borderRadius: 29,
              background: '#EAEAEA',
              '&:focus': {
                background: '#FFFFFF',
                border: '1px solid #E46125 ',
              },
            },
          }}
          ref={inputRef}
          className={classes.search}
          icon={<SearchIcon />}
          placeholder={placeholder}
          value={content}
          onChange={handleChangeInput}
        />
        {!!content && (
          <Button
            variant="subtle"
            sx={{
              width: '24px !important',
              height: '24px !important',
              position: 'absolute',
              top: 7,
              right: 7,
              padding: 0,
              backgroundColor: 'transparent',
            }}
            onClick={handleClearInput}
          >
            <Cancel />
          </Button>
        )}
      </Input.Wrapper>
      {!!content && (
        <Button
          sx={{
            color: '#929292',
            padding: 0,
            width: '34px !important',
            height: '38px !important',
            fontWeight: 400,
            fontSize: 14,
            lineHeight: '18px',
          }}
          variant="subtle"
          onClick={handleCancelResult}
        >
          Hủy
        </Button>
      )}
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

const useStyles = createStyles(() => ({
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
