import React, { useEffect } from 'react'

const Boop = ({ rotation = 0, timing = 150, children }) => {
  const [isBooped, setIsBooped] = React.useState(false);
  const style = {
    display: 'inline-block',
    transform: isBooped
      ? `rotate(${rotation}deg)`
      : `rotate(0deg)`,
    transition: `transform ${timing}ms`,
  };
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
  }, [isBooped, timing]);
  const trigger = () => {
    setIsBooped(true);
  };
  return (
    <span onMouseEnter={trigger} style={style}>
      {children}
    </span>
  );
};


//////////////////////////////////////////////////////


const [isBooped, setIsBooped] = React.useState(false)


////////////////////////////////////////////////////


const trigger = () => {
  setIsBooped(true);
};
return (
  <span onMouseEnter={trigger} style={style}></span> )

////////////////////////////

React.useEffect(() => {
  // We only want to act when we're going from
  // not-booped to booped.
  if (!isBooped) {
    return;
  }
  const timeoutId = window.setTimeout(() => {
    setIsBooped(false);
  }, timing);
  // Just in case our component happens to
  // unmount while we're booped, cancel
  // the timeout to avoid a memory leak.
  return () => {
    window.clearTimeout(timeoutId);
  };
  // Trigger this effect whenever `isBooped`
  // changes. We also listen for `timing` changes,
  // in case the length of the boop delay is
  // variable.
}, [isBooped, timing]);

  
////////////////////////////////////////////////////

  const style = {
    display: 'inline-block',
    transform: isBooped
      ? `rotate(${rotation}deg)`
      : `rotate(0deg)`,
    transition: `transform ${timing}ms`,
  };


  
////////////////////////////////////////////////////

const style = {
  display: 'inline-block',
  transform: isBooped
    ? `rotate(${rotation}deg)`
    : `rotate(0deg)`,
  transition: `transform ${timing}ms`,
};


////////////////////////////////////////////////////

<Boop rotation={20} timing={200}>
  <UnstyledButton>
    <Icon icon="gear" />
  </UnstyledButton>
</Boop>








