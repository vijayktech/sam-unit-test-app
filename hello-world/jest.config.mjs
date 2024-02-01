export default {
    moduleFileExtensions: [
      "mjs",
      // must include "js" to pass validation https://github.com/facebook/jest/issues/12116
      "js",
    ],   
     testPathIgnorePatterns: [
        "/node_modules/",
        "/cypress/"
      ],
      transform: {
        "^.+\\.m?js$": "babel-jest"
      },
      transformIgnorePatterns: [
        "\\.pnp\\.[^\\/]+$"
      ],
      // testMatch : [
      //   "**/**/*.cjs?(x)", 
      //   "**/?(*.)+(spec|test).cjs?(x)",
      //   "/tests/unit/*.cjs" 
      // ]
  };