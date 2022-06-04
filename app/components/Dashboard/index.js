/**
 *
 * Dashboard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { notes } from '../../admin/dummyData';
import NotesCard from '../../containers/NotesCard/Loadable';
import Navbar from '../../containers/Navbar';



const Container = styled.div`
padding: 3rem;
display: flex;
flex-direction: column;
`

const Header = styled.div`
margin-bottom: 2rem;
`

const H1 =styled.h1`
font-size: 3rem;
font-weight: bold;
color: dodgerblue;
`
const Contents = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
`



function Dashboard() {

  return (
    <Container>
      <div>
        <H1>Dashboard</H1>
      </div>
      <Contents>
        {notes &&
          notes.map(note => (
            <NotesCard
              key={note.id}
              title={note.title}
              description={note.description}
              format={note.format}
              id={note.id}
              isDashboard={true}
            />
          ))}
      </Contents>
      </Container>
  );
}

Dashboard.propTypes = {};

export default Dashboard;
