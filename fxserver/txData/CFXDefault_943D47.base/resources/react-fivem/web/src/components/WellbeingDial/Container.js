import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { animated, useSpring } from 'react-spring';
import * as d3 from 'd3';
import WellbeingDial from './WellbeingDial';

const getAnimationOptions = (value, animationDuration) => ({
  value,
  delay: 0,
  config: {
    duration: animationDuration,
    easing: d3.easeCircleOut
  }
});

const Container = ({ value, color, animationDuration }) => {
  const [animatedValue, setAnimatedValue] = useSpring(() => ({
    value: 0.1
  }));

  useEffect(() => {
    const animationOptions = getAnimationOptions(value, animationDuration);
    setAnimatedValue(animationOptions);
  }, [value]);

  const AnimatedWellbeingDial = animated(WellbeingDial);
  return (
    <AnimatedWellbeingDial
      value={animatedValue.value.to((val) => Math.floor(val))}
      color={color}
    />
  );
};

export default Container;

Container.propTypes = {
  value: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  animationDuration: PropTypes.number
};

Container.defaultProps = {
  animationDuration: 1000
};
