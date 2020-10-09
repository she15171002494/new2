module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  // vant中 自动按需进入组件
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
}
