import React, { useState } from "react";
import styles from "./Dashboard.module.css";
import NotesCard from "../UI/NotesCard";
import { notes } from "../dummyData";

const Dashboard = () => {
  const [notesList, setNotesList] = useState(notes);
  

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.dashboardHeader}>
        <h1>Dashboard</h1>
      </div>
      <div className={styles.dashboardContents}>
        {notesList?.map((note) => (
          <NotesCard
          key={note.id}
            title={note.title}
            description={note.description}
            format={note.format}
            id={note.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
