/**
 *
 * Statistics
 *
 */

import React, { useState } from 'react';
import { users } from '../../admin/dummyData';
import UserDetailsCard from '../../components/UserDetailsCard';
import styled from 'styled-components';

export function Statistics() {
  const [searchItem, setSearchItem] = useState('');
  const [searchResults, setSearchResults] = useState(users);
  const [isSearching, setIsSearching] = useState(false);

  const handleInputChange = e => {
    setSearchItem(e.target.value);
  };

  function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
  }

  const handleSearch = () => {
    setIsSearching(true);
    var filter = 'firstName';
    var keyword = capitalize(searchItem);

    var filteredData = searchResults.filter(function(obj) {
      return obj[filter] === keyword;
    });

    setSearchResults(filteredData);

    console.log(filteredData);
  };

  const Container = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  `;

  const Header = styled.div`
  margin-bottom: 2rem;
  >h1{
    font-size: 3rem;
    font-weight: bold;
    color: dodgerblue;
  }
  `;
  const Contents = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  `;

  return (
    <Container>
      <Header>
        <h1>statistics</h1>
      </Header>

      <Contents>
        {/* <p>Filter</p>
        <input
          placeholder="search"
          value={searchItem}
          onChange={handleInputChange}
        />

        {isSearching && (
          <div>
            <h1>Searching...</h1>
          </div>
        )}
        <button onClick={() => setTimeout(handleSearch, 2000)}>search</button> */}
        {/* <div className={styles.statisticsChart}>
          <Doughnut data={chartData} />
        </div> */}
        <div>
          {searchResults.map(user => (
            <UserDetailsCard
              firstName={user.firstName}
              secondName={user.secondName}
              email={user.email}
              role={user.role}
              rating={user.rating}
              profilePicture={user.profilePicture}
            />
          ))}
        </div>
      </Contents>
    </Container>
  );
}

export default Statistics;
