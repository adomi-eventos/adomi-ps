import styled from 'styled-components';

export const Container = styled.div`
    max-width: 700px;
    background-color: #FFF;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0,0,0, 0.2 );
    padding: 30px;
    margin: 40px auto;
`;


export const Form = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: row;

    input{
        flex:1;
        /* border: 1px solid ${props => props.error ? '#F00' : '#EEE'} ; */
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 17px;
    }
`;
