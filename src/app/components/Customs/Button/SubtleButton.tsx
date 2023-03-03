import styled from '@emotion/styled';
import { Button, ButtonProps, createPolymorphicComponent } from '@mantine/core';

const _StyledButton = styled(Button)`
  background: transparent;
  :hover {
    background: transparent;
  }
`;
export const SubtleButton = createPolymorphicComponent<'button', ButtonProps>(
  _StyledButton,
);
