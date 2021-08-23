import styled from "styled-components"

export const Header = styled.div`
display: flex;  
justify-content: center;
width: 100vw;
height: 10vh;
position: fixed;
top: 0;
background-color:${props => props.nightmode  ? "#192a56" : "#487eb0"} ;
align-items: center;
color: white;
`

export const ExerciseButton = styled.button`
width: 14vw;
height: 7vh;
margin: 0 30px;
border-radius: 10px;
background-color: ${props => props.nightmode  ? "#2f3640" : "white"};
border: solid 1px ${props => props.nightmode  ? "white" : "#2f3640"};
cursor: pointer;
color:${props => props.nightmode  ? "#f5f6fa" : "#2f3640"};
:disabled{
    color: #c0c0c0;
}
`
