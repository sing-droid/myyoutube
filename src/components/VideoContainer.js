import React, { useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "./contants";
// import { YOUTUBE_VIDEOS_API } from "./contants";

const VideoContainer = () => {
    useEffect(() => {
getVideos();
    },[]);

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        console.log(json);
    }
    return (
        <div>
        </div>
    )
}

export default VideoContainer;