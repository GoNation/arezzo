const largeContentContainer = {
  name: 'largeContentContainer',
  label: 'Large Content Container',
  ui: {
    defaultItem: {
      storyName: 'Default Story Name',
      position: 'top-left',
      backgroundColor: '',
    },
  },
  fields: [
    {
      component: 'text',
      type: 'string',
      label: 'Story Name',
      name: 'storyName',
    },
    {
      component: 'select',
      type: 'string',
      label: 'Position',
      name: 'position',
      options: [
        { value: 'top-left', label: 'Top Left' },
        { value: 'top-center', label: 'Top Center' },
        { value: 'top-right', label: 'Top Right' },
        { value: 'left-center', label: 'Left Center' },
        { value: 'center', label: 'Center' },
        { value: 'right-center', label: 'Right Center' },
      ],
    },
    {
      component: 'text',
      type: 'string',
      label: 'Background Color',
      name: 'backgroundColor',
      hint: 'Provide a hex (e.g. #FF5733) or rgba (e.g. rgba(255,87,51,1)) value.',
    },
  ],
};

export default largeContentContainer;
