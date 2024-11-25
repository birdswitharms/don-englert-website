import React from "react";
import "../app/globals.css";

const Bio = () => {
  return (
    <div className="flex min-h-screen flex-col text-left px-6 sm:flex-row">
      <div className="p-5 sm:p-24 items-right text-lg text-white my-4 w-full  justify-center">
        <div className="mb-2">
          Don Englert was born in Detroit, MI. where he studied the Accordian at
          age 5, a few years later he moved to Los Angeles. In high school he
          started studying the Saxophone and later studied the Clarinet, Flute,
          Oboe, and the English Horn.
        </div>
        <div>
          He later studied music at California State University, Northridge and
          the Navy School Of Music in Washington D.C. while in the Army. He
          toured for nine years with bands such as Buddy Rich, Louis Bellson,
          and the Canadian rock band Lighthouse. He is a multi woodwind
          instrumentalist, and freelance musician. He has played in the pit
          orchestra for more than 20 productions in Toronto and Stratford, ON,
          recorded for film, radio and TV, and played on more than 40
          recordings, including two Grammy nominations and three platinum
          records.
        </div>

        <br />
      </div>
    </div>
  );
};

export default Bio;
