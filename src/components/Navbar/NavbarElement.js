import styled from 'styled-components'


export const NavbarContent = styled.nav`
 /* background: #191D26; */
 width: 100%;
 height: 30px;
 z-index: 20;
padding: 0px 10px;
display: flex;
justify-content: space-between;
align-items: center;

/* EFFECTO GRAPH */
background: rgba(255, 255, 255, 0.2);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
`


export const NavOptions = styled.div`  

display: flex;
`


export const NavLogo = styled.div`
color: white;
display: flex;
align-items: center;

font-size:17px ;
  div{
    margin-right: 10px;
    cursor: pointer;
  }
 .title-nav{

     font-size: 14px;
     font-weight: 500;
 }

 .title-info{
    font-size: 14px;
 }
`


export const NavSocialMedia = styled.ul` 
list-style: none;
display: flex;
align-items: center;

`

export const NavSocialItem = styled.li`
color: white;
cursor: pointer;
margin-left: 6px;
display: flex;
align-items: center;

a{
  font-size: 17px;
    color: white;
}


`



export const NavHora = styled.div` 
 margin-left: 11px;
 display:  flex;
 align-items: center;
 .time{
     color: white;
     /* font-weight: 100; */
     font-size: 13px;
 }

`