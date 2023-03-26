import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {
  const [zoomIn,setZoom] = useState(false)
  return (
    <div>
      <form className='create-note'>
        <input  onChange={props.titleChange} name="title" value={props.titleValue} placeholder="Title" />
        <textarea onClick={()=>setZoom(true)} name="content" onChange={props.contentChange}  value={props.contentValue} placeholder="Take a note..." rows={zoomIn ? "4":"1"} />
        
        
        
        <Zoom  in ={zoomIn && true }>
        <Fab onClick={props.onClick}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
