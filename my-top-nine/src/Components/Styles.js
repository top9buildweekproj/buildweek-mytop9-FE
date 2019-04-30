
import styled from 'styled-components';


// styles for signup/login components
const SignupDiv = styled.div`
    border: 1px solid darkgray;
    width: 30%;
    margin: 0 auto;
    margin-top: 10%;
    box-shadow: 15px 12px 10px -8px #333;
`

const LinkDiv = styled.div`
    border: 1px solid darkgray;
    width: 30%;
    margin: 0 auto;
    margin-top: .8%;
    padding: 20px 0;
    box-shadow: 15px 12px 10px -8px #333;
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


// styles for Header component
const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 3px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
`;

const HeaderH1 = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;

const HeaderSpans = styled.span`
    ${props =>
        props.date
            ? `
        align-self: flex-end;
        font-size: 11px;
        font-weight: bold;
        letter-spacing: 1px;
        margin-left: 25px;
        flex: 1;
        `
            : null
    }
    ${props =>
        props.temp
            ? `
        align-self: flex-end;
        font-size: 11px;
        font-weight: bold;
        letter-spacing: 1px;
        text-align: right;
        margin-right: 25px;
        flex: 1;
        `
            : null
    } 
`;

const LogoutButton = styled.button`
    margin-top: 85px;
    background-color: white;
    border: none;
    // text-decoration: underline;

        &:hover {
            color: lightgray;
        }
`


// Footer styling
const FooterDiv = styled.div`
    background-color: lightgray;
`

const FooterH3 = styled.h3`
    font-family: Didot, serif;
    font-weight: bold;
    padding-top: 1.5rem;
`

const FooterH4 = styled.h4`
    font-family: Didot, serif;
`

const FooterMeet = styled.a`
    font-family: Didot, serif;
    text-decoration: none;
    font-size: 1.5rem; 
    color: black;
    &:hover {
        color: darkgray;
        text-decoration: none;
    }
`
const FooterMeetDiv = styled.div`
    display: flex;
`

const FooterNewsletterDiv = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
`

const FooterContent = styled.footer`
    display: flex;
    justify-content: space-around;
`


const Copyright = styled.div`
    background-color: lightgray;
    padding-top: 1.5rem;
`
const CopyrightP = styled.p`
    margin: 0;
    padding-bottom: .5rem;
`



export {
    SignupForm,
    SignupInput,
    SignupDiv,
    SignupButton,
    Signuph3,
    SignupP,
    LinkDiv,
    HeaderDiv,
    HeaderSpans,
    HeaderH1,
    LogoutButton,
    FooterDiv,
    FooterH3,
    FooterH4,
    FooterMeet,
    FooterNewsletterDiv,
    Copyright,
    FooterMeetDiv,
    FooterContent,
    CopyrightP
}