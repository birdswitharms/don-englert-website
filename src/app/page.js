export default function Home() {
  const backgroundImage = "don-bg-red.jpg";
  return (
    <main
      className="flex min-h-screen flex-col p-2 bg-center bg-cover"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center right", // adjust as needed
      }}
    >
      <div className="bg z-0"></div>
      <div className="sm:mt-12 sm:ml-12 mt-12 m-0">
        <h1 className="font-bold text-slate-900 w-full text-left leading-[110px] sm:leading-[135px] text-[115px] sm:text-[180px] tracking-wide">
          DON
          <br />
          ENGLERT.
          <br />
          MUSICIAN.
          <br />
          EDUCATOR.
        </h1>
      </div>
    </main>
  );
}
