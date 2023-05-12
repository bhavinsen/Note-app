import React from "react";

const NoteItem = ({ note, onClick, onDelete, setIsEditing }) => {
  return (
    <>
      <tr>
        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
          {note.title}
        </td>
        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {note.body.substring(0, 50)}
        </td>
        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
          <button
            className="text-indigo-500 mr-4"
            onClick={() => {
              onClick();
              setIsEditing(true);
            }}
          >
            Edit
          </button>
          <button className="text-red-500" onClick={onDelete}>
            Delete
          </button>
        </td>
      </tr>

    </>
  );
};

export default NoteItem;
