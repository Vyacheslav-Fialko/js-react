import React from "react";

import Transaction from "./index";

export default {
  title: "Example/Transaction",
  component: Transaction,
};

const Template = (args) => <Transaction {...args} />;

export const InCome = Template.bind({});
InCome.args = {
  transaction: {
    label: "in come",
    value: 45,
    date: '67,87'
  },
};
