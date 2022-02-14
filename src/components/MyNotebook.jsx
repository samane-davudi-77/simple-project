import { nanoid } from '@reduxjs/toolkit';
import React, {useState} from 'react';
import Footer from './Footer';
import Header from './Header';
import NoteList from './NoteList';
import Search from './Search';


const MyNotebook = () => {
    const [notes,setNotes] = useState([
        {
          id:nanoid(),
          text: "این اولین یادداشت من است",
          date: "4/7/2021"
        },
        {
          id: nanoid(),
          text: "این دومین یادداشت من است",
          date: "4/7/2021"
        },
        {
          id: nanoid(),
          text: "این سومین یادداشت من است",
          date: "4/7/2021"
        },
      ]);

      const addNote = (text) =>{
        const date = new Date();
        const newNote = {
          id: nanoid(),
          text: text,
          date: date.toLocaleDateString()
        };
        const newNotes =[...notes, newNote];
        setNotes(newNotes);
      }

      const deleteNote = (id) =>{
        const newNotes = notes.filter((item) => item.id !== id);
        setNotes(newNotes);
      }

      const[searchText,setSearchText] = useState("");
    return ( 
      <>
        <div className="App-container">
            <Header />
            <Search handleSearchNote={setSearchText} />
            <NoteList
             notes={notes} 
             handleAddNotes={addNote}
             handleDelete={deleteNote}
             />
            
        </div>
             <Footer />
             </>
     );
}
 
export default MyNotebook;