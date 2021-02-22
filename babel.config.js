module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["module:metro-react-native-babel-preset"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".js", ".json", ".ts", "tsx"],
          alias: {
            src: "./src",
            components: "./src/rn-config-tyler/packages/demo/components",
            examples: "./src/rn-config-tyler/packages/demo/examples",
            "rn-config-tyler":"./src/rn-config-tyler/packages/demo/helpers/lib",
          },
        },
      ],
    ],
  };
};
