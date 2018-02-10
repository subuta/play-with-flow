const path = require('path')
const babel = require('babel-core')

module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.js',
      'test/helper/**/*.js',
    ],

    tests: [
      'test/**/*.test.js',
      'tests/**/*.snap',
    ],

    env: {
      type: 'node',
      runner: 'node',
      params: {
        env: `NODE_ENV=test;NODE_PATH=${path.join(wallaby.projectCacheDir, '../')}:${path.join(__dirname, '../node_modules')}`,
      },
    },

    testFramework: 'jest',

    compilers: {
      '**/*.js': wallaby.compilers.babel({
        babel,
        babelrc: false,
        presets: [
          [require.resolve('babel-preset-poi'), { jsx: 'react' }]
        ],
        plugins: [
          ['module-resolver',
            {
              root: ['./'],
              alias: {
                '@': './src',
              },
            },
          ],
        ],
      })
    }
  }
}
