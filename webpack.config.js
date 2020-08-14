
module.exports = {
  entry: [
    './src/index.js'
  ], 
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js',
  }, 
  module: {
    rules: [  
      {
        test: /\.js$/,
        exclude:/node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }, 
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: "style-loader"
          }, 
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  }
}

// Sources Cited:
//https://medium.com/jeremy-gottfrieds-tech-blog/tutorial-how-to-build-a-webpack-app-with-vanilla-js-or-react-72ca2cc7e14
//https://github.com/jonathonwang/webpack-typescript-starter/blob/master/webpack.config.js
