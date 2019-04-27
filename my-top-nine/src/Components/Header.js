import React from 'react';
import { HeaderH1, HeaderDiv, HeaderSpans } from './Styles';
import Moment from '../Moment.js/Moment';




const Header = () => {
  return (
    <HeaderDiv>
      <HeaderSpans date> <Moment /></HeaderSpans>
      <HeaderH1>My Top 9</HeaderH1>
      <HeaderSpans temp>69°</HeaderSpans>
    </HeaderDiv>

  )
}

export default Header