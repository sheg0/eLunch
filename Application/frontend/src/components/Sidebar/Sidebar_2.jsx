import React, { useState } from "react";
import "./Sidebar_2.css";
import { useNavigate } from "react-router-dom";

import { VscBook } from "react-icons/vsc";
import { GiMeal } from "react-icons/gi";
import { SlNotebook } from "react-icons/sl";
import { CiDollar } from "react-icons/ci";
import { VscOrganization } from "react-icons/vsc";
import { SlChart } from "react-icons/sl";
import { SlInfo } from "react-icons/sl";


function Sidebar({children}) {
  const navigate = useNavigate();

  function SwitchPath(path) {
    console.log(path);
    switch (path) {
      case "Speiseplan":
        return navigate("/Calendar");
      case "Gerichte":
        return navigate("/List");
      case "Einkaufszettel":
        return navigate("/");
      case "Events":
        return navigate("/Events");
      case 5:
        return navigate("/");
      case 6:
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
    "Events",
    "Mitarbeiter",
    "Statistik",
    "Infos",
  ];

  const iconMap = {
    Speiseplan: <VscBook size={24} style={{ fill: 'white' }} />,
    Gerichte: <GiMeal size={24} style={{ fill: 'white' }} />,
    Einkaufszettel: <SlNotebook size={24} style={{ fill: 'white' }} />,
    Events: <CiDollar size={24} style={{ fill: 'white' }} />,
    Mitarbeiter: <VscOrganization size={24} style={{ fill: 'white' }} />,
    Statistik: <SlChart size={24} style={{ fill: 'white' }} />,
    Infos: <SlInfo size={24} style={{ fill: 'white' }} />,
  };

  return (
      <div className="sidebar">
        <div className="sidebar-content">
          <div className="sidebar-list">
            {listItems.map((item) => {
              return (
                <div className="button"
                  onClick={() => SwitchPath(item)}
                  key={item}>
                    <div className="icon">
                      {iconMap[item]}
                    </div>
                    <div className="text">
                      {item}
                    </div>
                </div>
              );
            })}
          </div>


          <div className="sidebar-footer">
            <a href={"./Info"}>Impressum</a> | Druckansicht | ICAL
          </div>
        </div>
      </div>
  );
}

export default Sidebar;

/*
Speiseplan:
import { VscBook } from "react-icons/vsc";            <VscBook />
import { VscCalendar } from "react-icons/vsc";        <VscCalendar />
import { CiCalendar } from "react-icons/ci";          <CiCalendar />
import { MdMenuBook } from "react-icons/md";          <MdMenuBook />


Gerichte:
import { GiMeal } from "react-icons/gi";                <GiMeal />
import { MdRestaurantMenu } from "react-icons/md";      <MdRestaurantMenu />


Einkaufszettel:
import { SlNotebook } from "react-icons/sl";          <SlNotebook />
import { SlBasket } from "react-icons/sl";            <SlBasket />
import { CiCircleList } from "react-icons/ci";        <CiCircleList />
import { CiViewList } from "react-icons/ci";          <CiViewList />
import { TfiPencilAlt } from "react-icons/tfi";       <TfiPencilAlt />


Finanzen:
import { CiDollar } from "react-icons/ci";                  <CiDollar />
import { TfiMoney } from "react-icons/tfi";                 <TfiMoney />
import { MdAttachMoney } from "react-icons/md";             <MdAttachMoney />
import { RiMoneyEuroCircleLine } from "react-icons/ri";     <RiMoneyEuroCircleLine />
import { MdEuroSymbol } from "react-icons/md";              <MdEuroSymbol />
import { TbCurrencyEuro } from "react-icons/tb";            <TbCurrencyEuro />


Mitarbeiter:
import { VscOrganization } from "react-icons/vsc";      <VscOrganization />
import { SlUser } from "react-icons/sl";                <SlUser />
import { CiUser } from "react-icons/ci";                <CiUser />


Statistiken:
import { SlChart } from "react-icons/sl";             <SlChart /> 
import { SlGraph } from "react-icons/sl";             <SlGraph />
import { VscPieChart } from "react-icons/vsc";        <VscPieChart />
import { TfiBarChart } from "react-icons/tfi";        <TfiBarChart />


Infos:
import { SlInfo } from "react-icons/sl";              <SlInfo />
import { CiCircleInfo } from "react-icons/ci";        <CiCircleInfo />
import { TfiInfoAlt } from "react-icons/tfi";         <TfiInfoAlt />
*/