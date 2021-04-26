
import { animated, useSpring } from 'react-spring';
const Boop = ({ rotation = 0, timing = 150, children }) => {
  const [isBooped, setIsBooped] = React.useState(false);
  const style = useSpring({
    display: 'inline-block',
    transform: isBooped
      ? `rotate(${rotation}deg)`
      : `rotate(0deg)`,
  });
  React.useEffect(() => {
    // Unchanged
  }, [isBooped, timing]);
  const trigger = () => {
    // Unchanged
  };
  return (
    <animated.span onMouseEnter={trigger} style={style}>
      {children}
    </animated.span>
  );
};

////////////////////////////////////////////////////

const style = useSpring({
  display: 'inline-block',
  transform: isBooped
    ? `rotate(${rotation}deg)`
    : `rotate(0deg)`,
  config: {
    tension: 300,
    friction: 10,
  },
});

////////////////////////////////////////////////////

const Boop = ({
  x = 0,
  y = 0,
  rotation = 0,
  scale = 1,
  timing = 150,
  children,
}) => {
  const [isBooped, setIsBooped] = React.useState(false);
  const style = useSpring({
    display: 'inline-block',
    transform: isBooped
      ? `translate(${x}px, ${y}px)
         rotate(${rotation}deg)
         scale(${scale})`
      : `translate(0px, 0px)
         rotate(0deg)
         scale(1)`,
    config: {
      tension: 300,
      friction: 10,
    },
  });
  // The rest is unchanged…
};

////////////////////////////////////////////////////

import { animated } from 'react-spring';
function SomeComponent() {
  const [style, trigger] = useBoop({ y: 10 });
  return (
    <button onMouseEnter={trigger}>
      Show more
      <animated.span style={style}>
        <Icon icon="caret-down" />
      </animated.span>
    </button>
  );
}

////////////////////////////////////////////////////

// hooks/use-boop.js
import React from 'react';
import { useSpring } from 'react-spring';
function useBoop({
  x = 0,
  y = 0,
  rotation = 0,
  scale = 1,
  timing = 150,
  springConfig = {
    tension: 300,
    friction: 10,
  },
}) {
  const [isBooped, setIsBooped] = React.useState(false);
  const style = useSpring({
    display: 'inline-block',
    transform: isBooped
      ? `translate(${x}px, ${y}px)
         rotate(${rotation}deg)
         scale(${scale})`
      : `translate(0px, 0px)
         rotate(0deg)
         scale(1)`,
    config: springConfig,
  });
  React.useEffect(() => {
    // All the same stuff...
  }, [isBooped]);
  const trigger = React.useCallback(() => {
    setIsBooped(true);
  }, []);
  return [style, trigger];
}

////////////////////////////////////////////////////

// components/Boop.jsx
import React from 'react';
import { animated } from 'react-spring';
import useBoop from '@hooks/use-boop';
const Boop = ({ children, ...boopConfig }) => {
  const [style, trigger] = useBoop(boopConfig);
  return (
    <animated.span onMouseEnter={trigger} style={style}>
      {children}
    </animated.span>
  );
};


////////////////////////////////////////////////////

// hooks/use-boop.js
import React from 'react';
import { useSpring } from 'react-spring';
function useBoop({
  rotation = 0,
  timing = 150,
  springConfig = {
    tension: 300,
    friction: 10,
  },
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isBooped, setIsBooped] = React.useState(false);
  const style = useSpring({
    // All the same stuff
  });
  React.useEffect(() => {
    // All the same stuff here as well...
  }, [isBooped]);
  const trigger = React.useCallback(() => {
    // Yep yep
  }, []);
  let applicableStyle = prefersReducedMotion ? {} : style;
  return [applicableStyle, trigger];
}

////////////////////////////////////////////////////

import React from 'react';
import { useSpring } from 'react-spring';
// UPDATE this path to your copy of the hook!
// Source here: https://joshwcomeau.com/snippets/react-hooks/use-prefers-reduced-motion
import usePrefersReducedMotion from '@hooks/use-prefers-reduced-motion.hook';
function useBoop({
  x = 0,
  y = 0,
  rotation = 0,
  scale = 1,
  timing = 150,
  springConfig = {
    tension: 300,
    friction: 10,
  },
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isBooped, setIsBooped] = React.useState(false);
  const style = useSpring({
    transform: isBooped
      ? `translate(${x}px, ${y}px)
         rotate(${rotation}deg)
         scale(${scale})`
      : `translate(0px, 0px)
         rotate(0deg)
         scale(1)`,
    config: springConfig,
  });
  React.useEffect(() => {
    if (!isBooped) {
      return;
    }
    const timeoutId = window.setTimeout(() => {
      setIsBooped(false);
    }, timing);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isBooped]);
  const trigger = React.useCallback(() => {
    setIsBooped(true);
  }, []);
  let appliedStyle = prefersReducedMotion ? {} : style;
  return [appliedStyle, trigger];
}
export default useBoop;

////////////////////////////////////////////////////



////////////////////////////////////////////////////



////////////////////////////////////////////////////