import React, { useEffect, useState } from "react";
import "./Profile.css";
import { useKeycloak } from "@react-keycloak/web";

import { IoIosLogOut } from "react-icons/io";
import { PiCookingPotBold } from "react-icons/pi";
import { PiForkKnifeDuotone } from "react-icons/pi";
import { useContext } from "react";
import { useFinanceContext } from "../../hooks/useFinanceContext";

const Profile = () => {
  const { keycloak, initialized } = useKeycloak();
  const { finance, balance, setBalance } = useFinanceContext();

  var username = "MM";
  var firstName = "Max";
  var lastName = "Mustermann";

  if (initialized && keycloak.authenticated) {
    username = keycloak.tokenParsed.preferred_username;
    firstName = keycloak.tokenParsed.given_name;
    lastName = keycloak.tokenParsed.family_name;

    if (finance) {
      const userExists = finance.some(
        (fin) => fin.userInfo.userName === username
      );
      if (userExists) {
        const targetUserName = username;
        const targetUser = finance.find(
          (user) => user.userInfo.userName === targetUserName
        );
        setBalance(targetUser.userInfo.balance.$numberDecimal);
      }
    }
  }

  useEffect(() => {
    if (initialized && keycloak.authenticated && finance) {
      username = keycloak.tokenParsed.preferred_username;
      firstName = keycloak.tokenParsed.given_name;
      lastName = keycloak.tokenParsed.family_name;

      const targetUser = finance.find(
        (user) => user.userInfo.userName === username
      );

      if (targetUser) {
        const balanceValue = parseFloat(
          targetUser.userInfo.balance.$numberDecimal
        );

        const roundedBalance = balanceValue.toFixed(2);
        const formattedBalance = parseFloat(roundedBalance).toString();

        setBalance(formattedBalance);
      }
    }
  }, [initialized, keycloak.authenticated, finance]);

  const handleLogout = () => {
    keycloak.logout();
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
          <div className="balance">{balance} €</div>
        </div>

        <div className="box3">
          <div className="statistic">Statistik:</div>
          <div className="gekocht">
            3
            <div className="icon-gekocht">
              <PiCookingPotBold></PiCookingPotBold>
            </div>
          </div>
          <div className="gegessen">
            9
            <div className="icon-gegessen">
              <PiForkKnifeDuotone></PiForkKnifeDuotone>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
