config  = {
  entry: __dirname + '/src/index.ts',
  output: {
      path: __dirname + '/build',
      filename: 'bundle.js'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  devtool: 'source-map'
};

module.exports=config;
