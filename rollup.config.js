import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

const deps = Object.keys(pkg.dependencies || {});
const peerDeps = Object.keys(pkg.peerDependencies || {});
const defaultExternal = deps.concat(peerDeps);

export default [
  {
    input: 'src/main.ts',
    external: defaultExternal,
    output: [{ file: pkg.main, format: 'cjs' }],
    plugins: [
      babel({
        exclude: ['node_modules/**', '*.json']
      }),
      json(),
      typescript({ useTsconfigDeclarationDir: true })
    ]
  }
];
