/**
 *
 * Navbar
 *
 */

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 20px;
height: 60px;
background-color: rgb(252, 252, 252);
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`
const Input = styled.input`
border: none;
border-radius: 5rem;
padding: 1rem;
background-color: rgb(236, 233, 233);
`

function Navbar() {
  return (
    <Container>
      <div>
        <h1>Username</h1>
      </div>
      <div>
        <Input
          placeholder="Search"
        />
      </div>
      </Container>
  );
}

export default Navbar;
