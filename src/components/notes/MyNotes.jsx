import React, { useEffect } from "react";
import styles from "./MyNotes.module.css";
import NotesCard from "../UI/cards/NotesCard";

const MyNotes = () => {
  const [favoriteNotes, setFavoriteNotes] = React.useState([]);

  const handleFetchMyNotes = () => {
    const favNotes = JSON.parse(localStorage.getItem("downloadNotes"));
    console.log('fave notes', favNotes[0])
    setFavoriteNotes(favNotes);
  };

  useEffect(() => {
    handleFetchMyNotes();
  }, []);

  return (
    <div className={styles.myNotesContainer}>
      <div className={styles.myNotesHeader}>
        <h1>My Notes</h1>
      </div>
      <div className={styles.myNotesContents}>
        {favoriteNotes?.map((note) => (
          <NotesCard
            key={note.id}
            title={note.title}
            description={note.description}
            format={note.format}
            id={note.id}
            isMyNotes={true}
          />
        ))}
      </div>
    </div>
  );
};

export default MyNotes;
