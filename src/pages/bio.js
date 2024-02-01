import React from "react";
import "../app/globals.css";

const Bio = () => {
  return (
    <div className="flex min-h-screen flex-col text-left px-6 sm:flex-row">
      <div className="p-6 sm:p-24 items-right text-lg text-white my-4 w-full sm:w-1/2  justify-center">
        <div>
          Don Englert studied music at California State University, Northridge
          and the Navy School Of Music in Washington D.C. He toured for nine
          years with bands such as Buddy Rich, Louis Bellson, and the Canadian
          rock band Lighthouse. He has played in the pit orchestra for more than
          20 productions in Toronto and Stratford, ON, recorded for film, radio
          and TV, and played on more than than 40 recordings, including two
          Grammy nominations and three platinum records.
        </div>
        <br />
        <p>More content here...</p>
      </div>
    </div>
  );
};

export default Bio;
