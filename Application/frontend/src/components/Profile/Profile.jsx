import React, { useEffect, useState } from "react";
import "./Profile.css";
import { useKeycloak } from "@react-keycloak/web";
import { handleSendMoney } from "../Finance/Finance.jsx";

import { IoIosLogOut } from "react-icons/io";
import { PiCookingPotBold } from "react-icons/pi";
import { PiForkKnifeDuotone } from "react-icons/pi";
import { useContext } from "react";
import { useFinanceContext } from "../../hooks/useFinanceContext";
const Profile = () => {
  const { keycloak, initialized } = useKeycloak();
  const { finance } = useFinanceContext();
  var username = "MM";
  var firstName = "Max";
  var lastName = "Mustermann";
  var balance = 0;
  if (initialized && keycloak.authenticated) {
    firstName = keycloak.tokenParsed.given_name;
    lastName = keycloak.tokenParsed.family_name;
  }
  if (finance) {
    const userExists = finance.some(
      (fin) => fin.userInfo.userName === username
    );
    if (userExists) {
      //balance = finance.map((fin) => fin.userInfo.userName === username)
      const targetUserName = username;
      const targetUser = finance.find(
        (user) => user.userInfo.userName === targetUserName
      );
      console.log(targetUser.userInfo.balance.$numberDecimal);
      balance = targetUser.userInfo.balance.$numberDecimal;
    }
  }

  const handleLogout = () => {
    keycloak.logout();
  };
  const balance = () => {
    handleSendMoney();
  };
  return (
    <div className="profile-container">
      <div className="profile-content">
        <div className="box1">
          <div className="profile-circle">
            <div className="circle-name">
              {firstName[0]} {lastName[0]}
            </div>
          </div>
          <div className="profile-logout" onClick={handleLogout}>
            <IoIosLogOut></IoIosLogOut>
          </div>
        </div>
        <div className="box2">
          <div className="name">
            {firstName} {lastName}
          </div>
          <div className="balance">{balance || "1453"}</div>
        </div>
        <div className="box3">
          <div className="statistic">Statistik:</div>
          <PiCookingPotBold className="icon-gekocht"></PiCookingPotBold>
          <PiForkKnifeDuotone className="icon-gegessen"></PiForkKnifeDuotone>
        </div>
      </div>
    </div>
  );
};

export default Profile;
