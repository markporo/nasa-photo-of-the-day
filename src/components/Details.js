import React from "react"
import styled from "styled-components"

const StyledP = styled.p`
padding: 5%; 
`

const Details = ({ details }) => {
    console.log("this is details of photo")

    return <div>
        <StyledP>{details}</StyledP>
    </div>
}

export default Details;