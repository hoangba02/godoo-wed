import React from 'react';
import { ReactComponent as Asexual } from 'assets/icons/gender/Asexual.svg';
import { ReactComponent as Bisexual } from 'assets/icons/gender/Bisexual.svg';
import { ReactComponent as Female } from 'assets/icons/gender/Female.svg';
import { ReactComponent as Gay } from 'assets/icons/gender/Gay.svg';
import { ReactComponent as Lesbian } from 'assets/icons/gender/Lesbian.svg';
import { ReactComponent as Male } from 'assets/icons/gender/Male.svg';
import { ReactComponent as Nonbinary } from 'assets/icons/gender/Nonbinary.svg';
import { ReactComponent as Transgender } from 'assets/icons/gender/Transgender.svg';
import { clsx, createStyles, Flex, Group, Stack, Text } from '@mantine/core';
export const genders = [
  {
    id: 0,
    name: 'Women',
    icon: <Female />,
  },
  {
    id: 1,
    name: 'Men',
    icon: <Male />,
  },
  {
    id: 2,
    name: 'Bisexual',
    icon: <Bisexual />,
  },
  {
    id: 3,
    name: 'Asexual',
    icon: <Asexual />,
  },
  {
    id: 4,
    name: 'Gay',
    icon: <Gay />,
  },

  {
    id: 5,
    name: 'Lesbian',
    icon: <Lesbian />,
  },

  {
    id: 6,
    name: 'Nonbinary',
    icon: <Nonbinary />,
  },
  {
    id: 7,
    name: 'Transgender',
    icon: <Transgender />,
  },
];

interface Props {
  isTitle: boolean;
  profile?: any;
  items?: any;
  setItems?: any;
}
function GendersList({ profile, isTitle, items, setItems }: Props) {
  const { classes } = makeStyles();
  // const [items, setItems] = useState<string[]>([]);
  const genderUser = genders.filter(value =>
    profile?.gender.includes(value.name),
  );
  const array = !!profile ? genderUser : genders;
  return (
    <Stack className={classes.container}>
      {isTitle && <Text className={classes.title}>Gender</Text>}
      <Group className={classes.gender}>
        {array.map((gender, index) => (
          <Flex
            key={index}
            onClick={e => {
              if (gender.id === index) {
                let boolean = items?.find(value => {
                  return value === gender.name;
                });
                if (boolean) {
                  e.currentTarget.classList.remove('active');
                  setItems(
                    items?.filter(value => {
                      return value !== boolean;
                    }),
                  );
                } else {
                  if (items.length < 2) {
                    e.currentTarget.classList.add('active');
                    setItems([...items, gender.name]);
                  }
                }
              }
            }}
            className={clsx(classes.item, array.length < 8 ? 'active' : '')}
          >
            {gender.icon} {gender.name}
          </Flex>
        ))}
      </Group>
    </Stack>
  );
}

export default GendersList;

const makeStyles = createStyles(() => ({
  container: {
    width: '100%',
  },
  title: {
    color: 'var(--black)',
    fontSize: 18,
    lineHeight: '22px',
    fontWeight: 500,
    marginBottom: 6,
  },
  gender: {
    gap: 8,
    justifyContent: 'flex-start',
    borderRadius: '8px',
    border: '1px solid #EAEAEA',
    padding: '14px 12px',
  },
  item: {
    height: '100%',
    width: 'max-content',
    padding: '2px 10px',
    borderRadius: 200,
    backgroundColor: '#FFFFFF',
    border: '1px solid #929292',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 700,
    cursor: 'pointer',
    '&.active': {
      backgroundColor: '#FFE9E0',
      border: '1px solid var(--primary-4)',
    },
  },
}));
