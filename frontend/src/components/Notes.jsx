import React, { useContext } from 'react';
import NoteContext from '../context/notes/notecontext';
import Noteitem from './Noteitem';

const Notes = () => {
    const context = useContext(NoteContext);
    const { notes, setNotes } = context;
    if (!notes) {
        // defensive fallback (provider not mounted)
        return <div>Loading notes...</div>;
    }
    return (
        <div className="container">
            <h2>Your Notes</h2>
            {notes.length === 0 && <p>No notes available.</p>}
            <div className="row  g-3 my-2">
                {notes.map((note) => (
                    <Noteitem key={note.id} note={note} />
                ))}
            </div>
        </div>
    )
}

export default Notes
