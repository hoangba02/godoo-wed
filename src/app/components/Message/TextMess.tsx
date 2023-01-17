import React from 'react';
import { Group, Paper } from '@mantine/core';
import { motion } from 'framer-motion';
import { images } from 'assets/images';

interface Props {
  ref: HTMLDivElement | null;
  auth: boolean;
  content: string;
  handleShowTime: any;
  showTime: any;
  position: number;
}
function TextMess(
  { auth, content, handleShowTime, showTime, position }: Props,
  ref,
) {
  const show = {
    opacity: 1,
    display: 'block',
  };

  const hide = {
    opacity: 0,
    transitionEnd: {
      display: 'none',
    },
  };
  return (
    <Group
      position={auth ? 'right' : 'left'}
      sx={{
        gap: 4,
        alignItems: 'flex-end',
        width: '100%',
        overflow: 'initial',
        marginBottom: 16,
      }}
    >
      <motion.div
        animate={showTime === position ? show : hide}
        style={{
          order: auth ? 0 : 1,
          color: '#BFBFBF',
          fontWeight: 400,
          fontSize: 10,
          lineHeight: '12px',
        }}
      >
        16:34
      </motion.div>

      <Paper
        ref={ref}
        onClick={e => {
          handleShowTime(e, position);
        }}
        sx={{
          maxWidth: 480,
          fontWeight: 400,
          width: 'max-content',
          height: 'max-content',
          marginLeft: 5,
          fontSize: 14,
          lineHeight: '21px',
          padding: auth ? '5px 10px' : ' 5px 10px 5px 16px',
          borderRadius: auth ? 14 : '14px 8px 8px 8px',
          color: auth ? '#FFFFFF' : '#000000',
          background: auth ? '#E46125' : '#EAEAEA',
          position: 'relative',
          '::after': {
            display: auth ? 'none' : 'block',
            content: '""',
            width: 34,
            height: 22.56,
            position: 'absolute',
            bottom: 0,
            left: -5,
            backgroundImage: `url(${images.messBox})`,
          },
          [`@media (max-width:575px)`]: {
            maxWidth: 247,
            padding: auth ? '5px 10px' : '5px 10px 5px 16px',
          },
        }}
      >
        {content}
      </Paper>
    </Group>
  );
}
const TextMessage = React.forwardRef(TextMess);
export default TextMessage;
