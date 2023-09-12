import { defineConfig } from 'tinacms';
import heroComponent from './schemas/hero';
import expandableShout from './schemas/expandableShout';
import largeContentContainer from './schemas/largeContentContainer';
import themeSchema from './schemas/theme';
import sideBySide from './schemas/sideBySide';
import siteConfigSchema from './schemas/siteConfig';
import json from 'content/test.json';

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main';

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        label: 'Chakra Theme',
        name: 'theme',
        path: 'content/theme', // you can decide on the path, ensure it exists
        fields: themeSchema.fields,
        format: 'json', // I'm assuming you want to save the theme as a JSON
        create: true, // Allows creating the theme from the CMS if it doesn't exist
        extension: 'json', // Ensure the file is saved as a JSON file
      },
      siteConfigSchema,
      {
        name: 'pageLayouts',
        label: 'Page Layouts',
        path: 'content/layouts',
        fields: [
          {
            type: 'object',
            list: true,
            name: 'components',
            label: 'Components',
            templates: [
              heroComponent,
              sideBySide,
              expandableShout,
              largeContentContainer,
            ],
          },
        ],
      },
    ],
  },
});
