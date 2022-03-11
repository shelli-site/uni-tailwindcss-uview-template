// tailwindcss-miniprogram-preset 适合那种 webpack 无法触及的场景

// 基础配置，无需任何preset
// https://github.com/sonofmagic/weapp-tailwindcss-webpack-plugin/blob/main/demo/uni-app/tailwind.config.js
/** @type {import('@types/tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  mode: 'jit',
  purge: {
    content: ['public/index.html', './src/**/*.{vue,js,ts,jsx,tsx,wxml}']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // 主要文字
        main: {DEFAULT: '#303133'},
        // 常规文字
        content: {DEFAULT: '#606266'},
        // 次要文字
        tips: {DEFAULT: '#909193'},
        // 占位文字
        light: {DEFAULT: '#c0c4cc'},
        // 边框的颜色
        border: {DEFAULT: '#dadbde'},
        // 背景的颜色
        bg: {DEFAULT: '#f3f4f6'},
        // 禁用的颜色
        disabled: {DEFAULT: '#c8c9cc'},

        // 主色
        primary: {DEFAULT: '#3c9cff', dark: '#398ade', disabled: '#9acafc', light: '#ecf5ff'},
        // 警示
        warning: {DEFAULT: '#f9ae3d', dark: '#f1a532', disabled: '#f9d39b', light: '#fdf6ec'},
        // 成功
        success: {DEFAULT: '#5ac725', dark: '#53c21d', disabled: '#a9e08f', light: '#f5fff0'},
        // 错误
        error: {DEFAULT: '#f56c6c', dark: '#e45656', disabled: '#f7b2b2', light: '#fef0f0'},
        // 提示
        info: {DEFAULT: '#909399', dark: '#767a82', disabled: '#c4c6c9', light: '#f4f4f5'},
      }
    }
  },
  variants: {},
  plugins: [],
  corePlugins: {
    preflight: false
  }
}
