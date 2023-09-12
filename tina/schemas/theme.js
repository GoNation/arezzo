const themeSchema = {
  name: 'chakraTheme',
  label: 'Chakra Theme',
  fields: [
    {
      name: 'Button',
      label: 'Button',
      component: 'group',
      type: 'object',
      fields: [
        {
          type: 'string',
          name: 'fontWeight',
          label: 'Font Weight',
          defaultValue: 'bold',
        },
        {
          type: 'string',
          name: 'textTransform',
          label: 'Text Transform',
          defaultValue: 'uppercase',
        },
        {
          component: 'group-list',
          type: 'object',
          name: 'variants',
          label: 'Button Variants',
          itemProps: item => ({
            label: item.variantName,
          }),
          defaultItem: () => ({
            variantName: 'Default',
            bg: 'transparent',
            color: 'dark',
            borderColor: 'dark',
          }),
          fields: [
            {
              type: 'string',
              name: 'variantName',
              label: 'Variant Name',
            },
            {
              type: 'string',
              name: 'bg',
              label: 'Background Color',
            },
            {
              type: 'string',
              name: 'color',
              label: 'Font Color',
            },
            {
              type: 'string',
              name: 'borderColor',
              label: 'Border Color',
            },
            // ... Any other properties you want to be configurable for each variant
          ],
        },
      ],
    },
    {
      name: 'colors',
      label: 'Colors',
      component: 'group-list',
      type: 'object',
      itemProps: item => ({
        label: item.colorName,
      }),
      defaultItem: () => ({
        colorName: 'Primary',
        shade50: '#f7fafc',
        // ... other shades up to 900
        shade900: '#1a202c',
      }),
      fields: [
        {
          type: 'string',
          name: 'colorName',
          label: 'Color Name',
        },
        {
          type: 'string',
          name: 'shade50',
          label: 'Shade 50',
        },
        // ... Fields for other shades up to shade900
        {
          type: 'string',
          name: 'shade900',
          label: 'Shade 900',
        },
      ],
    },
    {
      name: 'typography',
      label: 'Typography',
      component: 'group',
      type: 'object',
      fields: [
        {
          type: 'string',
          name: 'fontFamily',
          label: 'Font Family',
        },
        // ... other typography related fields
      ],
    },

    // ... other components can be added in a similar fashion
  ],
};

export default themeSchema;
