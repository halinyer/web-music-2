import styled from "styled-components";

export const WindowBtn = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 25px;
  padding-top: 15px;
  background: white;
  border-radius: 5px;
  cursor: pointer;
  will-change: width, height;
  z-index: 10;
`


export const WindowMain = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 5px;
  will-change: transform, opacity;

`


export const VideioWindow = styled.iframe`  
width: 100%;
height: 100%;

`