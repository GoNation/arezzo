import { defineConfig } from 'tinacms';
import heroComponent from './schemas/hero';
import sideBySide from './schemas/SideBySide';
import expandableShout from './schemas/expandableShout';
import largeContentContainer from './schemas/largeContentContainer';

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
        name: 'post',
        label: 'Posts',
        path: 'content/posts',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
      },
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
