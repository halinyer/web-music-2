import styled from "styled-components";



export const WindowBtn = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background: white;
  cursor: pointer;
  will-change: width, height;
  z-index: 30;


`


export const WindowMain = styled.div`
  width: 100%;
  height: 100%;
  background: white;

  video,source{
    width: 100%,
  }

`