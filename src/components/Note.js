import React, { useEffect, useState } from "react";

const Note = ({
  note,
  onUpdateNote,
  isEditing,
  setIsEditing,
  setSelectedNote,
}) => {
  console.log("🚀 ~ file: Note.js:4 ~ Note ~ note:", note);
  const [title, setTitle] = useState(note.title);
  const [body, setBody] = useState(note.body);
  //   const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = (e) => {
    e.preventDefault();
    setIsEditing(false);
    setSelectedNote(null);
    onUpdateNote({
      id: note.id,
      title,
      body,
    });
    return;
  };

  return (
    <div>
      {isEditing && (
        <div className="flex items-end justify-end gap-4 min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="">
            <label
              for="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Enter Title
            </label>
            <div className="mt-2">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="">
            <label
              for="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Enter Body
            </label>
            <div className="mt-2">
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                rows="1"
                className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>
          <div className="flex items-end">
            <button
              onClick={(e) => {
                setIsEditing(false);
                handleUpdate(e);
              }}
              type="submit"
              className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Save
            </button>
          </div>
          <div className="flex items-end">
            <button
              onClick={(e) => {
                setIsEditing(false);
                setSelectedNote(null);
              }}
              type="submit"
              className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      {/* ) : (
        <>
          <h2 className="">{note.title}</h2>
          <p>{note.body}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )} */}
    </div>
  );
};

export default Note;
