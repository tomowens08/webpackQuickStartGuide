webpack - dev - server "mocha!./cover-my-client-tests.js"--options webpackOptions.js
module.exports = {
    output: "bundle.js",
    publicPrefix: "/",
    debug: true,
    includeFilenames: true,
    watch: true,
    postLoaders: [{
        test: "",
        exclude: [
            "node_modules.chai",
            "node_modules.coverjs-loader",
            "node_modules.webpack.buildin"
        ],
        loader: "coverjs-loader"
    }]
}
// cover-my-client-tests.js
require("./my-client-tests");
after(function() {
    require("cover-loader").reportHtml();
});