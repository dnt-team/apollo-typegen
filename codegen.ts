import { CodegenConfig } from '@graphql-codegen/cli'

const impetusSubsquidConfig: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:4350/graphql',
  documents: ['src/queries/*.ts'],
  emitLegacyCommonJSImports: false,
  generates: {
    './src/gql/': {
      preset: 'client',
    },
  },
}

export default impetusSubsquidConfig
