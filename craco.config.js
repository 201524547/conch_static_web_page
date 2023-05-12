const CracoAlias = require("react-app-alias");

module.exports = {
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: "tsconfig",
                baseUrl: "./src",
                paths: {
                    "@src/*": ["./src/*"],
                    "@feature/*": ["./src/feature/*"],
                },
            },
        },
    ],
};
