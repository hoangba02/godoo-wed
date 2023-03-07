import styled from '@emotion/styled';
import { Button, ButtonProps, createPolymorphicComponent } from '@mantine/core';

const _StyledButton = styled(Button)`
  width: max-content;
  height: max-content;
  background: transparent;
  padding: 10px;
  :hover {
    background: transparent;
  }
  :focus {
    outline-offset: 0px;
    outline: none;
  }
`;
export const SubtleButton = createPolymorphicComponent<'button', ButtonProps>(
  _StyledButton,
);
