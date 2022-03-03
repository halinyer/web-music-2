import Window from '../Window';
import { FolderContainer, FolderWindow, TitleFolder, WindowBody, WindowNav } from './FolderElement'


const Folder = () => {
  let data = {
      name: 'Rare Wind',
      description: '#a8edea → #fed6e3',
      css: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    }

  return (
     <>
        <FolderContainer>
            <Window data={data}/>
        </FolderContainer>  
     </>
  )
}

export default Folder