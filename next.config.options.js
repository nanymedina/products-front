const path = require('path');
const withSourceMaps = require('@zeit/next-source-maps');

const stage = process.env.STAGE || 'local';

const envs = {
  local: {
    GRAPHQL_URL: 'http://localhost:3001/graphql',
    STAGE: stage,
  },
  stub: {
    GRAPHQL_URL: 'http://localhost:8882/graphql',
    STAGE: stage,
  },
  prod: {
    GRAPHQL_URL: 'https://products-bff.herokuapp.com/graphql',
    STAGE: stage,
  }
}

module.exports = withSourceMaps({
  webpack: config => {
    config.plugins = config.plugins || [];
    config.devtool = 'hidden-source-map';
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, 'src/components'),
      '@svg': path.resolve(__dirname, 'public/svg'),
    };
    config.module.rules.push(
      {
        test: /\.svg$/,
        issuer: {
          test: /\.(js|ts)x?$/,
        },
        use: ['svg-url-loader'],
      },
      {
        test: /\.(gif|png|jpg)(\?.*$|$)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[name].[ext]',
              publicPath: '/images/',
            },
          },
        ],
      }
    );
    return config;
  },
  env: envs[process.env.STAGE || 'local'],
});
