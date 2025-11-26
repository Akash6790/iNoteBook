// src/context/notes/NoteState.jsx
import React, { useState } from "react";
import NoteContext from "./notecontext";

const NoteState = (props) => {
  const notesInitial = {   
    success: true,
    notes: [
      {
        _id: "6925f4e024f1a3bfd5013a19",
        user: "6925f46424f1a3bfd5013a11",
        title: "new title",
        description: "new description ",
        tag: "General",
        date: "2025-11-25T18:26:40.720Z",
      },
      {
        _id: "6925f4fd24f1a3bfd5013a1b",
        user: "6925f46424f1a3bfd5013a11",
        title: "2nd new title",
        description: "new description ",
        tag: "General",
        date: "2025-11-25T18:27:09.691Z",
      },
      {
        _id: "6925f51024f1a3bfd5013a1e",
        user: "6925f46424f1a3bfd5013a11",
        title: "3rd new title",
        description: "new description ",
        tag: "General",
        date: "2025-11-25T18:27:28.852Z",
      },
      ,
      {
        _id: "6925f4fd24f1a3bfd5013a1b",
        user: "6925f46424f1a3bfd5013a11",
        title: "2nd new title",
        description: "new description ",
        tag: "General",
        date: "2025-11-25T18:27:09.691Z",
      },
      {
        _id: "6925f51024f1a3bfd5013a1e",
        user: "6925f46424f1a3bfd5013a11",
        title: "3rd new title",
        description: "new description ",
        tag: "General",
        date: "2025-11-25T18:27:28.852Z",
      },
      ,
      {
        _id: "6925f4fd24f1a3bfd5013a1b",
        user: "6925f46424f1a3bfd5013a11",
        title: "2nd new title",
        description: "new description ",
        tag: "General",
        date: "2025-11-25T18:27:09.691Z",
      },
      {
        _id: "6925f51024f1a3bfd5013a1e",
        user: "6925f46424f1a3bfd5013a11",
        title: "3rd new title",
        description: "new description ",
        tag: "General",
        date: "2025-11-25T18:27:28.852Z",
      },
      ,
      {
        _id: "6925f4fd24f1a3bfd5013a1b",
        user: "6925f46424f1a3bfd5013a11",
        title: "2nd new title",
        description: "new description ",
        tag: "General",
        date: "2025-11-25T18:27:09.691Z",
      },
      {
        _id: "6925f51024f1a3bfd5013a1e",
        user: "6925f46424f1a3bfd5013a11",
        title: "3rd new title",
        description: "new description ",
        tag: "General",
        date: "2025-11-25T18:27:28.852Z",
      },
      ,
      {
        _id: "6925f4fd24f1a3bfd5013a1b",
        user: "6925f46424f1a3bfd5013a11",
        title: "2nd new title",
        description: "new description ",
        tag: "General",
        date: "2025-11-25T18:27:09.691Z",
      },
      {
        _id: "6925f51024f1a3bfd5013a1e",
        user: "6925f46424f1a3bfd5013a11",
        title: "3rd new title",
        description: "new description ",
        tag: "General",
        date: "2025-11-25T18:27:28.852Z",
      },
      ,
      {
        _id: "6925f4fd24f1a3bfd5013a1b",
        user: "6925f46424f1a3bfd5013a11",
        title: "2nd new title",
        description: "new description ",
        tag: "General",
        date: "2025-11-25T18:27:09.691Z",
      },
      {
        _id: "6925f51024f1a3bfd5013a1e",
        user: "6925f46424f1a3bfd5013a11",
        title: "3rd new title",
        description: "new description ",
        tag: "General",
        date: "2025-11-25T18:27:28.852Z",
      },
    ],
  };

  // store the array itself (notesInitial.notes)
  const [notes, setNotes] = useState(notesInitial.notes);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
