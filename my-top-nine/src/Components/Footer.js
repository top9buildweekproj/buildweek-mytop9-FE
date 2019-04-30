import React, { Component } from 'react';
import { 
    FooterDiv, 
    FooterH3, 
    FooterH4,
    FooterMeetDiv,
    FooterMeet, 
    FooterNewsletterDiv,
    FooterContent,
    Copyright,
    CopyrightP
} from './Styles';


class Footer extends Component {

    render() {
        return(
            <>
            <FooterDiv>
                <FooterH3>My Top 9</FooterH3>
                <FooterContent>
                    <FooterNewsletterDiv>
                        <FooterH4>Join our newsletter</FooterH4>
                        <form>
                            <input type='text' placeholder='Email' />
                            <button>Join</button>
                        </form>
                    </FooterNewsletterDiv>
                    <FooterMeetDiv>
                        <FooterMeet href=''>Meet the team</FooterMeet>
                    </FooterMeetDiv>                             
                  </FooterContent>
            </FooterDiv>
            <Copyright>
                <CopyrightP>©2019 My Top 9, LLC All rights reserved.</CopyrightP>
            </Copyright>
            </>
        )
    }
}

export default Footer;