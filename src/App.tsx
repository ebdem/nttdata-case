import React, { useState, Suspense } from 'react'
import { createTheme, CssBaseline, PaletteMode, ThemeProvider } from '@mui/material'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { router } from './routes/route'
import { darkTheme } from './Theme/dark'
import { lightTheme } from './Theme/light'
import { ColorContext } from './Theme/ColorContext'
import Loading from './components/Loading'
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
        <Suspense fallback={<Loading />}>
          <RouterProvider router={router} />
        </Suspense>
        <ToastContainer />
      </ThemeProvider>
    </ColorContext.Provider>
  )
}

export default App
