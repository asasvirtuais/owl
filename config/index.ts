import type { AppInfo } from '@/types/app'
export const APP_ID = `${process.env.NEXT_PUBLIC_APP_ID}`
export const API_KEY = `${process.env.NEXT_PUBLIC_APP_KEY}`
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const APP_INFO: AppInfo = {
  title: 'Owl by Asas Virtuais',
  description: 'OWL by Asas Virtuais aims to provide educational access to the best AI models.',
  copyright: '',
  privacy_policy: '',
  default_language: 'en-US',
}

export const isShowPrompt = true
export const promptTemplate = ''

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'owl.locale.cookie.name'

export const DEFAULT_VALUE_MAX_LEN = 48
