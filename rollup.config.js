import babel from 'rollup-plugin-babel'
import cjs from 'rollup-plugin-commonjs'
import globals from 'rollup-plugin-node-globals'
import npm from 'rollup-plugin-npm'
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'

export default {
  dest: 'bundle/app.min.js',
  entry: 'src/main.js',
  format: 'iife',
  plugins: [
    babel({
      babelrc: false,
      exclude: ['node_modules/**', 'src/lib/semantic.min.js'],
      presets: [ 'es2015-rollup', 'react' ]
    }),
    cjs({
      exclude: 'node_modules/process-es6/**',
      include: [
        'node_modules/backbone/**',
        'node_modules/fbjs/**',
        'node_modules/jquery/**',
        'node_modules/object-assign/**',
        'node_modules/react/**',
        'node_modules/react-dom/**'
      ]
    }),
    globals(),
    npm({ main: true }),
    replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    resolve({ browser: true })
  ]
}
