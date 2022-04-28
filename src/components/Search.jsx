import React, { useState } from "react";
import Links from "./Links";
import { useResultContext } from "../contexts/ResultContextProvider";

const Search = () => {
  const [text, setText] = useState("");
  const { setSearchTerm } = useResultContext();

  return (
    <div className="relative sm:ml-40 md:ml-65 sm:-mt-10 mt-3">
      <input
        type="text"
        value={text}
        placeholder="Search Goggl or type URL"
        onChange={(e) => setText(e.target.value)}
        onKeyPress={event => {
          if(event.key ===  "Enter") {
            setSearchTerm(text)
          }
        }}
        className="sm:w-96 w-80 h-10 dark:dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
      />
      {text && (
        <button
          type="button"
          className="absolute top-1.5 right-4 text-2xl text-gray-500"
          onClick={() => {
            setSearchTerm(text);
          }}
        >
          🔎
        </button>
      )}
      <Links />
    </div>
  );
};

export default Search;
