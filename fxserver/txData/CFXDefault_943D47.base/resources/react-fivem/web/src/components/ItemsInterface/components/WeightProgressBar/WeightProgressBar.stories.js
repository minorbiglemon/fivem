import React from 'react';
import WeightProgressBar from '.';

export default {
  title: 'WeightProgressBar',
  component: WeightProgressBar
};

const Template = (args) => <WeightProgressBar {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  weight: 50,
  maxWeight: 250
};
