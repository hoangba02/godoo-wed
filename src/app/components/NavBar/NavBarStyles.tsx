import { createStyles } from '@mantine/core';

export const NavBarStyles = createStyles(() => ({
  container: {
    maxWidth: 370,
    // minWidth: 370,
    margin: 0,
    padding: '0 15px',
    aspectRatio: '2 / 3',
  },
  user: {
    position: 'relative',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    marginLeft: 8,
    borderBottom: '1px solid #FFE0D2',
  },
}));
