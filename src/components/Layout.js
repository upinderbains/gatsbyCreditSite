import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Globalstyle from "../styles/Globalstyle"

const Layout = ({ children }) => {
  return (
    <div id="root">
      <Globalstyle />
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
