module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react'
  ],
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-arrow-functions',
    '@babel/plugin-transform-template-literals',
    '@babel/plugin-transform-react-jsx',
    '@babel/plugin-proposal-optional-chaining'
  ]
};
