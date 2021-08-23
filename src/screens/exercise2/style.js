import styled from "styled-components"

export const Page = styled.div`
background-color: ${props => props.nightMode  ? "#353b48" : "#f5f6fa"};
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
`
export const Title = styled.h3`
color:${props => props.nightMode  ? "#f5f6fa" : "#353b48"};
padding: 0 100px;
`

export const TextArea = styled.textarea`
  border: 1px solid;
  height: 100px;
  width: 500px;
  margin: auto;
  resize: none;
  background-color: ${props => props.nightMode  ? "#353b48" : "#f5f6fa"};
border: solid 1px ${props => props.nightMode  ? "#f5f6fa" : "#353b48"};
color:${props => props.nightMode  ? "#f5f6fa" : "#353b48"};

`

export const ExerciseButton = styled.button`
width: 100px;
height: 50px;
margin: auto;
border-radius: 10px;
background-color: ${props => props.nightMode  ? "#353b48" : "#f5f6fa"};
border: solid 1px ${props => props.nightMode  ? "#f5f6fa" : "#353b48"};
cursor: pointer;
color:${props => props.nightMode  ? "#f5f6fa" : "#353b48"};
margin: 0 10px;
`

export const BodyContainer = styled.div`
height: 500px;
margin: auto;
display: flex;
flex-direction:column;
`

export const ButtonContainer = styled.div`
margin: auto;
`