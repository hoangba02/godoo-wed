import { Tabs, TabsProps } from '@mantine/core';
import React, { useEffect, useRef, useState } from 'react';
import { AboutPage } from '../../Loadable';
import { MORE } from '../More';

function MoreAbout() {
  const tabsRef = useRef<any>(null);
  const [startX, setStartX] = useState<number>(0);
  // const [width, setWidth] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);

  const handleMouseDown = e => {
    setIsMouseDown(true);
    setStartX(e.pageX - tabsRef.current?.offsetLeft);
    setScrollLeft(tabsRef.current?.scrollLeft);
    tabsRef.current?.removeEventListener('mouseup', handleClearMouseEvent);
  };
  const handleMouseMove = e => {
    if (isMouseDown) {
      const { current } = tabsRef;
      const x = e.pageX - tabsRef.current?.offsetLeft;
      const walk = x - startX;
      const width = scrollLeft - walk;
      current.scrollLeft = width;
    }
  };
  const handleClearMouseEvent = e => {
    setIsMouseDown(false);
  };
  useEffect(() => {
    const { current } = tabsRef;
    current.addEventListener('mousedown', handleMouseDown);
    current.addEventListener('mousemove', handleMouseMove);
    current.addEventListener('mouseleave', handleClearMouseEvent);
    current.addEventListener('mouseup', handleClearMouseEvent);

    return () => {
      current.removeEventListener('mousedown', handleMouseDown);
      current.removeEventListener('mousemove', handleMouseMove);
      current.removeEventListener('mouseleave', handleClearMouseEvent);
      current.removeEventListener('mouseup', handleClearMouseEvent);
    };
  });
  return (
    <AboutPage title="More about me">
      <StyledTabs defaultValue="Height" ref={tabsRef}>
        {/* <motion.div
          ref={tabsRef}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        > */}
        <Tabs.List>
          {MORE.map((tab, index) => (
            <Tabs.Tab key={index} value={tab.name}>
              {tab.name}
            </Tabs.Tab>
          ))}
        </Tabs.List>
        {/* </motion.div> */}
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
          overflow: 'hidden',
        },
      })}
      {...props}
    />
  );
}

const StyledTabs = React.forwardRef(CustomerTabs);
