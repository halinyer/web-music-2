import styled from "styled-components";
import icon from '../../icons/folderMac.png'


export const FolderContainer = styled.div`  
background-image: url(${icon});
background-repeat: none;
background-position:center center;
background-size: cover;
width: 60px;
height: 60px;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
z-index: 10;

`


export const TitleFolder = styled.p`

color: white;
` 
