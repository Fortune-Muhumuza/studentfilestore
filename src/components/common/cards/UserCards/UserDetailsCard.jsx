import React from "react";
import styles from "./UserDetailsCard.module.css";

const UserDetailsCard = (props) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardHeader}>
        <img src={props.profilePicture} alt="" className={styles.cardPicture} />
      </div>
      <div className={styles.cardContents}>
        <p>Firstname: {props.firstName}</p>
        <p>Secondname: {props.secondName}</p>
        <p>Role: {props.role}</p>
        <p>Email: {props.email}</p>
        <p>Rating: {props.rating}</p>
      </div>
      <div className={styles.cardFooter}></div>
    </div>
  );
};

export default UserDetailsCard;
