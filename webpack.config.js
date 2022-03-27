const path =require("path");

 module.exports={
    entry:"./src/index.js",
    mode:"production",
    output:{
        path:path.join(__dirname,"build"),
        filename:"bundle.js"
    },
    // devServer:{
    //     contentBase:path.join(__dirname,'dist'),
    //     compress:true,
    //     port:3500
    // },

    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
              }
        ]
    }
   
 };