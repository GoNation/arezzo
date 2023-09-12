const siteConfigSchema = {
  name: 'siteConfig',
  label: 'Site Configuration',
  path: 'content/config',
  fileName: 'siteConfig',
  extension: 'json',
  fields: [
    {
      type: 'string',
      name: 'businessId',
      label: 'Business ID',
    },
    {
      type: 'string',
      name: 'poweredId',
      label: 'Powered ID',
    },
    // ... add other fields in a similar manner
    {
      type: 'object',
      name: 'routes',
      label: 'Routes',
      list: true,
      fields: [
        {
          type: 'string',
          name: 'name',
          label: 'Name',
        },
        // ... define other properties for routes
      ],
    },
  ],
};

export default siteConfigSchema;
