// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useTranslation } from 'react-i18next';
// import { createStyles, Menu } from '@mantine/core';

// import { ReactComponent as Vn } from 'assets/icons/vn.svg';
// import { ReactComponent as En } from 'assets/icons/en.svg';
// import { useUserSlice } from 'store/app/user';
// import { selectUser } from 'store/app/user/selector';

// const data = [
//   {
//     id: 1,
//     icon: <Vn />,
//     title: 'Vietnam',
//     value: 'vi',
//   },
//   {
//     id: 2,
//     icon: <En />,
//     title: 'English',
//     value: 'en',
//   },
// ];

// const MenuLanguage = props => {
//   const { classes, cx } = useStyleMenu({ id: props.id });
//   const [t, i18n] = useTranslation();
//   const dispatch = useDispatch();
//   const { actions } = useUserSlice();
//   const user = useSelector(selectUser);

//   function handleConvertLanguage() {
//     if (props.value !== user.language) {
//       i18n.changeLanguage(`${props.value}`);
//       dispatch(actions.requestLanguage(props.value));
//     }
//   }

//   return (
//     <Menu.Item
//       className={cx(classes.menuItem, classes.item)}
//       classNames={{ item: classes.item }}
//       icon={props.icon}
//       onClick={() => handleConvertLanguage()}
//     >
//       {props.title}
//     </Menu.Item>
//   );
// };

// const ListLanguage = data.map(ele => {
//   return (
//     <MenuLanguage
//       key={ele.id}
//       title={ele.title}
//       value={ele.value}
//       icon={ele.icon}
//       id={ele.id}
//     />
//   );
// });

export const ListMenu = () => {
  // return <Menu.Dropdown p={0}>{ListLanguage}</Menu.Dropdown>;
};

// const useStyleMenu = createStyles((theme, params: { id: number }) => {
//   return {
//     menuItem: {
//       borderBottom:
//         params.id !== data.length
//           ? `0.4px solid ${theme.colors.neutral[1]}`
//           : 'none',
//     },
//     item: {
//       width: '150px',
//     },
//   };
// });
