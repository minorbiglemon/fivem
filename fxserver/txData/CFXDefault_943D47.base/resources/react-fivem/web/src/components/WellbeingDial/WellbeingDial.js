import React from 'react';
import * as d3 from 'd3';
import PropTypes from 'prop-types';
import Color from 'color';
import Arc from '../d3/Arc';

const arcStart = 0;
const arcEnd = Math.PI * 2;

const WellbeingDial = ({ value, color }) => {
  const percentScale = d3
    .scaleLinear()
    .domain([0, 100])
    .range([0, 1]);
  const angleScale = d3
    .scaleLinear()
    .domain([0, 1])
    .range([arcStart, arcEnd])
    .clamp(true);

  const percent = percentScale(value);
  const angle = angleScale(percent);

  return (
    <svg viewBox={[-1, -1, 2, 2].join(' ')}>
      <circle cx={0} cy={0} r={0.75} fill="black" />
      <Arc start={arcStart} end={arcEnd} color={Color(color).lighten(0.2)} style={{ opacity: 0.5 }} />
      <Arc start={arcStart} end={angle} color={color} />
    </svg>
  );
};

export default WellbeingDial;

WellbeingDial.propTypes = {
  value: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired
};
