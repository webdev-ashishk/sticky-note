"use client";
import StickyNote from "@/components/stickyNote";
import { MyContext } from "@/context/myContext";
import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";

export default function Home() {
  const [notes, setNotes] = useState([]);
  function addNote() {
    setNotes([...notes, { id: Date.now(), text: "text came here" }]);
  }
  function updateNote(id, newText) {
    setNotes((preNote) =>
      preNote.map((note) =>
        note.id === id ? { ...note, text: newText } : note
      )
    );
  }
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };
  console.log(notes);
  return (
    <MyContext.Provider value={{ notes, setNotes }}>
      <main>
        {/* title  */}
        <div>
          <h1 className="text-5xl font-extrabold bg-gradient-to-br from-blue-800 to-red-200 bg-clip-text text-transparent">
            QUICK-NOTE
          </h1>
        </div>
        {/* button  */}
        <div className="text-5xl font-bold text-blue-400 flex justify-center items-center">
          <button onClick={addNote}>
            <CiCirclePlus />
          </button>
        </div>
        {/* textarea  */}
        <div className="flex flex-wrap justify-center items-center">
          {notes &&
            notes.map((note) => {
              return (
                <div key="note.id">
                  <StickyNote
                    id={note.id}
                    text={note.text}
                    onUpdate={updateNote}
                    onDelete={() => deleteNote(note.id)}
                  />
                </div>
              );
            })}
        </div>
      </main>
    </MyContext.Provider>
  );
}
