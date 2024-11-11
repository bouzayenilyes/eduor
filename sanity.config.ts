import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'eduor',

  projectId: '1a142z34',
  dataset: 'production',
  basePath: "/admin",
  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
