import { NotificationOutlined, UserOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
const styles = require("./Header.module.css");

const Header = () => {
  const [searchItem, setSearchItem] = useState<number | string>("");
  const [searchResults, setSearchResults] = useState([]);


  const handleSearch = (e) => {
    setSearchItem(e.target.value);
  }

  
  return <div className={styles.headerContainer}>
    <div>
        <h1>Username</h1>
    </div>
    <div>
        <input placeholder="Search" value={searchItem} className={styles.headerSearch} onChange={handleSearch}>
        </input>
    </div>
    <div>
    <NotificationOutlined style={{fontSize: '2.5rem'}}/>
    <UserOutlined style={{fontSize: '2.5rem'}}/>
        </div>
  </div>;
};

export default Header;
