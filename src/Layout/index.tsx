import React from 'react'
import DrawerAppBar from '../components/Navbar'

const Layout = ({ children }: any) => {
  return (
    <div>
      <DrawerAppBar />
      {children}
      <h1>footer</h1>
    </div>
  )
}

export default Layout
