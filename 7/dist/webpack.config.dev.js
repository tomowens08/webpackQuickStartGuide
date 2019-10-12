module.exports = {
mode: 'development',

plugins: [
 new HtmlWebpackPlugin({
 inject: true,
 template: paths.appHtml
 }),
 new InterpolateHtmlPlugin(HtmlWebpackPlugin, env.raw),