import axios from "axios";
import * as React from "react";
import { SideBarContext } from "../../context/SideBarContext";
import { getVideoInfo } from "../../helpers/fetchingData";

const MainPage = () => {
  const storedVideos = JSON.parse(localStorage.getItem("mainVideos"));
  const [mainVideos, setMainVideos] = React.useState(storedVideos || []);
  const { setIsToggled } = React.useContext(SideBarContext);

  const getMainVideos = React.useCallback(async () => {
    try {
      if (!storedVideos) {
        const response = await axios.get(
          `/search?part=snippet&maxResults=10&q=beautiful%20place`
        );
        let videosArray = await response.data.items;
        videosArray = await getVideoInfo(videosArray);
        setMainVideos(videosArray);

        localStorage.setItem("mainVideos", JSON.stringify(videosArray));
      }
    } catch (error) {
      console.log(error);
    }
  }, [storedVideos]);

  React.useEffect(() => {
    getMainVideos();
  }, [getMainVideos]);

  return <div>MainPage</div>;
};

export default MainPage;
