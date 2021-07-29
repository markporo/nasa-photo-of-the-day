import React from "react";

function Description(props) {
    const NASAData = props.param;
    return <p>{NASAData.explanation}</p>
}

export default Description;