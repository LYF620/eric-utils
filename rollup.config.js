// 使用defineConfig 提供代码提示
import { defineConfig } from 'rollup'

export default defineConfig([
  {
    input: 'src/index.js',
    output: [
      {
        file: 'dist/iifeBundle.js',
        format: 'iife',
      },
    ],
  },
  {
    input: 'src/multiple.js',
    output: [
      {
        file: 'dist/cmdBundle.js',
        format: 'cjs',
      },
      {
        file: 'dist/esBundle.js',
        format: 'es',
      },
      {
        file: 'dist/amdBundle.js',
        format: 'amd',
      },
      {
        file: 'dist/umdBundle.js',
        name: 'myUmd',
        format: 'umd',
      },
    ],
  },
])
