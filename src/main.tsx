import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import siteConfig from './data/site-config.json'

const { theme } = siteConfig
const rootElement = document.documentElement
rootElement.style.setProperty('--color-bg', theme.background)
rootElement.style.setProperty('--color-surface', theme.surface)
rootElement.style.setProperty('--color-text', theme.text)
rootElement.style.setProperty('--heading-grad-start', theme.headingStart)
rootElement.style.setProperty('--heading-grad-end', theme.headingEnd)

document.title = siteConfig.site.title

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
