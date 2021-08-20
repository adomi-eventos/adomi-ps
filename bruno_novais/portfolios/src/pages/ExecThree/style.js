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

    ul{
        color: #FFF;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        border-top: 1px solid #FFF;
    }

    ul li{
        font-size: 15px;
        margin: 5px;
        display: flex;
        justify-content: center;
    }

    .soma{
        background-color: rgba(0,0,0, 0.5);
        padding: 10px;
    }

`;

export const Form = styled.form`
    margin-top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    input{   
        padding: 5px 10px;
        border-radius: 4px;
        font-size: 17px;
        width: 70%;
    }

    button{
        padding: 10px 20px;
        background-color: #0D1329;
        color:#FFF;
        border:none;
        border-radius: 5px;
    }
`;

export const Resultado = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    button{
        padding: 10px 20px;
        background-color: #0D1329;
        color:#FFF;
        border:none;
        border-radius: 5px;
        margin-left: 10px;
       
    }

`;

