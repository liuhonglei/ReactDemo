var path = require('path');

console.log(path.dirname);

module.exports = {

    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          }
        ]
    },
}