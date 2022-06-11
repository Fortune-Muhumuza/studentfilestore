import React, { useState } from "react";
import styles from "./Statistics.module.css";
import { useSelector } from "react-redux";
import UserDetailsCard from "../../common/cards/UserCards/UserDetailsCard";
import { Chart as ChartJS, registerables } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { chartData } from "../../admin/chartData";
ChartJS.register(...registerables);

const Statistics = () => {
  const users = useSelector((state) => state.users);
  const [searchItem, setSearchItem] = useState("");
  const [searchResults, setSearchResults] = useState(users);
  const [isSearching, setIsSearching] = useState(false);

  console.log("chart data", chartData);

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

      <div className={styles.statisticsContents}>
        <p>Filter</p>
        <input
          placeholder="search"
          value={searchItem}
          onChange={handleInputChange}
        ></input>

        {isSearching && (
          <div>
            <h1>Searching...</h1>
          </div>
        )}
        <button onClick={() => setTimeout(handleSearch, 2000)}>search</button>
        <div className={styles.statisticsChart}>
          <Doughnut data={chartData} />
        </div>
        <div>
          {searchResults.map((user) => (
            <UserDetailsCard
              key={user.id}
              firstName={user.firstName}
              secondName={user.secondName}
              email={user.email}
              role={user.role}
              rating={user.rating}
              profilePicture={user.profilePicture}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
