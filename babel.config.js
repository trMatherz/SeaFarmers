module.exports = {
  presets: [require.resolve('@docusaurus/core/lib/babel/preset')],
};

module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',  // Add this to handle JSX
  ],
};