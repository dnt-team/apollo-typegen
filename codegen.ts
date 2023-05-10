import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:4350/graphql',

  generates: {
    'src/generated/graphql.ts': {
      plugins: ['typescript'],
      config: {
        maybeValue: 'T | null | undefined',
        numericEnums: true,
      },
    },
  },
}

export default config
