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
        main: {DEFAULT: '#303133'},
        content: {DEFAULT: '#606266'},
        tips: {DEFAULT: '#909193'},
        light: {DEFAULT: '#c0c4cc'},
        border: {DEFAULT: '#dadbde'},
        bg: {DEFAULT: '#f3f4f6'},
        disabled: {DEFAULT: '#c8c9cc'},

        primary: {DEFAULT: '#3c9cff', dark: '#398ade', disabled: '#9acafc', light: '#ecf5ff'},
        warning: {DEFAULT: '#f9ae3d', dark: '#f1a532', disabled: '#f9d39b', light: '#fdf6ec'},
        success: {DEFAULT: '#5ac725', dark: '#53c21d', disabled: '#a9e08f', light: '#f5fff0'},
        error: {DEFAULT: '#f56c6c', dark: '#e45656', disabled: '#f7b2b2', light: '#fef0f0'},
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
