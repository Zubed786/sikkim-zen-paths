import React from "react";

const MusicMeditation = () => {
  const musicFiles = [
    { name: "Sikkim Traditional Song 1", url: "/music/song1.mp3" },
    { name: "Meditation Audio 1", url: "/music/meditation1.mp3" },
  ];

  const videoFiles = [
    { name: "Meditation Video 1", url: "/videos/meditation1.mp4" },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-ripple">Music & Meditation</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Music</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {musicFiles.map((file) => (
            <div key={file.url} className="bg-transparent-black-box text-ripple">
              <h3 className="text-xl font-semibold">{file.name}</h3>
              <audio controls className="w-full mt-2">
                <source src={file.url} type="audio/mpeg" />
              </audio>
              <a href={file.url} download className="mt-2 inline-block btn-saffron">
                Download
              </a>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Meditation Videos</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {videoFiles.map((file) => (
            <div key={file.url} className="bg-transparent-black-box text-ripple">
              <h3 className="text-xl font-semibold">{file.name}</h3>
              <video controls className="w-full mt-2">
                <source src={file.url} type="video/mp4" />
              </video>
              <a href={file.url} download className="mt-2 inline-block btn-saffron">
                Download
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MusicMeditation;
