export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-6 sm:flex-row sm:grid sm:grid-cols-2">
      <div className="px-6 margin-auto gap-2">
        <div className="items-center mb-12 mt-6 sm:mt-1">
          <img src='/don-englert-headshot.webp' alt="Don Englert" className="rounded-full shadow-lg mx-auto border-4" />
        </div>
      </div>
      <div className="text-left text-lg text-black my-4 justify-center bg-zinc-200 rounded-lg p-6 shadow-lg">
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
    </main>
  );
}
