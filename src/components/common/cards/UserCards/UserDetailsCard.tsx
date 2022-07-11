import React from "react";
const styles = require("./UserDetailsCard.module.css");

type props = {
  // onClick: MouseEventHandler;
  text: string;
  firstName: string;
  secondName: string;
  role: string;
  email: string;
  rating: string;
  profilePicture: string;
};

const UserDetailsCard = ({
  firstName,
  secondName,
  role,
  email,
  rating,
  profilePicture
}: props) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardHeader}> 
        <img src={profilePicture} alt="" className={styles.cardPicture} />
      </div>
      <div className={styles.cardContents}>
        <p>Firstname: {firstName}</p>
        <p>Secondname: {secondName}</p>
        <p>Role: {role}</p>
        <p>Email: {email}</p>
        <p>Rating: {rating}</p>
      </div>
      <div className={styles.cardFooter}></div>
    </div>
  );
};

export default UserDetailsCard;
