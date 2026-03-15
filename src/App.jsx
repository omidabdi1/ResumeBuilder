import './App.css'
import { CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Body from './Body'
import { ResumeProvider } from './context/ResumeContext'

const theme = createTheme({
  palette: {
    primary: { main: '#2563eb' },
    secondary: { main: '#7c3aed' },
    background: { default: '#f1f5f9' },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResumeProvider>
        <CssBaseline />
        <Body />
      </ResumeProvider>
    </ThemeProvider>
  )
}

export default App
