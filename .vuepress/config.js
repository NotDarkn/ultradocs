import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  title: 'ULTRADOCS',
  description: 'Documentation for all speedrun-related tech in ULTRAKILL',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: ['/', '/get-started', '/speedrun-tech'],
    
  }),
  bundler: viteBundler(),
})
