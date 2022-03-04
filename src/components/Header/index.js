
import React from 'react'
import { HeaderContent, HeaderMain, HeaderVideo } from './HeaderElement'
import Navbar from '../Navbar'
  
const Header = ({children}) => {
  return (
    <HeaderMain>
         <Navbar/>
        <HeaderVideo>
           
        </HeaderVideo>
        <HeaderContent>
            {children}
        </HeaderContent>
    </HeaderMain>
  )
}

export default Header