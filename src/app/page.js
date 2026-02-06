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
      <div className="mt-12 ml-2 sm:ml-12">
        <h1
          className="font-bold text-[#1a1210] w-full text-left tracking-wide"
          style={{
            fontSize: "clamp(3rem, 15vw, 180px)",
            lineHeight: "0.95",
          }}
        >
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
