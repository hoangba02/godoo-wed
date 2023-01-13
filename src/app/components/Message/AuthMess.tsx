import { Paper } from '@mantine/core';
import { right } from 'inquirer/lib/utils/readline';
import React from 'react';

interface Props {
  text: string;
}
function AuthMess() {
  return (
    <Paper
      sx={{
        maxWidth: 480,
        fontWeight: 400,
        width: 'max-content',
        height: 'max-content',
        fontSize: 14,
        lineHeight: '21px',
        padding: '5px 10px',
        borderRadius: 14,
        color: '#FFFFFF',
        background: 'linear-gradient(90deg, #E46125 -0.01%, #C91A44 100%)',
      }}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias,
      debitis ipsum officia a deserunt, in repellendus aliquam iure qui
      laboriosam rem, modi excepturi saepe similique eos vero facilis.
      Necessitatibus. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Ad nihil molestias ullam ducimus voluptatibus velit vel hic, quisquam
      architecto, praesentium cumque doloribus esse corporis, facilis rerum modi
      culpa! Dolorem, consequuntur.
    </Paper>
  );
}

export default AuthMess;
