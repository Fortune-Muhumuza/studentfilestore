import React, { useEffect } from "react";
import styles from "./NotesCard.module.css";

const NotesCard = (props) => {
  const formatButtonColorCode = props.format;
  const [backgroundColor, setBackgroundColor] = React.useState();
  const [isButtonActive, setIsButtonActive] = React.useState(true);
  const [isAddingButtonActive, setIsAddingButtonActive] = React.useState(true);

  const handleFormatButtonColor = () => {
    if (formatButtonColorCode === "PDF") {
      setBackgroundColor("orange");
    }
    if (formatButtonColorCode === "DOC") {
      setBackgroundColor("#00FF00");
    }
    if (formatButtonColorCode === "PPT") {
      setBackgroundColor("dodgerblue");
    }
  };

  const handleDownload = () => {
    setIsButtonActive(false);
    const localArr = []
    const specificNote = {
      id: props.id,
      title: props.title,
      description: props.description,
      format: props.format,
    };
    localArr.push(specificNote);
 
    const tempArr = []
     const storedNotes = JSON.parse(localStorage.getItem('downloadNotes'))
     console.log('stored notes', storedNotes)
     if(!storedNotes || storedNotes == null || storedNotes == undefined){    
      localStorage.setItem('downloadNotes', JSON.stringify(localArr))
     }else{
      tempArr.push(...storedNotes, specificNote)
      localStorage.setItem('downloadNotes', JSON.stringify(tempArr))
      console.log('temp arr', tempArr)
     }
    // 

    setTimeout(() => {
      alert("Download complete");
    }, 2000);
  };

  const handleAddToFavorites = () => {
    setIsAddingButtonActive(false);
    setTimeout(() => {
      alert("File has been added to favorites");
    }, 2000);
  };

  useEffect(() => {
    handleFormatButtonColor();
  }, [formatButtonColorCode]);

  return (
    <div className={styles.container}>
      <div className={styles.cardBody}>
        <div className={styles.cardTitle}>
          <h1>{props.title}</h1>
        </div>
        <div className={styles.cardId}>
          <p>File ID: {props.id}</p>
        </div>
        <div className={styles.cardDescription}>
          <p>{props.description}</p>
        </div>
        {
          <div
            className={styles.cardFormat}
            style={{ backgroundColor: backgroundColor }}
          >
            <p>Format: {props.format}</p>
          </div>
        }
        <div className={styles.cardFooter}>
          <div
            className={styles.cardFooterContent}
            onClick={() => setTimeout(handleDownload, 1500)}
          >
            <p>{isButtonActive ? "Download" : "Downloading"}</p>
          </div>
          <div
            className={styles.cardFooterContent}
            onClick={() => setTimeout(handleAddToFavorites, 1500)}
          >
            <p>
              {isAddingButtonActive
                ? "Add to favorites"
                : "Adding to favorites"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesCard;
