import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeProvider } from '@emotion/react'
import { theme } from './constants/theme'
import { Provider } from 'react-redux'
import { store } from './store/store'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>,
  </StrictMode>,
)
