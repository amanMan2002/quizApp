import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import QuizUI from './pages/QuizUI.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuizUI />
  </StrictMode>,
)
