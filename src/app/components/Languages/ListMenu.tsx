import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { clsx, createStyles, Menu } from '@mantine/core';
import { getUserSelector } from 'store/slice/userSlice/selectors';
import { DataLanguageProps, lengthLanguage } from './Nation/Nation';
import { UserSlice } from 'store/slice/userSlice';

interface Props {
  dataLanguage: DataLanguageProps[];
}

const MenuLanguage = props => {
  const { classes, cx } = useStyleMenu({ id: props.id });
  const [t, i18n] = useTranslation();
  const dispatch = useDispatch();
  const { actions } = UserSlice();
  const user = useSelector(getUserSelector);

  function handleConvertLanguage() {
    if (props.value !== user.language) {
      i18n.changeLanguage(`${props.value}`);
      dispatch(actions.setLanguage(props.value));
    }
  }

  return (
    <Menu.Item
      className={cx(classes.menuItem, classes.item)}
      icon={props.icon}
      onClick={() => handleConvertLanguage()}
    >
      {props.title}
    </Menu.Item>
  );
};

const ListLanguage = dataLanguage =>
  dataLanguage.map(ele => {
    return (
      <MenuLanguage
        key={ele.id}
        title={ele.title}
        value={ele.value}
        icon={ele.icon}
        id={ele.id}
      />
    );
  });

export const ListMenu = (props: Props) => {
  return (
    <Menu.Dropdown p={0}>{ListLanguage(props.dataLanguage)}</Menu.Dropdown>
  );
};

const useStyleMenu = createStyles((theme, params: { id: number }) => {
  return {
    menuItem: {
      borderBottom:
        params.id !== lengthLanguage ? `0.4px solid #FFFFFF` : 'none',
    },
    item: {
      width: '150px',
      [`@media (max-width:575px)`]: {
        width: '120px',
      },
    },
  };
});
