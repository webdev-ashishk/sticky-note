"use client";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

export default function StickyNote({ id, text, onUpdate, onDelete }) {
  const [isEditing, setEditing] = useState(false);
  const [newText, setNewText] = useState(text);
  function handleEdit() {
    setEditing(true);
  }
  function handleSave() {
    setEditing(false);
    onUpdate(id, newText);
  }

  return (
    <>
      {isEditing ? (
        <div className="m-2 p-4 border-2 rounded-lg  bg-gray-400">
          {/* sticky note are here! */}
          <textarea
            name="sticky"
            id="stickynote"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="text-white bg-blue-900 p-2 rounded-lg mb-4"
          ></textarea>
          <br />
          <button
            className="bg-green-700 px-8 py-2 text-center font-bold rounded-lg hover:bg-green-950"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      ) : (
        <div className="bg-blue-800 px-4 py-2 mx-7 my-5 rounded-lg border-2 shadow-lg shadow-slate-500">
          <p className="text-2xl font-bold">{text}</p>
          <div className="border-2 flex flex-end gap-3">
            <button
              className="text-2xl  font-bold bg-gray-700 px-2 py-1 rounded-lg"
              onClick={handleEdit}
            >
              <CiEdit />
            </button>
            <button
              className="text-2xl font-bold bg-red-700 px-2 py-1 rounded-lg"
              onClick={onDelete}
            >
              <MdDelete />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
