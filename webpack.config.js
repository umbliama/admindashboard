module: {
    rules: [
        {
            test: /\.scss$/,
            use: [
                {
                    loader: "css-loader"
                },
                {
                    loader: "postcss-loader"
                },
                {
                    loader: "sass-loader"
                },
                {
                    loader: "style-loader"
                }
            ]
        }
    ];
}
