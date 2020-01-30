
const withImages = require('next-images')

module.exports = withImages({
  env: {
    //host : 'localhost:3000'
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

