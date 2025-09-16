import React from "react";

const musicList = [
  { title: "Sikkim Traditional Song 1", src: "/music/song1.mp3" },
  { title: "Sikkim Traditional Song 2", src: "/music/song2.mp3" },
];

const meditationList = [
  { title: "Meditation Audio 1", src: "/meditation/audio1.mp3" },
  { title: "Meditation Video 1", src: "/meditation/video1.mp4", isVideo: true },
];

const Meditation = () => (
  <div className="max-w-7xl mx-auto px-4 py-10">
    <h1 className="text-4xl font-bold mb-8 text-gradient-saffron">Music & Meditation</h1>

    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Sikkim Cultural Music</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {musicList.map((item) => (
          <div key={item.title} className="p-4 border border-black rounded-lg bg-transparent shadow-soft text-black">
            <h3 className="text-xl font-medium mb-2">{item.title}</h3>
            <audio controls className="w-full mb-2">
              <source src={item.src} type="audio/mpeg" />
            </audio>
            <a href={item.src} download className="inline-block mt-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-gentle">
              Download
            </a>
          </div>
        ))}
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-semibold mb-4">Meditation Audios & Videos</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {meditationList.map((item) => (
          <div key={item.title} className="p-4 border border-black rounded-lg bg-transparent shadow-soft text-black">
            <h3 className="text-xl font-medium mb-2">{item.title}</h3>
            {item.isVideo ? (
              <video controls className="w-full mb-2 rounded-lg">
                <source src={item.src} type="video/mp4" />
              </video>
            ) : (
              <audio controls className="w-full mb-2">
                <source src={item.src} type="audio/mpeg" />
              </audio>
            )}
            <a href={item.src} download className="inline-block mt-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-gentle">
              Download
            </a>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Meditation;
