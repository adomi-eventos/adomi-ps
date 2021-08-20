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

    table{
        color: #FFF;
    }

    thead td{
        background-color: #f5f5f5;
        color: #000;
        font-weight: 600;
    }

    tr td{
        border: 1px solid black;
        text-align: center;
    }

    tr{
        &:nth-child(odd){
            background-color: rgba(0,0,0, 0.5);
        }
    }

`;