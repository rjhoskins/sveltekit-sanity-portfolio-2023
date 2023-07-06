import { defineConfig } from 'sanity'
import { deskTool, StructureBuilder } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'

export default defineConfig({
  name: 'default',
  title: 'Sanity Project',

  projectId: 'cqscn1gj',
  dataset: 'production',

  plugins: [deskTool({
    structure: (S, context) => {
      return S.list()
        .title('Content')
        .items([
          // Minimum required configuration
          orderableDocumentListDeskItem({ type: 'project', S, context })
          // ... all other desk items
        ])
    }

  }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
