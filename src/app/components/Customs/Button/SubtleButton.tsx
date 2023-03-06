import styled from '@emotion/styled';
import { Button, ButtonProps, createPolymorphicComponent } from '@mantine/core';

const _StyledButton = styled(Button)`
  width: max-content;
  height: max-content;
  background: transparent;
  :hover {
    background: transparent;
  }
`;
export const SubtleButton = createPolymorphicComponent<'button', ButtonProps>(
  _StyledButton,
);
