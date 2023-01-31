import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
// import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas/schema'

export default defineConfig({
  name: 'default',
  title: 'portfolio-build',

  projectId: 'h1ireiav',
  dataset: 'production',

  plugins: [deskTool()],

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

//, visionTool()