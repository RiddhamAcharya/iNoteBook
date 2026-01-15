import React,{ useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "6963770ae48661cdf6c7db66",
      user: "6960eba27591b8ebfa83bbf8",
      title: "My Title",
      description: "Please Wake up early",
      tag: "personal",
      date: "2026-01-11T10:10:18.697Z",
      __v: 0,
    },
    {
      _id: "6964d31b43630da7399585ec",
      user: "6960eba27591b8ebfa83bbf8",
      title: "YT Video Uploaded",
      description: "Please access the playlist",
      tag: "YouTube",
      date: "2026-01-12T10:55:23.379Z",
      __v: 0,
    },
    {
      _id: "6968b37ba027e1a7289f6d01",
      user: "6960eba27591b8ebfa83bbf8",
      title: "A new note cause previous was small",
      description: "Wow What a note!",
      tag: "new",
      date: "2026-01-15T09:29:31.433Z",
      __v: 0,
    },
    {
      _id: "6968b37ca027e1a7289f6d03",
      user: "6960eba27591b8ebfa83bbf8",
      title: "A new note cause previous was small",
      description: "Wow What a note!",
      tag: "new",
      date: "2026-01-15T09:29:32.575Z",
      __v: 0,
    },
    {
      _id: "6968b37da027e1a7289f6d05",
      user: "6960eba27591b8ebfa83bbf8",
      title: "A new note cause previous was small",
      description: "Wow What a note!",
      tag: "new",
      date: "2026-01-15T09:29:33.391Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
       
        {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
