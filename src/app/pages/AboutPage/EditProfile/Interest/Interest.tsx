import {
  Accordion,
  Button,
  Checkbox,
  clsx,
  Container,
  createStyles,
  Divider,
  Flex,
  Text,
} from '@mantine/core';
import React, { useState } from 'react';
import { AboutPage } from '../../Loadable';
import { ReactComponent as ArrowDown } from 'assets/icons/edit/arrowDown.svg';
import { INTEREST, INTERESTS } from '../More';

function Interest() {
  const { classes } = makeStyles();
  const [interestMap, setInterestMap] = useState<string[]>([]);
  const [showProfile, setShowProfile] = useState<boolean>(true);
  return (
    <AboutPage title="Interest" isEdit={true}>
      <Container fluid className={classes.container}>
        <Button
          variant="gradient"
          sx={{
            width: '152px !important',
            height: '45px !important',
            position: 'absolute',
            right: 30,
            top: 35,
            zIndex: 999,
          }}
        >
          Save
        </Button>
        <Accordion
          className={classes.wrapper}
          transitionDuration={800}
          chevron={<ArrowDown />}
          styles={{
            control: {
              ':hover': {
                backgroundColor: '#FFFFFF',
              },
              ':active': {
                transform: 'scale(1)',
              },
            },
          }}
        >
          {INTERESTS.map((interest, index) => (
            <Accordion.Item
              key={index}
              value={interest}
              className={classes.interests}
            >
              <Accordion.Control className={classes.title}>
                <Text className={classes.name}>{interest}</Text>
                {/* <ArrowDown /> */}
              </Accordion.Control>
              <Accordion.Panel>
                <Divider my="sm" />

                <Flex className={classes.list}>
                  {INTEREST.map((item, i) => {
                    if (interest === item.type) {
                      return (
                        <Flex
                          key={i}
                          className={clsx(
                            classes.content,
                            interestMap.includes(item.name) ? 'active' : '',
                          )}
                          onClick={() => {
                            if (interestMap.includes(item.name)) {
                              setInterestMap(() => {
                                return [...interestMap].filter(
                                  value => value !== item.name,
                                );
                              });
                            } else {
                              setInterestMap([...interestMap, item.name]);
                            }
                          }}
                        >
                          {item.icon}
                          <Text lh="18px" className={classes.name}>
                            {item.name}
                          </Text>
                        </Flex>
                      );
                    }
                  })}
                </Flex>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
          <Checkbox
            checked={showProfile}
            onChange={e => {
              setShowProfile(e.currentTarget.checked);
            }}
            sx={{ marginTop: 12 }}
            styles={{
              label: {
                color: showProfile ? '#FF9565' : '#000',
                fontWeight: 400,
                fontSize: 14,
                lineHeight: '18px',
                paddingLeft: 5,
              },
            }}
            color="orange.7"
            label="Show on my profile"
          />
        </Accordion>
      </Container>
    </AboutPage>
  );
}

export default Interest;

const makeStyles = createStyles(() => ({
  container: {
    width: '100%',
  },
  wrapper: {
    gap: 12,
    width: 570,
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
  },
  interests: {
    minHeight: 55,
    border: '1px solid #A9A9A9',
    borderRadius: 8,
    overflow: 'hidden',
  },
  title: {
    justifyContent: 'space-between',
  },
  content: {
    gap: 4,
    height: 28,
    alignItems: 'center',
    border: '1px solid #929292',
    borderRadius: 200,
    padding: '0 8px',
    '&.active': {
      background: '#FFE9E0',
      border: ' 1px solid #FF9565',
    },
    cursor: 'pointer',
  },
  list: {
    gap: '10px 8px',
    flexWrap: 'wrap',
  },
  name: {
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '22px',
    userSelect: 'none',
  },
}));
