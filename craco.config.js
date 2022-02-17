
const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@functions': path.resolve(__dirname, 'src/functions'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@layouts': path.resolve(__dirname, 'src/layouts')
    },
  },
};