import styled from '@emotion/styled';
import { Button, ButtonProps, createPolymorphicComponent } from '@mantine/core';

const _StyledButton = styled(Button)`
  height: 45px;
  color: #ffffff;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 600;
  line-height: 25px;
  background: linear-gradient(90deg, #e46125 -0.01%, #c91a44 50%, #a12fa3 100%);
  :hover {
    background: linear-gradient(
      90deg,
      #e46125 -0.01%,
      #c91a44 50%,
      #a12fa3 100%
    ) !important;
  }
`;
export const GradientButton = createPolymorphicComponent<'button', ButtonProps>(
  _StyledButton,
);
