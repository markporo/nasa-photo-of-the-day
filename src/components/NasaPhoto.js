import React from "react"
import styled from "styled-components";

const StyledImg = styled.img`
border: ${props => props.theme.PrimaryBorder};
border-radius: ${props => props.theme.PrimaryBorderRadius};
max-width: 85%;
max-height: 95vh;
height: auto;
top-margin: 4%;
`

const NasaPhoto = ({ photoURL }) => {
    return <div>
        <StyledImg src={photoURL} alt="bad ass photo"></StyledImg>
    </div>
}

export default NasaPhoto;