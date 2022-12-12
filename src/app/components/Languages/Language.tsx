// import React from 'react';
// import { Menu, createStyles, Button } from '@mantine/core';
// import { useSelector } from 'react-redux';

// import { useUserSlice } from 'store/app/user';
// import { selectUser } from 'store/app/user/selector';
// import { ListMenu } from './ListMenu';

// import { ReactComponent as Vn } from 'assets/icons/vn.svg';
// import { ReactComponent as En } from 'assets/icons/en.svg';
// import { ReactComponent as Arrow } from 'assets/icons/arrow-bottom.svg';

// const useStyles = createStyles(theme => ({
//   button: {
//     background: theme.colors.neutral[1],
//     borderRadius: '27px',
//     color: theme.black,
//     height: '32px',
//   },
// }));

export default function Languages() {
  // const { actions } = useUserSlice();
  // const user = useSelector(selectUser);
  // const { classes } = useStyles();
  // return (
  //   <Menu withArrow>
  //     <Menu.Target>
  //       <Button
  //         className={classes.button}
  //         leftIcon={user.language === 'vi' ? <Vn /> : <En />}
  //         rightIcon={<Arrow />}
  //         fs={'12px'}
  //         fw={500}
  //         style={{ color: '#000000', fontFamily: 'Poppins Medium' }}
  //       >
  //         {user.language === 'vi' ? 'Vie' : 'Eng'}
  //       </Button>
  //     </Menu.Target>
  //     <ListMenu />
  //   </Menu>
  // );
}
