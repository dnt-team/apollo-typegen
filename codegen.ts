import { CodegenConfig } from '@graphql-codegen/cli'

const impetusSubsquidConfig: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:4350/graphql',
  emitLegacyCommonJSImports: false,
  generates: {
    './src/resolvers-types.ts': {
      config: {
        useIndexSignature: true,
      },
      plugins: ['typescript', 'typescript-resolvers'],
    },
  },
}

export default impetusSubsquidConfig
