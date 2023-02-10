import Navbar from '../components/Navbar'
import MenuBar from '../components/Menu'
import { Box } from '@mui/system'

const Layout = ({ children }: any) => {
  return (
    <div>
      <Navbar />
      <MenuBar />
      <Box
        sx={{
          marginTop: '150px',
        }}
      >
        {children}
      </Box>
      <h1>footer</h1>
    </div>
  )
}

export default Layout
