/**
 *
 * MyNotes
 *
 */

import React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import NotesCard from '../NotesCard';

const Container = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
`;

const H1 = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: dodgerblue;
`;

const Header = styled.div`
  margin-bottom: 2rem;
`;

const Contents = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;



 function MyNotes() {

  const [favoriteNotes, setFavoriteNotes] = React.useState([]);

console.log('fav notes are', favoriteNotes)

const handleFetchMyNotes = () => {
  const favNotes = JSON.parse(localStorage.getItem("downloadNotes"));
  // console.log('fave notes', favNotes[0])
  setFavoriteNotes(favNotes);
};

const handleRemoveFromFavorites = (id) => {
// console.log('id to remive is', id)
favoriteNotes.forEach(element => {
  
});
const newFavorites = favoriteNotes.filter(note => note.id !== id)
localStorage.setItem('downloadNotes', JSON.stringify(newFavorites))
// console.log('filtered is', newFavorites)
}

useEffect(() => {
  handleFetchMyNotes();
}, []);
  return (
    <Container>
      <Header>
        <h1>My Notes</h1>
      </Header>
      <Contents>
        {favoriteNotes &&
        favoriteNotes.map(note => (
          <NotesCard
            key={note.id}
            title={note.title}
            description={note.description}
            format={note.format}
            id={note.id}
            isMyNotes={true}
            handleRemoveFromFavorites={handleRemoveFromFavorites}
          />
        ))}
      </Contents>
    </Container>
  );
}


export default MyNotes;
