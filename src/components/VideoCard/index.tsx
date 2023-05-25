/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { BiDotsVerticalRounded } from "react-icons/bi";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { formatTimeVideo, formatViews } from "../../helpers/format";

const VideoCard = ({
  id,
  video,
  img,
  info,
  eInfo,
  channelInfo,
}: {
  id: number;
  video: Record<string, object>;
  img: string;
  info: Record<string, string>;
  eInfo: Record<string, string | number>;
  channelInfo: Record<string, object>;
}) => {
  dayjs.extend(relativeTime);
  const time = dayjs(info.publishedAt).fromNow(true);
  const views = formatViews(eInfo.viewCount as number);
  const duration = formatTimeVideo(eInfo.duration as string);
  return (
    <div className="videoCard">
      <Link to={`/video/${id}`} state={{ ...video }}>
        <div className="video_preview">
          <img src={img} alt={info.title} />
          {duration ? (
            <div className="video_duration">
              <span>{duration}</span>
            </div>
          ) : null}
        </div>
        <div className="video_info_container">
          <div className="avatar_container">
            <img
              src={img}
              alt={`${info.channelTitle} avatar`}
              className="avatar"
            />
          </div>
          <div className="video_text_container">
            <h3>
              {info.title.length > 60
                ? info.title.substring(0, 60) + "..."
                : info.title}
            </h3>
            <div className="video_info">
              <Link to={`/channel/${channelInfo.customUrl}`}>
                <div className="channelName">{info.channelTitle}</div>
              </Link>
              <div className="video_metadata">
                <span>{views} views </span> &nbsp;
                <span className="dot_separator"> &#8226; </span>&nbsp;
                <span> {time}</span>
              </div>
            </div>
          </div>
          <div className="dots_container">
            <BiDotsVerticalRounded size={25} className="dots" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;
