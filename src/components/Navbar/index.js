import Moment from 'react-moment';
import 'moment/locale/es'
import { AiFillApple,AiFillYoutube, AiOutlineTwitter} from "react-icons/ai";
import { IoLogoInstagram,  IoLogoVimeo} from "react-icons/io";
import { NavbarContent, NavLogo,  NavOptions, NavSocialItem, NavSocialMedia,NavHora } from './NavbarElement'


const Navbar = () => {
  
    return (
      <NavbarContent>
          <NavLogo>
              <div>
                  <AiFillApple />
              </div>
              <div>
                  <p className='title-nav'>True Studio</p>
              </div>
              <div>
                  <p className='title-info'>info</p>
              </div>
          </NavLogo>

          <NavOptions>
              <NavSocialMedia>
                  <NavSocialItem>
                      <a href='https://iconos8.es/license'>
                          <IoLogoInstagram />
                      </a>
                  </NavSocialItem>

                  <NavSocialItem>
                      <a href='https://iconos8.es/license'>
                          <AiOutlineTwitter />
                      </a>
                  </NavSocialItem>

                  <NavSocialItem>
                      <a href='https://iconos8.es/license'>
                          <AiFillYoutube />
                      </a>
                  </NavSocialItem>

                  <NavSocialItem>
                      <a href='https://iconos8.es/license'>
                          <IoLogoVimeo />
                      </a>
                  </NavSocialItem>

                  <NavSocialItem>

                  </NavSocialItem>
              </NavSocialMedia>

              <NavHora>
                 <Moment style={{fontSize:"14px"}} locale='es'  className='time '  format="dddd MMM D" />
              </NavHora>

              <NavHora>
                 <Moment style={{fontSize:"14px"}}  className='time' format="hh:mm a"  interval={1000} />
              </NavHora>

          </NavOptions>

      </NavbarContent>
  )
}

export default Navbar