import React from "react";
import "../app/globals.css";

const Bio = () => {
  return (
    <div className="flex min-h-screen flex-col text-left px-6 sm:flex-row">
      <div className="p-5 sm:p-24 items-right text-lg text-white my-4 w-full  justify-center">
        <div className="mb-2">
          Don was born in Detroit Michigan where he began studying the Accordion
          at age 5. A few years later his family moved to Los Angeles, where he
          continued his musical studies. In high school he started studying the
          Alto Saxophone and later added the Clarinet, Flute, Oboe, and English
          Horn. At California State University Northridge, he majored in
          Clarinet Performance. He attended the Navy School of Music in
          Washington D.C. while in the Army.
        </div>
        <div>
          After Military service he toured for 9 years with bands such as Buddy
          Rich, Louis Bellson, and the Canadian Rock Band Lighthouse. He settled
          in Toronto, Canada where he has worked as a multi- woodwind
          instrumentalist and freelance musician. He has played in the pit
          orchestra for more than 20 productions in Toronto and Stratford,
          Ontario, and recorded for film, radio, and TV. He has played on more
          than 40 recordings, including two Grammy nominations and three
          platinum records.
        </div>
        <br />
      </div>
    </div>
  );
};

export default Bio;
