import styled from 'styled-components';
import image from '../../img/wallpaperbetter.jpg'

export const HeaderMain = styled.header`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-content: center;
position: relative;
background-image: url(${image});
background-position: center;
background-repeat: none;
background-size: cover;


`



export const HeaderVideo = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100vh;
overflow: hidden;
justify-content: center;
align-items: center;





`


export const HeaderContent = styled.div` 
width: 100%;
height: 100%;
top: 0;
right: 0;
position: absolute;

`

