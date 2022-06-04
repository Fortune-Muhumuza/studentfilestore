import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 1rem;
`;
const Container = styled.div``;

const CardBody = styled.div`
  height: 18rem;
  width: 30rem;
  background-color: rgb(250, 242, 225);
  -webkit-box-shadow: 0px 0px 13px 5px rgba(0, 0, 0, 0.28);
  box-shadow: 0px 0px 13px 5px rgba(0, 0, 0, 0.28);
  padding: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.5rem;
`;

const CardDescription = styled.div`
  font-size: 1.5rem;
  color: green;
`;

const CardId = styled.div`
  color: grey;
  font-weight: 700;
  font-size: 1.3rem;
`;

const CardFormat = styled.div`
  font-weight: 600;
  padding: 1rem;
  width: 9rem;
  background-color: ${props => props.format === "PDF"?'orange': props.format === "DOC"?'#00FF00':'dodgerblue'}
  /* background-color: lightgrey; */
  font-size: 1.4rem;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardFooterContent = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  width: 12rem;
  padding: 0.5rem;
  border-radius: 10rem;
  cursor: pointer;
  background-color: aqua;
`;

export default function NotesCard(props) {
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
  return (
    <div>
      <CardBody>
        <div>
          <H1>{props.title}</H1>
        </div>
        <CardId>
          <p>File ID: {props.id}</p>
        </CardId>
        <CardDescription>
          <p>{props.description}</p>
        </CardDescription>
        {
          <CardFormat>
            <p>Format: {props.format}</p>
          </CardFormat>
        }
        <CardFooter>
          {
            props.isMyNotes &&
            <CardFooterContent onClick={() => setTimeout(handleDownload, 1500)}>
            <p> Remove </p>
            </CardFooterContent>
          }
          {props.isDashboard &&
          <CardFooterContent onClick={() => setTimeout(handleDownload, 1500)}>
            <p> "Download" </p>
            </CardFooterContent>
}{props.isDashboard &&
          <CardFooterContent onClick={() => setTimeout(handleAddToFavorites, 1500)}>
            <p> "Add to favorites"</p>
            </CardFooterContent>
}
        </CardFooter>
        </CardBody>
    </div>
  );
}
