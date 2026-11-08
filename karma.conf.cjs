module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'src/tests/**/*.spec.tsx',
      'src/tests/**/*.spec.ts',
    ],
    preprocessors: {
      'src/tests/**/*.spec.tsx': ['webpack'],
      'src/tests/**/*.spec.ts': ['webpack'],
    },
    webpack: {
      mode: 'development',
      devtool: 'inline-source-map',
      resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: [
              {
                loader: 'ts-loader',
                options: {
                  configFile: 'tsconfig.test.json',
                },
              },
            ],
            exclude: /node_modules/,
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|jpg|jpeg|gif|svg)$/i,
            type: 'asset/resource',
          },
        ],
      },
    },
    webpackMiddleware: {
      stats: 'errors-only',
    },
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      dir: 'coverage',
      reporters: [
        { type: 'html', subdir: 'html' },
        { type: 'text-summary' },
      ],
    },
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,
  });
};
