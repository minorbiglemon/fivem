import React from 'react';
import * as d3 from 'd3';
import { useSpring, animated } from 'react-spring';
import PropTypes from 'prop-types';

const Arc = ({
  start, end, color, ...props
}) => {
  const arc = () => d3
    .arc()
    .innerRadius(0.75)
    .outerRadius(1)
    .startAngle(start)
    .endAngle(end)();

  const { endValue } = useSpring({
    from: { endValue: start },
    to: { endValue: end },
    config: {
      duration: 1,
      easing: d3.easeCircleOut
    }
  });

  // <path d={arc(start, end)} fill={color} {...props} />;

  return <animated.path d={endValue.to((value) => arc(start, value))} fill={color} {...props} />;
};

export default Arc;

Arc.propTypes = {
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  color: PropTypes.string
};

Arc.defaultProps = {
  color: '#2312'
};
