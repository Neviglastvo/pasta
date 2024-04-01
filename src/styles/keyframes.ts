import { css, keyframes } from 'styled-components';

export const showKeyframes = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const showFancyKeyframes = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.9)
  }
  100% {
    opacity: 1;
    transform: scale(1)
  }
`;

export const slideFromRightKeyframes = keyframes`
  0% {
    transform: translateX(200%);
  }
  100% {
    transform: translateX(0);
  }
`;

export const slideFromLeftKeyframes = keyframes`
  0% {
    transform: translateX(-200%);
  }
  100% {
    transform: translateX(0);
  }
`;

export const rotateKeyframes = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const rotateAnimation = css`
  animation: 2s ${rotateKeyframes} linear reverse infinite;
`;
