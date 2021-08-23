import styled from "styled-components"

export const Page = styled.div`
background-color: ${props => props.nightMode  ? "#353b48" : "#f5f6fa"};
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
`

export const Title = styled.h1`
margin:auto;
color:${props => props.nightMode  ? "#f5f6fa" : "#353b48"};
`
export const ExerciseButton = styled.button`
width: 200px;
height: 50px;
margin: 0 30px;
border-radius: 10px;
background-color: ${props => props.nightMode  ? "#353b48" : "#f5f6fa"};
border: solid 1px ${props => props.nightMode  ? "#f5f6fa" : "#353b48"};
cursor: pointer;
color:${props => props.nightMode  ? "#f5f6fa" : "#353b48"};
:disabled{
    color: #c0c0c0;
}
`
export const ButtonContainer = styled.div`
`