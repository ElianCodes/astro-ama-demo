// @ts-check
import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';
import db from '@astrojs/db';
import tailwind from '@astrojs/tailwind';
import solidJs from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [db(), tailwind(), solidJs()]
});