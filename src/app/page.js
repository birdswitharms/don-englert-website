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
      <div className="mt-12 ml-12">
        <h1 className="font-bold text-slate-900 w-full text-left leading-[110px] md:leading-[135px] text-[140px] md:text-[180px] tracking-wide">
          DON
          <br />
          ENGLERT
          <br />
          JAZZ
          <br />
          LEGEND
        </h1>
      </div>
    </main>
  );
}
