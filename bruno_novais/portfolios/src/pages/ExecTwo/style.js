import styled from 'styled-components';

export const Container = styled.div`
    background-color: #0d2336;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    padding: 10px;

    h2, p{
        color: #FFF;
        text-align: center;
        margin-bottom: 10px;
    }

    .desafio{
        margin-top: 10px;
    }
`;

export const AreaExec = styled.div`
    border-top: 1px solid #FFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0, 0.5);
    padding: 10px;


    p{
        margin-top:5px;
    }

    button{
        padding: 10px 20px;
        background-color: #0D2336;
        color:#FFF;
        border:none;
        border-radius: 5px;
    }

  
`;

