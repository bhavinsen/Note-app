import React, { useState } from "react";

const NoteForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, body });
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-end justify-end gap-4 min-w-full py-2 align-middle sm:px-6 lg:px-8">
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
            required
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
            required
            rows="1"
            className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
          ></textarea>
        </div>
      </div>
     

      <button className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" type="submit">Add Note</button>
    
      {/* <input
        type="text"
        placeholder="Title"
        className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Body"
        value={body}
        
        onChange={(e) => setBody(e.target.value)}
        required
      ></textarea> */}
      {/* <button type="submit">Add Note</button> */}
    </form>
  );
};

export default NoteForm;
