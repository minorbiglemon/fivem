import React from 'react';
import Phone from '.';

export default {
  title: 'Phone',
  component: Phone
};

const Template = (args) => <Phone {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  open: true,
  time: '00:00'
};
