import React, { useState } from "react";
import "./Sidebar_2.css";
import { useNavigate } from "react-router-dom";
import Profile from "../Profile/Profile";
import { Container } from "@mui/material";
import { VscBook, VscOrganization } from "react-icons/vsc";
import { MdRestaurantMenu, MdEuroSymbol } from "react-icons/md";
import { SlBasket } from "react-icons/sl";
import { TfiBarChart, TfiInfoAlt } from "react-icons/tfi";
import { RxHamburgerMenu } from "react-icons/rx";
import SteinbeisLogo from "../../images/Logo_Steinbeis_EST_white.png";

function Sidebar({ children }) {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState();
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  function SwitchPath(path) {
    console.log(path);
    switch (path) {
      case "Speiseplan":
        return navigate("/Calendar");
      case "Gerichte":
        return navigate("/List");
      case "Einkaufszettel":
        return navigate("/");
      case "Finance":
        return navigate("/Finance");
      case 5:
        return navigate("/");
      case "Statistik":
        return navigate("/");
      case "Infos":
        return navigate("/Info");
      default:
        return navigate("/");
    }
  }

  const listItems = [
    "Speiseplan",
    "Gerichte",
    "Einkaufszettel",
    "Finance",
    "Mitarbeiter",
    "Statistik",
    "Infos",
  ];

  const iconMap = {
    Speiseplan: <VscBook className="sidebar-icon" />,
    Gerichte: <MdRestaurantMenu className="sidebar-icon" />,
    Einkaufszettel: <SlBasket className="sidebar-icon" />,
    Finance: <MdEuroSymbol className="sidebar-icon" />,
    Mitarbeiter: <VscOrganization className="sidebar-icon" />,
    Statistik: <TfiBarChart className="sidebar-icon" />,
    Infos: <TfiInfoAlt className="sidebar-icon" />,
  };

  return (
    <>
      <div className={`sidebar ${sidebarVisible ? "active" : ""}`}>
        <div className="sidebar-content">
          <div className="sidebar-profile">
            <Profile />
          </div>
          <div className="sidebar-list">
            {listItems.map((item) => {
              return (
                <div
                  className={`sidebar-button ${
                    selectedTab === item ? "active" : ""
                  }`}
                  onClick={() => {
                    SwitchPath(item);
                    setSelectedTab(item);
                  }}
                  key={item}
                >
                  <div>{iconMap[item]}</div>
                  <div className="sidebar-text">{item}</div>
                </div>
              );
            })}
          </div>

          <img src={SteinbeisLogo} alt="Steinbeis" className="sidebar-logo" />

          <div className="sidebar-footer">
            <a className="sidebar-impressum" href={"./Info"}>
              Impressum
            </a>
          </div>
        </div>
      </div>

      <button className="sidebar-hamburger-icon" onClick={toggleSidebar}>
        <RxHamburgerMenu />
      </button>

      <Container>
        <div>{children}</div>
      </Container>
    </>
  );
}

export default Sidebar;
