
const withImages = require('next-images')

module.exports = withImages({
  env: {
    host: 'furkanaydar-blog.herokuapp.com',
  },
  webpack: config => {

    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });

    return config;
  },
  
});

