// 使用defineConfig 提供代码提示
import { defineConfig } from 'rollup'
// 允许rollup从json文件导入数据
import json from '@rollup/plugin-json'
// 压缩bundle
import { terser } from 'rollup-plugin-terser'

export default defineConfig([
  {
    input: 'src/index.js',
    output: [
      // {
      //   file: 'dist/beforTerseBundle.js',
      //   format: 'iife',
      // },
      {
        dir: 'dist/iife',
        format: 'iife',
        plugins: [terser()],
        inlineDynamicImports: 'dist',
      },
      {
        dir: 'dist/cjs',
        format: 'cjs',
      },
      {
        dir: 'dist/es',
        format: 'es',
      },
      {
        dir: 'dist/amd',
        format: 'amd',
      },
      // {
      //   file: 'dist/umdBundle.js',
      //   name: 'myUmd',
      //   format: 'umd',
      // },
    ],
    plugins: [json()],
  },
])
