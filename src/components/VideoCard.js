import React from "react";
const VidoeCard = ( {info} ) => {
    console.log(info);

    const {snippet} = info;
    const {channelTitle, title, thumbnails,} = snippet;

    return (
        <div className="p-2 m-2 w-64 shadow-lg">
            <img className="rounded-lg " src = {thumbnails.high.url} alt="video" />
            <ul>
            <li className="font-bold py-2">{title}</li>
                <li>{channelTitle}</li>
            </ul>
        </div>
    );
}

export default VidoeCard;