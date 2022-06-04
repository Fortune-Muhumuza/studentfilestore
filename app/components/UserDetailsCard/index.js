/**
 *
 * UserDetailsCard
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
background-color: dodgerblue;
padding: 2rem;
width: 30rem;
margin-bottom: 2rem;
`

const Header = styled.div`
align-items: center;
margin-right: 1rem;
padding: 1rem;
background-color: rgb(255, 200, 47);
`

const CardPicture = styled.img`
height: 8rem;
border-radius: 5rem;
`

const CardContents = styled.div`
>p{
  font-size: 1.5rem;
color: white;
}
`

function UserDetailsCard(props) {
  return (
    <Container>
      <Header>
        <CardPicture src={props.profilePicture} alt="dp" />
        </Header>
      <CardContents>
        <p>Firstname: {props.firstName}</p>
        <p>Secondname: {props.secondName}</p>
        <p>Role: {props.role}</p>
        <p>Email: {props.email}</p>
        <p>Rating: {props.rating}</p>
        </CardContents>
      <div />
      </Container>
  );
}

// UserDetailsCard.propTypes = {};

export default UserDetailsCard;
