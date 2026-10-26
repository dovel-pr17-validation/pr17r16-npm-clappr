import { clapprSiblingSourceAlias, defineClapprLib } from '../../vite.config.base.mjs'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const { version } = require('./package.json')
const { version: clapprCoreVersion } = require('@clappr/core/package.json')

const replace = {
  VERSION: clapprCoreVersion,
  CLAPPR_VERSION: version,
  CLAPPR_CORE_VERSION: clapprCoreVersion
}

export default defineClapprLib({
  name: 'Clappr',
  entry: 'src/main.js',
  fileName: {
    umd: 'clappr.js',
    min: 'clappr.min.js'
  },
  formats: ['umd'],
  alias: clapprSiblingSourceAlias(),
  replace,
  cssLoadPaths: ['../clappr-core/src/base/scss'],
  server: { host: '0.0.0.0', port: 8080 }
})
