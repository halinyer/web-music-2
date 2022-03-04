
import React from 'react'
import { HeaderContent, HeaderMain } from './HeaderElement'
import Navbar from '../Navbar'
  
const Header = ({children}) => {
  return (
    <HeaderMain>
         <Navbar/>
        <HeaderContent>
            {children}
        </HeaderContent>
    </HeaderMain>
  )
}

export default Header