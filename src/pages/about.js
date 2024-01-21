import React from 'react';
import '../app/globals.css';

const About = () => {
  return (
    <div className="flex min-h-screen flex-col text-center px-6 sm:flex-row">
      <div className="flex-1 items-center text-lg text-emerald-300 my-4 justify-center">
        <p>
          Don Englert studied music at California State University, Northridge and the Navy School Of Music in
          Washington D.C. He toured for nine years with bands such as Louis Bellson, Buddy Rich, and the Canadian
          rock band Lighthouse. He has played in the pit orchestra for more than 20 productions in Toronto and 
          Stratford, ON, recorded for film, radio and TV, and played on more than than 40 recordings, including 
          two Grammy nominations and three platinum records.
        </p>
        <br/>
        <p>More content here...</p>
      </div>
    </div>
  );
};

export default About;
