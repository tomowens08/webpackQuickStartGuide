module.exports = require("babel-loader").custom(babel => {
            function myPlugin() {
                return {
                    visitor: {},
                };
            }