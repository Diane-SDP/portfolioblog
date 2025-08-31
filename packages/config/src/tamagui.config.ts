import { defaultConfig } from '@tamagui/config/v4'
import { createTamagui } from 'tamagui'
import { bodyFont, headingFont } from './fonts'
import { animations } from './animations'

const pastelLight = {
  background1: '#e4e2ffff',
  primary1: '#7770f6ff',
  primary2: '#4b46afff',
  primary3: '#c3c0ffff',
  secondary1: '#5870b0ff',
  secondary2: '#495c90ff',
  secondary3: '#cdcbe9ff',
  accent1: '#FFD6E0',
  header1: '#E0E7FF',
  color1: '#413e7dff',
  color2: '#222',
  card1: '#FFFFFF',
  border1: '#E0E7FF',
}

const pastelDark = {
  background1: '#23213A',
  primary1: '#67a1b6ff',
  primary2: '#43637bff',
  primary3: '#b2e9fcff',
  secondary1: '#DFC992',
  secondary2: '#c0ad7dff',
  secondary3: '#9c8d67ff',
  accent1: '#FFD6E0',
  header1: '#2D2B4A',
  color1: '#add6e4ff',
  color2: '#FFF',
  card1: '#2D2B4A',
  border1: '#39376B',
}

export const config = createTamagui({
  ...defaultConfig,
  animations,
  fonts: {
    body: bodyFont,
    heading: headingFont,
  },
  themes: {
    ...defaultConfig.themes,
    light: {
      ...defaultConfig.themes.light,
      background1: pastelLight.background1,
      color1: pastelLight.color1,
      color2: pastelLight.color2,
      primary1: pastelLight.primary1,
      primary2: pastelLight.primary2,
      primary3: pastelLight.primary3,
      secondary1: pastelLight.secondary1,
      secondary2: pastelLight.secondary2,
      secondary3: pastelLight.secondary3,
      accent1: pastelLight.accent1,
      header1: pastelLight.header1,
      card1: pastelLight.card1,
      border1: pastelLight.border1,
    },
    dark: {
      ...defaultConfig.themes.dark,
      background1: pastelDark.background1,
      color1: pastelDark.color1,
      color2: pastelDark.color2,
      primary1: pastelDark.primary1,
      primary2: pastelDark.primary2,
      primary3: pastelDark.primary3,
      secondary1: pastelDark.secondary1,
      secondary2: pastelDark.secondary2,
      secondary3: pastelDark.secondary3,
      accent1: pastelDark.accent1,
      header1: pastelDark.header1,
      card1: pastelDark.card1,
      border1: pastelDark.border1,
    },
  },
  settings: {
    ...defaultConfig.settings,
    onlyAllowShorthands: false,
  },
})
