import { Tabs, TabsProps } from '@mantine/core';
import React, { useEffect, useRef, useState } from 'react';
import { AboutPage } from '../../Loadable';
import { MORE } from '../More';

function MoreAbout() {
  const tabsRef = useRef<any>(null);
  const [x, setX] = useState<number>(0);
  const [distance, setDistance] = useState<number>(0);

  useEffect(() => {
    tabsRef.current?.addEventListener('mousedown', e => {
      setX(e.offsetX);
    });
    tabsRef.current?.addEventListener('mousemove', e => {
      setDistance(e.offsetX);
    });
  });
  useEffect(() => {
    // if (x < distance) {
    //   tabsRef.current?.scrollLeft = distance - x;
    // } else {
    //   tabsRef.current?.scrollLeft = x - distance;
    // }
  }, [distance]);
  return (
    <AboutPage title="More about me">
      <StyledTabs defaultValue="Height" ref={tabsRef}>
        <Tabs.List>
          {MORE.map((tab, index) => (
            <Tabs.Tab key={index} value={tab.name}>
              {tab.name}
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </StyledTabs>
    </AboutPage>
  );
}

export default MoreAbout;

function CustomerTabs(props: TabsProps, ref) {
  return (
    <Tabs
      ref={ref}
      unstyled
      styles={theme => ({
        tab: {
          width: 'max-content',
          backgroundColor: '#FFFFFF',
          color: '#D6D6D6',
          padding: '8px 18px 4px 18px',
          cursor: 'pointer',
          fontSize: theme.fontSizes.sm,
          display: 'flex',
          alignItems: 'center',
          borderRadius: '0px 0px 8px 8px',
          whiteSpace: 'nowrap',

          '&:disabled': {
            opacity: 0.5,
            cursor: 'not-allowed',
          },

          '&:not(:first-of-type)': {
            borderLeft: 0,
          },

          '&:first-of-type': {
            borderTopLeftRadius: theme.radius.md,
            borderBottomLeftRadius: theme.radius.md,
          },

          '&:last-of-type': {
            borderTopRightRadius: theme.radius.md,
            borderBottomRightRadius: theme.radius.md,
          },

          '&[data-active]': {
            backgroundColor: '#FFE9E0',
            color: '#E46125',
          },
        },

        tabIcon: {
          marginRight: theme.spacing.xs,
          display: 'flex',
          alignItems: 'center',
        },

        tabsList: {
          display: 'flex',
          height: '100%',
        },
        root: {
          width: '100%',
          overflow: 'scroll',
        },
      })}
      {...props}
    />
  );
}

const StyledTabs = React.forwardRef(CustomerTabs);
