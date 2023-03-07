import React from 'react';
import Lottie from 'react-lottie';
import Loading from 'assets/lottie/loading.json';
import { LoadingOverlay } from '@mantine/core';
import { createPortal } from 'react-dom';

export const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Loading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
    speed: 1.5,
  };
  return <Lottie width={150} height={150} options={defaultOptions} />;
};
interface Props {
  isLoading: boolean;
}
const OverlayLoading = ({ isLoading }: Props) =>
  isLoading
    ? createPortal(
        <LoadingOverlay
          sx={{
            width: '100vw',
            height: '100vh',
          }}
          overlayOpacity={0.9}
          loader={<Loader />}
          visible={isLoading}
        />,
        document.body,
      )
    : null;

export default OverlayLoading;
