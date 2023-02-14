import { Box } from '@mui/system'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import MenuBar from '../components/Menu'
import Footer from '../components/Footer'
import DetailMenu from '../components/Menu/detailMenu'

const Layout = ({ children }: any) => {
  const { open } = useSelector((state: any) => state.detailMenu)

  return (
    <div>
      <Navbar />
      <MenuBar />
      {open && <DetailMenu />}
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
