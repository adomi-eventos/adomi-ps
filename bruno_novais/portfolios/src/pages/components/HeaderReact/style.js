import styled from 'styled-components';

export const HeaderReact = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-bottom: 1px solid #BBB;

     h1{
        font-size: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        
        svg{
            margin-right: 10px;
        }
    }

    p{
        font-size: 16px;
    }

`;


export const ButtonsList = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 15px;

    button{
        background-color: #0D2336;
        border: 0;
        border-radius: 4px;
        padding: 8px 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #FFF;
        margin-top: 10px;
    }
`;