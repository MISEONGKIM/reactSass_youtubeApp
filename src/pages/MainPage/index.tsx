import * as React from "react";
import { SideBarContext } from "../../context/SideBarContext";
import { getMainVideos } from "../../api/axios";
import VideoCard from "../../components/VideoCard";

const MainPage = () => {
  const storedVideos = localStorage.getItem("mainVideos");
  const [mainVideos, setMainVideos] = React.useState<Record<string, any>[]>(
    storedVideos ? JSON.parse(storedVideos) : []
  );
  const { setIsToggled } = React.useContext(SideBarContext);

  const init = React.useCallback(async () => {
    if (storedVideos) return;
    const videos = await getMainVideos();
    setMainVideos(videos);
    localStorage.setItem("mainVideos", JSON.stringify(videos));
  }, [storedVideos]);

  React.useEffect(() => {
    init();
  }, [getMainVideos]);

  return (
    <section className="mainGallery">
      {mainVideos.map((video) => (
        <VideoCard
          key={video.id.videoId}
          id={video.id.videoId}
          video={video}
          img={video.snippet.thumbnails.medium.url}
          info={video.snippet}
          eInfo={video.extraInfo}
          channelInfo={video.channelInfo}
        />
      ))}
    </section>
  );
};

export default MainPage;
