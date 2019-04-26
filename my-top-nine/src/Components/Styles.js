import styled from 'styled-components';

const SignupDiv = styled.div`
    border: 1px solid darkgray;
    width: 20%;
    margin: 0 auto;
    margin-top: 10%;
`

const LinkDiv = styled.div`
    border: 1px solid darkgray;
    width: 20%;
    margin: 0 auto;
    margin-top: .8%;
    padding: 20px 0;
`

const SignupForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 0 auto;
    padding: 20px;
    margin-bottom: 40px;
`

const SignupInput = styled.input`
    background-color: #FAFAFA;
    padding: 10px;
    margin-bottom: 5px;
    border: 1px solid lightgray;
`

const SignupButton = styled.button`
    margin: 20px 0 20px;
    background-color: #3b5998;
    padding: 10px;
    color: white;
    font-weight: bold;
    font-size: 16px;
    border-radius: 8px;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #6699cc;
    }
`

const Signuph3 = styled.h3`
    font-family: "Source Sans Pro", Helvetica, sans-serif;
    color: #444444;
    margin-top: 80px;
`

const SignupP = styled.p`
    font-family: "Source Sans Pro", Helvetica, sans-serif;
    color: #444444;
`

export {
    SignupForm,
    SignupInput,
    SignupDiv,
    SignupButton,
    Signuph3,
    SignupP,
    LinkDiv
}