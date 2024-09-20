import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';
import db from '@astrojs/db';
import tailwind from '@astrojs/tailwind';
import solidJs from '@astrojs/solid-js';

export default defineConfig({
  output: 'hybrid',
  adapter: netlify(),
  integrations: [db(), tailwind(), solidJs()]
});