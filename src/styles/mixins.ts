import { css } from 'styled-components';

import Keyframes from 'styled-components/dist/models/Keyframes';

import { showFancyKeyframes } from './keyframes';
import { StyleConstants } from './StyleConstants';

export const MxTextOverflow = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

interface CoverBlock {
  position?: 'absolute' | 'fixed';
  gap?: string;
}
export function MxCoverBlock({
  position = 'absolute',
  gap = '0px',
}: CoverBlock = {}) {
  return css`
    position: ${position};
    top: ${gap};
    left: ${gap};
    right: ${gap};
    bottom: ${gap};
  `;
}

export const MxCoverImg = css`
  ${MxCoverBlock()};
  object-fit: cover;
  font-family: 'object-fit: cover';
  user-select: none;
`;

export const MxHideScrollbar = css`
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  &::-webkit-scrollbar {
    /* WebKit */
    width: 0;
    height: 0;
  }
`;

export const MxBlur = (radius = 8) => css`
  -webkit-filter: blur(${radius}px);
  -ms-filter: blur(${radius}px);
  filter: url('data:image/svg+xmlutf8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg"><filter id="blur"><feGaussianBlur stdDeviation="#${radius}px" /></filter></svg>#blur');
  filter: progid:DXImageTransform.Microsoft.Blur(Strength=${radius}px);
  filter: blur(${radius}px);
  transition: filter 300ms ease;
`;

//MxAspectRatio(4, 3)
export function MxAspectRatio(width: number, height: number, offset = 0) {
  return css`
    position: relative;
    > * {
      ${MxCoverBlock({ gap: `${offset}px` })};
      margin: auto;
    }

    &:before {
      content: '';
      width: 100%;
      display: flex;
      padding-top: ${(height / width) * 100}%;
      pointer-events: none;
      z-index: -2;
    }
  `;
}

export function MxDarkenBackground(
  color = '#000',
  opacity = 0.5,
  pseudoSelector = 'before',
) {
  return css`
    ${`&:${pseudoSelector}`} {
      content: '';
      ${MxCoverBlock()};
      pointer-events: none;
      background-color: ${color};
      opacity: ${opacity};
    }
  `;
}

export function MxCustomScroll(
  width: number,
  radius: number,
  colorBg: string,
  colorThumb: string,
) {
  return css`
    &::-webkit-scrollbar {
      border-radius: ${radius}px;
      height: 10px;
      width: ${width}px;
      background-color: ${colorBg};
    }

    &::-webkit-scrollbar-thumb {
      background: ${colorThumb};
      border-radius: ${radius}px;
    }

    &::-webkit-scrollbar-track {
      border-radius: ${radius}px;
    }
  `;
}

export function MxVw(resolution: number, target: number) {
  const vwContext = resolution * 0.01;
  return `${(target / vwContext).toFixed(2)}vw`;
}

export function MxStaggerAnimation(
  index = 1,
  animation: Keyframes = showFancyKeyframes,
  animationSpeed: number = StyleConstants.TRANSITION_SPEED,
  itemAppearDelay = 50,
) {
  return css`
    animation: ${animation} ${animationSpeed}ms ease-in;
    animation-fill-mode: both;
    animation-timing-function: ease-in-out;

    &:nth-child(n + ${index}) {
      animation-delay: ${index * itemAppearDelay}ms;
    }
  `;
}
