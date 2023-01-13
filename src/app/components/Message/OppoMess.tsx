import React from 'react';
import { Paper } from '@mantine/core';
import { images } from 'assets/images';

function OppoMess() {
  return (
    <Paper
      sx={{
        maxWidth: 480,
        fontWeight: 400,
        width: 'max-content',
        height: 'max-content',
        marginLeft: 5,
        fontSize: 14,
        lineHeight: '21px',
        padding: ' 5px 10px 5px 16px',
        borderRadius: '14px 8px 8px 8px',
        color: '#000000',
        background: '#EAEAEA',
        position: 'relative',
        '::after': {
          content: '""',
          width: 34,
          height: 22.56,
          position: 'absolute',
          bottom: 0,
          left: -5,
          backgroundImage: `url(${images.messBox})`,
        },
      }}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
      cupiditate nulla voluptatum modi delectus molestias corrupti amet aperiam
      nobis? Asperiores quasi modi neque necessitatibus repellat dicta, cum
      similique vitae aliquid.
    </Paper>
  );
}

export default OppoMess;
