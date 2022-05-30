import React, { useState } from "react";
import styles from "./Statistics.module.css";
import { users } from "./dummyData";
import UserDetailsCard from "../UI/cards/UserDetailsCard"
import { Doughnut } from 'react-chartjs-2';
import { chartData } from "./chartData";

const Statistics = () => {
  const [searchItem, setSearchItem] = useState("");
  const [searchResults, setSearchResults] = useState(users);
  const [isSearching, setIsSearching] = useState(false);

  console.log('chart data', chartData)

  const handleInputChange = (e) => {
    setSearchItem(e.target.value);
  };

  function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
  }

  const handleSearch = () => {
      setIsSearching(true);
    var filter = "firstName";
    var keyword = capitalize(searchItem);

    var filteredData = searchResults.filter(function (obj) {
      return obj[filter] === keyword;
    });

    setSearchResults(filteredData);

    console.log(filteredData);
  };

  //   console.log('search item', searchItem)

  return (
    <div className={styles.statisticsContainer}>
      <div className={styles.statisticsHeader}>
        <h1>statistics</h1>
      </div>
      <p>Filter</p>
      <div className={styles.statisticsContents}>
        <input
          placeholder="search"
          value={searchItem}
          onChange={handleInputChange}
        ></input>
        <Doughnut data={chartData} />
        {isSearching && (
          <div>
            <h1>Searching...</h1>
          </div>
        )}
        <button onClick={() => setTimeout(handleSearch, 2000)}>search</button>

        {searchResults.map((user) => (
          <UserDetailsCard
            firstName={user.firstName}
            secondName={user.secondName}
            email={user.email}
            role={user.role}
            rating={user.rating}
            profilePicture={user.profilePicture}
          />
          // <div className={styles.statisticsCard} key={user.id}>
          //     <h1>{user.firstName}</h1>
          //     <h1>{user.secondName}</h1>
          //     <p>{user.email}</p>
          //     <p>Rating: {user.rating}</p>
          //     <img src={user.profilePicture} alt="dp" className={styles.profilePicture}/>
          //     </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
