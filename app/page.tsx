import type { Metadata } from 'next'
import type { FC } from 'react'
import React from 'react'

export const metadata: Metadata = {
  title: 'Al, o Professor Coruja',
  description: 'Al (Owl) por Asas Virtuais visa providenciar acesso educacional gratuito aos melhores modelos de Inteligência Artificial.',
}

const App: FC = () => {
  return (
    (
      <iframe
        src="https://udify.app/chat/ljuEfJAdpGqqm7qc"
        style={{ width: '100%', height: '100%', minHeight: '100dvh', border: 'none' }}
        allow="microphone">
      </iframe>
    )
  )
}

export default React.memo(App)
