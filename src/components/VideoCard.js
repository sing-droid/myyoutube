import React from "react";
const VidoeCard = ( {info} ) => {
    const {snippet,statistics} = info;
    const {channelTitle, title, thumbnails,publishedAt} = snippet;

    return (
        <div className="p-2 m-2 w-64 shadow-lg">
            <img className="rounded-lg " src = {thumbnails.high.url} alt="video" />
            <ul>
            <li className="font-bold py-2">{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount}views</li>
                <li>{publishedAt}</li>
            </ul>
        </div>
    );
}

export default VidoeCard;