const heroComponent = {
  name: 'hero',
  label: 'Hero',
  ui: {
    defaultItem: {
      // Default values, modify as needed
      storyName: 'Default Story Name',
      showLogo: true,
      shouldShowPhoneAndDirections: true,
    },
  },
  fields: [
    {
      type: 'string',
      label: 'Story Name',
      name: 'storyName',
    },
    {
      type: 'boolean', // Note: changing component to type and using boolean
      label: 'Show Logo',
      name: 'showLogo',
    },
    {
      type: 'boolean',
      label: 'Show Phone and Directions',
      name: 'shouldShowPhoneAndDirections',
    },
  ],
};

export default heroComponent;
