import {useState,useRef,useEffect} from 'react'
import Window from '../Window';
import { FolderContainer, FolderWindow, TitleFolder, WindowBody, WindowNav } from './FolderElement'


const Folder = () => {


  return (
     <>
        <FolderContainer>
            <Window/>
        </FolderContainer>  
     </>
  )
}

export default Folder