import React from "react";
import styles from "./Dashboard.module.css";
import NotesCard from "../../common/cards/NotesCards/NotesCard";
import { useSelector } from "react-redux";



const Dashboard = () => {
  const notes = useSelector(state => state.notes)
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.dashboardHeader}>
        <h1>Dashboard</h1>
      </div>
      <div className={styles.dashboardContents}>
        {notes?.map((note) => (
          <NotesCard
            key={note.id}
            title={note.title}
            description={note.description}
            format={note.format}
            id={note.id}
            isDashboard={true}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
