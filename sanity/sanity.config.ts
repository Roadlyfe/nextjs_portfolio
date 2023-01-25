import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas/schema'

export default defineConfig({
  name: 'default',
  title: 'portfolio-build',

  projectId: 'jh63vhu2',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  // tools: (prev) => {
  //   // 👇 Uses environment variables set by Vite in development mode
  //   if (import.meta.env.DEV) {
  //     return prev
  //   }
  //   return prev.filter((tool) => tool.name !== 'vision')
  // },

  schema: {
    types: schemaTypes,
  },
})
