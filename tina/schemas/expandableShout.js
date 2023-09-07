const expandableShout = {
  name: 'expandableShout',
  label: 'Expandable Shout',
  ui: {
    defaultItem: {
      backgroundImage: 'Avatar', // Default value
      customBackground: '', // Empty string by default
      backgroundColor: '', // Empty string by default
    },
  },
  fields: [
    {
      component: 'select',
      type: 'string',
      name: 'backgroundImage',
      label: 'Background Image',
      description: 'Choose the type of background for the Expandable Shout.',
      options: [
        { value: 'Avatar', label: 'Avatar' },
        { value: 'Custom', label: 'Custom' },
        { value: 'Solid Color', label: 'Solid Color' },
        { value: 'None', label: 'None' },
      ],
    },
    {
      type: 'string',
      label: 'Custom Background',
      name: 'customBackground',
      description:
        'Provide a URL if "Custom" is selected for Background Image.',
    },
    {
      type: 'string',
      label: 'Background Color',
      name: 'backgroundColor',
      description:
        'Provide a hex (e.g. #FF5733) or rgba (e.g. rgba(255,87,51,1)) value if "Solid Color" is selected for Background Image.',
    },
  ],
};

export default expandableShout;
