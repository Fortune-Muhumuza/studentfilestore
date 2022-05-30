import React from "react";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";
import logo from "../../../assets/logo.png";
import {
  BookOutlined,
  DashboardOutlined,
  FileAddOutlined,
  UsergroupAddOutlined,
  LineChartOutlined
} from "@ant-design/icons";

const Sidebar = () => {
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebarLogo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.sidebarLinks}>
        <ul>
          <div>
            <li className={styles.navbarItem}>
              <BookOutlined style={{ color: "white" }} />
              <Link to="/myNotes" className={styles.navLink}>
                {" "}
                My notes
              </Link>
            </li>
          </div>
          <div>
            <li className={styles.navbarItem}>
              <DashboardOutlined style={{ color: "white" }} />
              <Link to="/" className={styles.navLink}>
                Dashboard
              </Link>
            </li>
          </div>
          <div>
            <li className={styles.navbarItem}>
              <UsergroupAddOutlined style={{ color: "white" }} />
              <Link to="/classNotes" className={styles.navLink}>
                {" "}
                Class notes
              </Link>
            </li>
          </div>
          <div>
            <li className={styles.navbarItem}>
              <FileAddOutlined style={{ color: "white" }} />
              <Link to="/addNotes" className={styles.navLink}>
                {" "}
                Add notes
              </Link>
            </li>
          </div>
          <div>
            <li className={styles.navbarItem}>
            <LineChartOutlined style={{ color: "white" }} />
              <Link to="/stats" className={styles.navLink}>
                {" "}
                Statistics
              </Link>
            </li>
          </div>
        </ul>
      </div>

      <div className={styles.sidebarFooter}>2022</div>
    </div>
  );
};

export default Sidebar;
