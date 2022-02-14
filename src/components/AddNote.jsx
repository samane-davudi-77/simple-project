import { useState } from "react";

const AddNote =({handleAddNotes}) =>{
    const [noteText,setNoteText] = useState("");
    const characterlimit = 200;


    const handlechangetext = (event) => {
        if(characterlimit - noteText.length >= 0){
            setNoteText(event.target.value);
        }
    };

    const handleSaveClick =() => {
        if(noteText.trim().length >0){
            handleAddNotes(noteText);
            setNoteText("");
        }

    };
    return(
        <div className="newnote">
            <textarea
            rows="8"
            cols="10"
            placeholder="اضافه کردن یادداشت جدید"
            value={noteText}
            onChange={handlechangetext}
            >
            </textarea>
            <div className="note-footer">
                <small>{characterlimit - noteText.length} باقیمانده</small>
                <button className="save" onClick={handleSaveClick}>save</button>
            </div>

        </div>
    );
};
export default AddNote;