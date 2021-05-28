import React from 'react';
import ItemsInterface from '.';

export default {
  title: 'ItemsInterface',
  component: ItemsInterface
};

const Template = (args) => <ItemsInterface {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  open: true
};
