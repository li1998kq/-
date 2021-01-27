module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [(__dirname, "./src/style/app.less")]
    }
  }
}

