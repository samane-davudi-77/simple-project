import React from 'react';
import { Helmet } from 'react-helmet';
import Note from "./Note";
import AddNote from "./AddNote";
const NoteList = ({notes,handleAddNotes,handleDelete}) => {
    return ( 
        <>
        <Helmet>
            <title>
                دفترچه یادداشت
            </title>
        </Helmet>
        <div className="notelist">
            {notes.map((item)=><Note
            id={item.id} text={item.text} date={item.date}
            handleDelete={handleDelete}
            />)}
            <AddNote 
            handleAddNotes={handleAddNotes}
             />
        </div>
        </>
     );
}
 
export default NoteList;