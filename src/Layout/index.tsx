import Navbar from '../components/Navbar'
import MenuBar from '../components/Menu'
import Footer from '../components/Footer'
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
      <Footer />
    </div>
  )
}

export default Layout
