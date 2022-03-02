
import React from 'react'
import { HeaderContent, HeaderMain, HeaderVideo, Videos } from './HeaderElement'
import Back from '../../videos/header.mp4'
  
const Header = ({children}) => {
  return (
    <HeaderMain>
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