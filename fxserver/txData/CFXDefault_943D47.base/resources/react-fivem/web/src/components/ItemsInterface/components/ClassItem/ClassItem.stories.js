import React from 'react';
import { Grid } from '@material-ui/core';
import ClassItem from '.';

export default {
  title: 'ClassItem',
  component: ClassItem
};

const Template = (args) => <Grid style={{ width: '800px' }}><ClassItem {...args} /></Grid>;

export const Basic = Template.bind({});

Basic.args = {
  storageItem: {
    item: {
      name: 'Revolver',
      description: 'Revolver',
      weight: 10,
      quantity: 1,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Revolver_icon.svg/1280px-Revolver_icon.svg.png',
      id: 'revolver'
    },
    index: 1
  },
  id: '1',
  index: 0,
  moveItem: () => {}
};
