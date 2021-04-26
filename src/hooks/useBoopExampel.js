import React from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import { Icon } from 'react-icons-kit';
import { star } from 'react-icons-kit/feather/star';
import useBoop from '@hooks/use-boop.hook';
import UnstyledButton from '@components/UnstyledButton';
import Spacer from '@components/Spacer';
const useAngledBoop = (index) => {
  // Our star has 5 points across a 360-degree area.
  // Our first point should shoot out at 0 degrees,
  // our second at 72 degrees (1/5th of 360),
  // our third at 144 degrees, and so on.
  let angle = index * (360 / 5);
  // By default in JS, 0-degrees is the 3-o'clock
  // position, but I want my animation to start at
  // the 12-o'clock position, so I'll subtract
  // 90 degrees
  angle -= 90;
  // Trigonometry methods in JS use radians, not
  // degrees, so we need to convert.
  const angleInRads = (angle * Math.PI) / 180;
  // If this was meant to be reusable, this would
  // be configurable, but it's not, so it's
  // hardcoded. The # of pixels from the center
  // that our circle will bounce.
  const distance = 42;
  // Convert polar coordinages (angle, distance)
  // to cartesian ones (x, y), since JS uses
  // a cartesian coordinate system:
  const x = distance * Math.cos(angleInRads);
  const y = distance * Math.sin(angleInRads);
  // `normalize` is commonly called "lerp",
  // as well as Linear Interpolation. It
  // maps a value from one scale to another.
  // In this case, I want the time to vary
  // between 450ms and 600ms, with the first
  // point being the slowest, and the last
  // one being the fastest.
  //
  // It's defined below
  let timing = normalize(index, 0, 4, 450, 600);
  // `normalize` produces linear interpolation,
  // but I want there to be a *bit* of an ease;
  // I want it to appear to be slowing down,
  // as we get further into the circles.
  timing *= 1 + index * 0.22;
  const friction = normalize(index, 0, 4, 15, 40);
  const boop = useBoop({
    x,
    y,
    timing,
    scale: 1.4,
    springConfig: { tension: 180, friction },
  });
  return boop;
};
const CircleDemo = () => {
  const [c1s, c1t] = useAngledBoop(0);
  const [c2s, c2t] = useAngledBoop(1);
  const [c3s, c3t] = useAngledBoop(2);
  const [c4s, c4t] = useAngledBoop(3);
  const [c5s, c5t] = useAngledBoop(4);
  const [starStyles, starTrigger] = useBoop({
    scale: 1.1,
    rotation: 10,
    timing: 150,
    springConfig: {
      tension: 300,
      friction: 6,
    },
  });
  return (
    <Wrapper>
      <Button
        onMouseEnter={() => {
          // If I had more than 5 points, I might
          // write a `callAll()` helper function.
          // But I don't, so this is fine.
          c1t();
          c2t();
          c3t();
          c4t();
          c5t();
          starTrigger();
        }}
      >
        <IconWrapper style={starStyles}>
          <Icon icon={star} size={48} />
        </IconWrapper>
      </Button>
      <Circle style={c1s} />
      <Circle style={c2s} />
      <Circle style={c3s} />
      <Circle style={c4s} />
      <Circle style={c5s} />
    </Wrapper>
  );
};
// This helper function is used in the component
const normalize = (
  number,
  currentScaleMin,
  currentScaleMax,
  newScaleMin = 0,
  newScaleMax = 1
) => {
  // FIrst, normalize the value between 0 and 1.
  const standardNormalization =
    (number - currentScaleMin) / (currentScaleMax - currentScaleMin);
  // Next, transpose that value to our desired scale.
  return (
    (newScaleMax - newScaleMin) * standardNormalization + newScaleMin
  );
};
// My project uses styled-components.
// Nothing here is styled-components-specific,
// however. It's just the tool I was already
// using.
const Wrapper = styled.div`
  position: relative;
  width: min-content;
`;
const Button = styled(UnstyledButton)`
  position: relative;
  z-index: 3;
  padding: 8px;
  border-radius: 50%;
`;
const IconWrapper = styled(animated.span)`
  display: block;
  svg {
    display: block;
    stroke: var(--color-text) !important;
    fill: var(--color-background) !important;
  }
`;
const Circle = styled(animated.div)`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 8px;
  height: 8px;
  margin: auto;
  border-radius: 50%;
  background: hsl(50deg, 100%, 48%);
`;
export default CircleDemo;