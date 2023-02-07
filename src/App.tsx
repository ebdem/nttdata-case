import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { createTheme, CssBaseline, PaletteMode, ThemeProvider } from '@mui/material'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { router } from './routes/route'
import { darkTheme } from './Theme/dark'
import { lightTheme } from './Theme/light'
import { ColorContext } from './Theme/ColorContext'
import { SwitchModeButton } from './components/SwitchModeButton'
import './App.scss'

function App() {
  const [mode, setMode] = useState<PaletteMode>('light')

  const theme = React.useMemo(() => createTheme(mode === 'light' ? lightTheme : darkTheme), [mode])

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    [],
  )
  return (
    <ColorContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <RouterProvider router={router} />
        <ToastContainer />
      </ThemeProvider>
    </ColorContext.Provider>
  )
}

export default App
