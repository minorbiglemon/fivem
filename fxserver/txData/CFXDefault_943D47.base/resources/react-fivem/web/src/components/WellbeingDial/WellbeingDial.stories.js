import React from 'react';
import WellbeingDial from '.';

export default {
  title: 'WellbeingDial',
  component: WellbeingDial
};

const Template = (args) => <div style={{ width: '500px' }}><WellbeingDial {...args} /></div>;

export const Basic = Template.bind({});

Basic.args = {
  value: 50,
  color: '#4287f5'
};
