import VideoPlayer from "./components/LoadVideoPlayer";

const App = () => {
  const videoData = {
    title: "Sample Video",
    description: "This is a sample video description.",
    promotions: [
      { time: 5000, message: "Check out our latest products!" },
      { time: 15000, message: "Don't miss our special offer!" },
    ],
    sources: [
      {
        src: "/1.mp4",
        type: "video/mp4",
      },
      {
        src: "/2.mp4",
        type: "video/mp4",
      },
    ],
  };

  return (
    <div className="flex flex-col items-center">
      <VideoPlayer videoData={videoData} />
    </div>
  );
};

export default App;
