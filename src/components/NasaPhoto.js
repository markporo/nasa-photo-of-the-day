import React from "react";


function NasaPhoto(props) {
    const NASAData = props.param;
    const nPhoto = (NASAData.media_type === "image") ? (<img src={NASAData.url} width="600px" alt="dope ass NASA photo" />) : (
        <iframe
            title="space-video"
            src={NASAData.url}
            frameBorder="0"
            gesture="media"
            allow="encrypted-media"
            allowFullScreen
            className="photo"
        />
    )

    return nPhoto;

}

export default NasaPhoto;