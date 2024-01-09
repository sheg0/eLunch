import React, { useState } from "react";
import "./Sidebar_2.css";
import { useNavigate } from "react-router-dom";
import Profile from "../Profile/Profile";
import { Container } from "@mui/material";

import { VscBook } from "react-icons/vsc";
import { MdRestaurantMenu } from "react-icons/md";
import { SlBasket } from "react-icons/sl";
import { MdEuroSymbol } from "react-icons/md";
import { VscOrganization } from "react-icons/vsc";
import { TfiBarChart } from "react-icons/tfi";
import { TfiInfoAlt } from "react-icons/tfi";

function Sidebar({ children }) {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState();

  function SwitchPath(path) {
    console.log(path);
    switch (path) {
      case "Speiseplan":
        return navigate("/Calendar");
      case "Gerichte":
        return navigate("/List");
      case "Einkaufszettel":
        return navigate("/Shoppinglist");
      case "Finanzen":
        return navigate("/Finanzen");
      case "Mitarbeiter":
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
    "Finanzen",
    "Mitarbeiter",
    "Statistik",
    "Infos",
  ];

  const iconMap = {
    Speiseplan: <VscBook size={18 + 0.390625} style={{ fill: "white" }} />,
    Gerichte: (
      <MdRestaurantMenu size={18 + 0.390625} style={{ fill: "white" }} />
    ),
    Einkaufszettel: <SlBasket size={18 + 0.390625} style={{ fill: "white" }} />,
    Finanzen: <MdEuroSymbol size={18 + 0.390625} style={{ fill: "white" }} />,
    Mitarbeiter: (
      <VscOrganization size={18 + 0.390625} style={{ fill: "white" }} />
    ),
    Statistik: <TfiBarChart size={18 + 0.390625} style={{ fill: "white" }} />,
    Infos: <TfiInfoAlt size={18 + 0.390625} style={{ fill: "white" }} />,
  };

  return (
    <>
      <div className="sidebar">
        <div className="sidebar-content">
          <div className="profile">
            <Profile />
          </div>
          <div className="sidebar-list">
            {listItems.map((item) => {
              return (
                <div
                  className={`button ${selectedTab === item ? "active" : ""}`}
                  onClick={() => {
                    SwitchPath(item);
                    setSelectedTab(item);
                  }}
                  key={item}
                >
                  <div className="icon">{iconMap[item]}</div>
                  <div className="text">{item}</div>
                </div>
              );
            })}
          </div>

          <div className="sidebar-footer">
            <a href={"./Info"}>Impressum</a> | Druckansicht | ICAL
          </div>
        </div>
      </div>
      <Container>
        <div>{children}</div>
      </Container>
    </>
  );
}

export default Sidebar;
