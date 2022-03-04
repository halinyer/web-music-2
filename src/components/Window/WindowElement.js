import styled from "styled-components";

export const WindowBtn = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 25px;
  background: white;
  border-radius: 0px;
  cursor: pointer;
  will-change: width, height;
  z-index: 10;
`


export const WindowMain = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  will-change: transform, opacity;

`


export const VideioWindow = styled.iframe`  
width: 100%;
height: 100%;

`