
import React from 'react'
import { HeaderContent, HeaderMain, HeaderVideo, Videos } from './HeaderElement'
import Navbar from '../Navbar'
  
const Header = ({children}) => {
  return (
    <HeaderMain>
         <Navbar/>
        <HeaderVideo>
           {/* <video muted autoPlay loop>
               <source src={Back}/>
           </video> */}
        </HeaderVideo>
        <HeaderContent>
            {children}
        </HeaderContent>
    </HeaderMain>
  )
}

export default Header