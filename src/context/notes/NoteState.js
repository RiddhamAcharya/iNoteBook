import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  
  const [notes, setNotes] = useState(notesInitial);
  // Get all notes
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjk2MGViYTI3NTkxYjhlYmZhODNiYmY4In0sImlhdCI6MTc2ODEyNDA3OX0.jye7hh5FGMHAzI2ymktkn9U2EQQl1nYStdcXZbSD7dU"
      }

    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  // Add a note
  const addNote = async (title, description, tag) => {
    const response =await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjk2MGViYTI3NTkxYjhlYmZhODNiYmY4In0sImlhdCI6MTc2ODEyNDA3OX0.jye7hh5FGMHAzI2ymktkn9U2EQQl1nYStdcXZbSD7dU"
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const note = {
      _id: "6968b37da027e1a7289f6d15",
      user: "6960eba27591b8ebfa83bbf8a",
      title: title,
      description: description,
      tag: tag,
      date: "2026-01-15T09:29:33.391Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
    console.log("Note added");
  };

  // Delete a note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjk2MGViYTI3NTkxYjhlYmZhODNiYmY4In0sImlhdCI6MTc2ODEyNDA3OX0.jye7hh5FGMHAzI2ymktkn9U2EQQl1nYStdcXZbSD7dU"
      },
    });
    const json = await response.json();
    console.log(json);

    console.log("Deleting the note with id " + id);
    const newNotes = notes.filter((note) => {return note._id !== id});
    setNotes(newNotes); 
  };

  // Edit a note
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjk2MGViYTI3NTkxYjhlYmZhODNiYmY4In0sImlhdCI6MTc2ODEyNDA3OX0.jye7hh5FGMHAzI2ymktkn9U2EQQl1nYStdcXZbSD7dU"
      },
      body: JSON.stringify({ title, description, tag }),
    });

    console.log("Editing the note with id " + id);
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.id = id;
        element.title = title;
        element.description = description;
        element.tag = tag;
        break;
      }
    }
  };
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
