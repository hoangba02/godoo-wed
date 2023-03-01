import React from 'react';
import { Menu, createStyles, Button } from '@mantine/core';
import { useSelector } from 'react-redux';

import { ReactComponent as Vn } from 'assets/icons/vi.svg';
import { ReactComponent as En } from 'assets/icons/en.svg';
import { ReactComponent as Arrow } from 'assets/icons/arrowDownBlack.svg';
import { getUserSelector } from 'store/slice/userSlice/selectors';
import { UserSlice } from 'store/slice/userSlice';
import { dataLanguage } from './Nation/Nation';
import { ListMenu } from './ListMenu';

export default function Languages() {
  UserSlice();
  const user = useSelector(getUserSelector);
  const { classes } = useStyles();

  return (
    <Menu withArrow zIndex={9999}>
      <Menu.Target>
        <Button
          styles={{
            inner: {
              justifyContent: 'space-around',
              borderRadius: 8,
              [`@media (max-width:575px)`]: {
                justifyContent: 'center',
              },
            },

            leftIcon: {
              marginRight: 3,
            },
            rightIcon: {
              marginLeft: 3,
            },
          }}
          className={classes.button}
          leftIcon={user.language === 'vi' ? <Vn /> : <En />}
          rightIcon={<Arrow />}
          fs={'12px'}
          fw={500}
          style={{ color: '#000000' }}
        >
          {user.language === 'vi' ? 'VIE' : 'ENG'}
        </Button>
      </Menu.Target>
      <ListMenu dataLanguage={dataLanguage} />
    </Menu>
  );
}

const useStyles = createStyles({
  button: {
    height: '100% !important',
    width: '100% !important',
    padding: 0,
    fontWeight: 600,
    fontSize: 18,
    lineHeight: '22px',
    color: 'var(--black)',
    background: 'var(--white)',
    borderRadius: 8,
    '::before': {
      display: 'none',
    },
    ':hover': {
      backgroundColor: 'var(--white)',
    },
    [`@media (max-width:575px)`]: {
      fontSize: 14,
    },
  },
});
