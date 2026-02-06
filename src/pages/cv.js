import React from "react";
import "../app/globals.css";

const Section = ({ title, children, highlight }) => (
  <div className={`py-6 ${highlight ? "bg-[#e8dcc8]" : ""}`}>
    <h2 className="text-2xl font-bold text-[#8b4513] mb-4 border-b-2 border-[#d4c4a8] pb-2">
      {title}
    </h2>
    {children}
  </div>
);

const GridList = ({ items }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-1">
    {items.map((item, index) => (
      <div key={index} className="py-1">{item}</div>
    ))}
  </div>
);

const CV = () => {
  const artists = [
    "Andy Gibb", "Annie Ross", "Aretha Franklin", "Barry Manilow",
    "Bernadette Peters", "Bob Newhart", "Bobby Rydell", "Buddy Rich",
    "Carmen McRae", "Chita Rivera", "Chuck Mangione", "Claude Gordon",
    "Connie Francis", "Craig Russell", "Cubby O'Brien", "Dan Hill",
    "Della Reese", "Denzal Sinclaire", "Dick Hyman", "Dionne Warwick",
    "Dizzy Gillespie", "Don Ellis", "Don Francks", "Don Rickles",
    "Eartha Kitt", "Ella Fitzgerald", "Eric Nagler", "Fabian",
    "Frank Sinatra Jr.", "Frank Stallone", "Frankie Valli", "Fred Travalena",
    "Gap Mangione", "George Burns", "George Shearing", "Gerald Wilson",
    "Gilbert O'Sullivan", "Gonzalo Rubalcaba", "Hal Linden", "Irish Rovers",
    "Jack Jones", "James Campbell", "Jim Galloway", "Jimmy Witherspoon",
    "Joan Rivers", "Joe Williams", "Joel Grey", "John McDermott",
    "Johnny Mathis", "Johnny Pacheco", "Jon Hendricks", "Lesley Gore",
    "Lew Tabackin", "Lighthouse", "Louis Bellson", "Martin Short",
    "Maureen Forrester", "Maureen McGovern", "Measha Brueggergosman", "Mel Torme",
    "Michael Bolton", "Mickey Rooney", "Nancy Wilson", "Paul Horn",
    "Paul Williams", "Peabo Bryson", "Pearl Bailey", "Peggy Lee",
    "Peter Appleyard", "Petula Clark", "Phil Nimmons", "Phyllis Diller",
    "Freddie Redd", "Renee Lee", "Rich Little", "Rita Moreno",
    "Rob McConnell", "Robert Goulet", "Roger Daltrey", "Ronnie Hawkins",
    "Rosemary Clooney", "Sammy Cahn", "Sammy Davis Jr.", "Sammy Nestico",
    "Sara Davis Buechner", "Sarah Vaughan", "Seth Meyers", "Sharon, Lois & Bram",
    "Shirley Bassey", "Stan Kenton", "Stevie Wonder", "Sue Raney",
    "Teresa Brewer", "The Beach Boys", "The Doors", "The Four Freshmen",
    "The Four Tops", "The Mills Brothers", "The Platters", "The Spinners",
    "The Supremes", "The Temptations", "Tito Puente", "Tommy Ambrose",
    "Tony Bennett", "Toshiko Akiyoshi", "Vera Lynn", "Vic Damone",
    "Vic Franklin", "Victor Borge", "Warren Covington", "Wayne Newton",
    "Whiskey Howl", "Woody Herman"
  ];

  const musicals = [
    "A Chorus Line", "Anything Goes", "Bubbling Brown Sugar", "Bye Bye Birdie",
    "Cabaret", "Cats", "Chicago", "Cinderella", "City of Angels", "Company",
    "Crazy For You", "Damn Yankees", "Dori", "Evita", "42nd Street",
    "Fiddler On The Roof", "Follies", "Guys and Dolls", "Gypsy", "Hairspray",
    "Hello Dolly", "If/Then", "King of Thieves", "Kiss of The Spider Woman",
    "Man of La Mancha", "Me And My Girl", "Music Man", "My Fair Lady",
    "My One And Only", "Nicholas Nickleby", "Once Upon A Mattress",
    "Phantom Of The Opera", "Pirates of Penzance", "Props", "Rat Pack",
    "Romance/Romance", "Say Hello To Harvey", "Sophisticated Ladies",
    "South Pacific", "Swing!", "The Boy Friend", "The Color Purple",
    "The King and I", "The Producers", "The Sound of Music", "The Old Man's Band",
    "The Wizard of Oz", "They're Playing Our Song", "Three Penny Opera",
    "Tintypes", "West Side Story", "Young Frankenstein"
  ];

  const bands = [
    "Buddy Rich", "Louis Bellson", "Stan Kenton", "Woody Herman",
    "Gerald Wilson", "Claude Gordon", "Warren Covington",
    "Toshiko Akiyoshi & Lew Tabackin", "Don Ellis", "Phil Nimmons",
    "Dave McMurdo", "Howard Cable Orchestra", "The Doors", "Lighthouse",
    "Whiskey Howl", "Mike Malone & The Writers", "Cueball", "Banda Brava",
    "John Cheesman Jazz Orchestra", "Canadian Saxophone Trio", "Sun Dog",
    "Gabe Garland Review", "Tommy Vig Orchestra"
  ];

  const filmTV = [
    "Mary Jane", "Killers Three", "Circle of Two", "Wild Horse Hank",
    "Jesse", "Shape Of Things To Come", "Bob & Carol & Ted & Alice",
    "You Know My Name", "Hello Dolly", "Playboy After Dark", "Second City",
    "Peter Gzowski's Late Night TV", "Fish Tales", "Tonight Show",
    "Ed Sullivan Show", "Home Fires (CBC)", "Mike Douglas Show",
    "Sharon, Lois & Bram", "Eric Nagler's House"
  ];

  return (
    <div className="min-h-screen bg-[#f0e6d8] text-left text-base text-[#2a1a1a]">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 py-10">

      <Section title="Awards & Recognition">
        <ul className="space-y-3 list-none">
          <li className="flex items-start">
            <span className="text-[#8b4513] mr-3">★</span>
            <span><strong>Grammy Nomination</strong> — Dave McMurdo Jazz Orchestra</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#8b4513] mr-3">★</span>
            <span><strong>Platinum Albums</strong> — Sharon, Lois & Bram; Cano</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#8b4513] mr-3">★</span>
            <span><strong>Hollywood Bowl Award</strong> — Best Big Band (&ldquo;Jazz Cats&rdquo;), California All State Colleges Woodwind Ensemble under Frederick Fennell</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#8b4513] mr-3">★</span>
            <span>Featured in <em>&ldquo;Toronto Treasures&rdquo;</em> by Pat LaCroix and Ted O&rsquo;Reilly (100 of Toronto&rsquo;s Jazz Musicians)</span>
          </li>
        </ul>
      </Section>

      <Section title="Artists">
        <GridList items={artists} />
      </Section>

      <Section title="Bands & Orchestras">
        <GridList items={bands} />
      </Section>

      <Section title="Musicals">
        <GridList items={musicals} />
      </Section>

      <Section title="Film & Television">
        <GridList items={filmTV} />
      </Section>

      <Section title="Recordings">
        <ul className="space-y-2 list-disc list-inside">
          <li>The Rovers — <em>Wasn&rsquo;t That A Party</em></li>
          <li>Rob McConnell — <em>The Boss Of The Boss Brass</em></li>
          <li>Sammy Nestico — <em>Night Flight</em></li>
          <li>Eric Nagler — <em>Come On In & Fiddle Up A Tune</em></li>
          <li>Bill Usher (CBC)</li>
          <li>Bob Schneider — <em>Having A Good Time</em></li>
          <li>Kim & Jerry Brodey — <em>Family Pie</em></li>
          <li>Jerry Brodey — <em>Carnival</em></li>
          <li>David Pendeth — <em>The Pendeth Band</em></li>
          <li>Lawrence Shragge — <em>Big Foot Betty</em></li>
          <li>Ginny Ambrose — <em>From Ginny With Love</em></li>
          <li>Long John Baldry — <em>Baldry&rsquo;s Out</em></li>
          <li>Jim Howard/Pat Sullivan Big Band — <em>No Compromise</em></li>
          <li>Sharon, Lois & Bram — <em>Happy Birthday</em>, <em>Stay Tuned</em>, <em>Elephant Show Record</em>, <em>Mainly Mother Goose</em>, and more</li>
          <li>Mario Castro-Neves — <em>The Latin Band</em></li>
          <li>Dizzy Gillespie w/ Buddy Rich Band — <em>Jazz Monterey</em></li>
          <li>Buddy Rich — <em>Keep The Customer Satisfied</em>, <em>A Different Drummer</em>, <em>Buddy And Soul</em>, <em>Live In London</em>, <em>Stick It</em></li>
          <li>Deane Nesbitt Jr. — <em>Music In Search Of A Movie</em></li>
        </ul>
      </Section>

      <Section title="Professional Experience">
        <ul className="space-y-3 list-none">
          <li>
            <strong>Studio Musician, Toronto</strong>
            <p className="text-[#5a4a3a] ml-4">Jingles, Motion Pictures, Recordings, CBC Radio and Television</p>
          </li>
          <li>
            <strong>Studio Musician, Los Angeles</strong>
            <p className="text-[#5a4a3a] ml-4">Jingles, Motion Pictures, Recordings, Television</p>
          </li>
          <li>
            <strong>Symphony Orchestras, Ontario</strong>
            <p className="text-[#5a4a3a] ml-4">Toronto Symphony Orchestra, Stratford Festival (25 years), Kitchener-Waterloo, Mississauga, Brantford, National Arts Centre, The National Ballet Orchestra, Canada Pops Orchestra, Aurora Festival Orchestra</p>
          </li>
          <li>
            <strong>Symphony Orchestras, California</strong>
            <p className="text-[#5a4a3a] ml-4">Torrance, Pasadena, Inglewood, Burbank</p>
          </li>
        </ul>
      </Section>

      <Section title="Teaching Experience">
        <ul className="space-y-2 list-none">
          <li><strong>University of Toronto</strong> — Saxophone, Jazz Ensemble, Saxophone Methods</li>
          <li><strong>McMaster University</strong> <span className="text-[#8b4513]">(Present)</span> — Saxophone</li>
          <li><strong>Mohawk College</strong> — Saxophone, Jazz Ensemble, Jazz Band, Sight Singing, Jazz Harmony</li>
          <li><strong>York University</strong> — Saxophone and Bass Clarinet Clinic, Recital Adjudicator</li>
          <li><strong>University of Guelph</strong> — Saxophone, Jazz Band Clinic</li>
          <li><strong>Humber College</strong> — Saxophone</li>
          <li><strong>Wilfrid Laurier University</strong> — Saxophone</li>
          <li><strong>Etobicoke School of the Arts</strong> — Guest Artist</li>
          <li><strong>Upper Canada College</strong> — Saxophone</li>
          <li><strong>Private Teaching</strong> <span className="text-[#8b4513]">(Present)</span> — Saxophone</li>
        </ul>
      </Section>

      <Section title="Instruments">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div>Saxophone (Bass, Baritone, Tenor, Alto, Soprano)</div>
          <div>Clarinet and Bass Clarinet</div>
          <div>Flute, Alto Flute, and Piccolo</div>
          <div>Oboe and English Horn</div>
          <div>Bassoon</div>
          <div>Accordion</div>
        </div>
      </Section>

      <Section title="Education">
        <ul className="space-y-2 list-none">
          <li><strong>California State University, Northridge</strong> — Clarinet Performance (1965–1969)</li>
          <li><strong>Navy School of Music</strong>, Washington D.C. (1960)</li>
          <li><strong>Santa Monica City College</strong> (1958–1960, 1962–1965)</li>
        </ul>
      </Section>

      <Section title="Private Teachers">
        <ul className="space-y-1 list-none text-sm">
          <li><strong>Jerry Robinson</strong> — Bassoon (National Ballet of Canada, ESPRIT Orchestra)</li>
          <li><strong>Keith Atkinson</strong> — Oboe (Toronto Symphony Orchestra)</li>
          <li><strong>Frankie Rand</strong> — Saxophone (Toronto)</li>
          <li><strong>Joe Allard</strong> — Saxophone (New York City)</li>
          <li><strong>Joe Viola</strong> — Saxophone (Boston)</li>
          <li><strong>John Ellis</strong> — Oboe (20th Century Fox)</li>
          <li><strong>Murray Panitz</strong> — Flute (Philadelphia)</li>
          <li><strong>Art Hoberman</strong> — Flute (20th Century Fox)</li>
          <li><strong>Dominic Fera</strong> — Clarinet (20th Century Fox, CSU Northridge)</li>
          <li><strong>Dominic Zarlinga</strong> — Clarinet (Los Angeles)</li>
          <li><strong>Bill Green</strong> — Saxophone (Los Angeles)</li>
          <li><strong>Bob Nelson</strong> — Saxophone and Clarinet (Los Angeles)</li>
          <li><strong>Pietro Rolleta</strong> — Accordion (Los Angeles)</li>
        </ul>
      </Section>

      </div>
    </div>
  );
};

export default CV;
