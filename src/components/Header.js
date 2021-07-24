import React from 'react';
import styled from "styled-components";

const HEADER = styled.div`
 background-color:#5151a7;
 display:flex;
 justify-content:center;
 align-conternt:center;
`;
const P = styled.p`
`;

function Header() {
  return (
    <HEADER>
      <P>Trello TODO List</P>
    </HEADER>
  )
}

export default Header;
