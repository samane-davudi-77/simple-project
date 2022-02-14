import React from 'react';
import Image from "../assest/delete.png"

const Note = ({id,text,date,handleDelete}) => {
    
    return (  
        <div className="note">
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
            <button className="fa fa-trash" onClick={()=>handleDelete(id)}></button>
            </div>
        </div>
    );
}
 
export default Note;