import React, { useState } from 'react'
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from 'react-spring'

import { VideioWindow, WindowBtn,  WindowMain } from './WindowElement';

const Window = ({data}) => {

    const WindowAcion = animated(WindowBtn)
    const WindowContent = animated(WindowMain)

    const WidthWindow = window.screen.width / 3
    const HeiWindow = window.screen.height / 3



    const [open, set] = useState(false)

    const springApi = useSpringRef()
    const { size, ...rest } = useSpring({
      ref: springApi,
      config: config.stiff,
      from: { size: '20%', background: 'transparent', x:0, y:0, padding: "25px"},
      to: {
        size: open ? '60%' : '20%',
        background: open ? 'white' : 'transparent',
        position: open ? "absolute" : "initial",
        padding: open ? "0px": "25px",
        paddingTop: "20px",
        top: open ? 1 : 0,
        left: open ? 1 : 0,
        right: open ? 1: 0,
        bottom: open ? 1 : 0, 
        x: open ?  WidthWindow /2  :  0,
        y: open ?  HeiWindow /2  : 0,
       
      },
    })
  
    const transApi = useSpringRef()
    const transition = useTransition(open ? data : [], {
      ref: transApi,
      trail: 400 / data.length,
      from: { opacity: 0, scale: 0 },
      enter: { opacity: 1, scale: 1 },
      leave: { opacity: 0, scale: 0 },
    })
  
    // This will orchestrate the two animations above, comment the last arg and it creates a sequence
    useChain(open ? [springApi, transApi] : [transApi, springApi], [
      0,
      open ? 0.1 : 0.6,
    ])


  return (
    <WindowAcion style={{ ...rest, width: size, height: size }}
      onClick={() => set(open => !open)}>
      {transition((style, item) => (
        <WindowContent
          style={{ ...style}}
        >
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/E5y7T9c0P2o" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen></iframe>
        </WindowContent>
      ))}

    </WindowAcion>
  )
}
export default Window