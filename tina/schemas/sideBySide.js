const sideBySide = {
  name: 'sideBySide',
  label: 'Side By Side',
  ui: {
    defaultItem: {
      storyName: 'Default Story Name',
      reversed: false,
    },
  },
  fields: [
    {
      type: 'string',
      label: 'Story Name',
      name: 'storyName',
    },
    {
      type: 'boolean',
      label: 'Reversed Layout',
      name: 'reversed',
    },
  ],
};

export default sideBySide;
