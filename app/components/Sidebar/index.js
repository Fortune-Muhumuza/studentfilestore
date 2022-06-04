/**
 *
 * Sidebar
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Container = styled.div`
  background-color: dodgerblue;
  font-size: 2rem;
  height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const NavbarItem = styled.li`
  display: block;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  padding: 1rem;
  display: inline-block;
  transition: all 0.2s ease-in-out;
`;

function Sidebar() {
  return (
    <Container>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <ul>
          <div>
            <NavbarItem>
              <Link to="/myNotes"> My notes</Link>
            </NavbarItem>
          </div>
          <div>
            <NavbarItem>
              <Link to="/">Dashboard</Link>
            </NavbarItem>
          </div>
          <div>
            <NavbarItem>
              <Link to="/classNotes"> Class notes</Link>
            </NavbarItem>
          </div>
          <div>
            <NavbarItem>
              <Link to="/addNotes"> Add notes</Link>
            </NavbarItem>
          </div>
          <div>
            <NavbarItem>
              <Link to="/statistics"> Statistics</Link>
            </NavbarItem>
          </div>
        </ul>
      </div>

      <div>2022</div>
    </Container>
  );
}

Sidebar.propTypes = {};

export default Sidebar;
