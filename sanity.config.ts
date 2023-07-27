import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import clientConfig from './sanity/config/client-config'; // adjust the path if necessary
import schemas from './sanity/schemas';

const config = defineConfig({
  basePath: '/studio',
  projectId: clientConfig.projectId,
  title: 'online-soni',
  dataset: clientConfig.dataset,
  plugins: [
    deskTool(),
    visionTool({ defaultApiVersion: clientConfig.apiVersion }),
  ],
  schema: { types: schemas }
});

export default config;
