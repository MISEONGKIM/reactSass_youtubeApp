import axios from "axios";

const instance = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
    key: import.meta.env.VITE_API_KEY,
  },
});

export const getMainVideos = async () => {
  try {
    const response = await axios.get(
      `/search?part=snippet&maxResults=10&q=beautiful%20place`
    );
    const result = await getVideoInfo(response.data.items);
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getVideoInfo = async (videosArr: Record<string, any>[]) => {
  try {
    for (const video of videosArr) {
      // get extra video info
      const videoResponse = await axios.get(
        `/videos?part=snippet&part=contentDetails&part=player&part=statistics&id=${video.id.videoId}`
      );
      Object.assign(video.snippet, { ...videoResponse.data.items[0].snippet });
      video.extraInfo = Object.assign(
        {},
        videoResponse.data.items[0].tags,
        videoResponse.data.items[0].contentDetails,
        videoResponse.data.items[0].statistics,
        videoResponse.data.items[0].player
      );
      // get channel info
      const channelResponse = await axios.get(
        `/channels?part=snippet&part=statistics&part=contentDetails&id=${video.snippet.channelId}`
      );
      // storing fetched data
      const channelResultA = channelResponse.data.items[0].snippet;
      const channelResultB = channelResponse.data.items[0].statistics;
      const channelInfo = Object.assign(
        {},
        {
          ...channelResultA,
          ...channelResultB,
        }
      );
      video.channelInfo = channelInfo;
    }

    return videosArr;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default instance;
