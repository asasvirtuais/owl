import type { FC } from 'react'
import React from 'react'

const App: FC = () => {
  return (
    (
      <iframe
        src="https://udify.app/chatbot/ljuEfJAdpGqqm7qc"
        style={{ width: '100%', height: '100%', minHeight: '100dvh', border: 'none' }}
        allow="microphone">
      </iframe>
    )
  )
}

export default React.memo(App)
