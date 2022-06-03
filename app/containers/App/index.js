/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import NotesCard from 'containers/NotesCard/Loadable';
import Dashboard from '../../components/Dashboard/index';
import Sidebar from '../../components/Sidebar';
import styled from 'styled-components';
import GlobalStyle from '../../global-styles';
import MyNotes from '../MyNotes/Loadable';

const Container = styled.div`
display: flex
`;

export default function App() {
  return (
    <Container>
      <div>
      <Sidebar />
      </div>
      <div>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/notes" component={NotesCard} />
        <Route exact path="/myNotes" component={MyNotes} />
        <Route component={NotFoundPage} />
      </Switch>

      <GlobalStyle />
      </div>
      </Container>
  );
}
