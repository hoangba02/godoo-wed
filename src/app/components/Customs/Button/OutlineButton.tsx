import styled from '@emotion/styled';
import { Button, ButtonProps, createPolymorphicComponent } from '@mantine/core';

const _StyledButton = styled(Button)`
  border: none;
  height: 55px;
  color: #e46125;
  position: relative;
  border-radius: 9.5px;
  background-color: transparent;
  background-image: linear-gradient(90deg, #e46125 -0.01%, #c91a44 100%);
  z-index: 1;
  ::before {
    content: '';
    position: absolute;
    background-color: #ffffff;
    top: 2px;
    left: 2px;
    border-radius: 8px;
    height: calc(100% - 4px);
    width: calc(100% - 4px);
    z-index: -1;
  }
  @media screen and (max-width: 575px) {
    height: 45px;
  }
`;
export const OutlineButton = createPolymorphicComponent<'button', ButtonProps>(
  _StyledButton,
);
