import React, { useEffect, useState } from "react";
import "./Profile.css";
import { useKeycloak } from "@react-keycloak/web";

import { IoIosLogOut } from "react-icons/io";
import { PiCookingPot } from "react-icons/pi";
import { PiForkKnifeDuotone } from "react-icons/pi";

import { useFinanceContext } from "../../hooks/useFinanceContext";
import { EventDetailModal } from "../Modal/EventDetailModal/EventDetailModal";
import { useCalendarContext } from "../../hooks/useCalendarContext";
import { CalendarContext } from "../../context/CalendarContext";

const Profile = ({ participants }) => {
  const { keycloak, initialized } = useKeycloak();
  const { finance, balance, setBalance } = useFinanceContext();
  const { mitessenCount, setMitessenCount } = useState("");
  const { isCookCount, setIsCookCount } = useState("");

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
        //balance = finance.map((fin) => fin.userInfo.userName === username)
        const targetUserName = username;
        const targetUser = finance.find(
          (user) => user.userInfo.userName === targetUserName
        );
        console.log(targetUser.userInfo.balance.$numberDecimal);
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
        setBalance(balanceValue);
      }
    }
  }, [initialized, keycloak.authenticated, finance]);

  const handleLogout = () => {
    keycloak.logout();
  };

  const calculateStatistics = () => {
    if (!participants) return;

    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const mitessen = participants.filter(
      (participant) =>
        participant.hasMitessen &&
        new Date(participant.timestamp) > thirtyDaysAgo
    ).length;

    const isCook = participants.filter(
      (participant) =>
        participant.isCook && new Date(participant.timestamp) > thirtyDaysAgo
    ).length;

    setMitessenCount(mitessen);
    setIsCookCount(isCook);
  };

  // Rufe die Berechnungen auf, wenn sich die Teilnehmer ändern (z.B., wenn die Daten aktualisiert werden)
  useEffect(() => {
    calculateStatistics();
  }, [participants]);
  return (
    <div className="profile-container">
      <div className="profile-content">
        <div className="profile-box1">
          <div className="profile-circle">
            <div className="profile-circle-name">
              {firstName[0]} {lastName[0]}
            </div>
          </div>
          <div className="profile-logout" onClick={handleLogout}>
            <IoIosLogOut></IoIosLogOut>
          </div>
        </div>
        <div className="profile-box2">
          <div className="profile-name">
            {firstName} {lastName}
          </div>
          <div className="profile-balance">{balance || "1453"}</div>
        </div>
        <div className="profile-box3">
          <div className="profile-statistic">Statistik:</div>

          <PiCookingPot className="profile-statistic-iconGekocht">
            {isCookCount}
          </PiCookingPot>

          <PiForkKnifeDuotone className="profile-statistic-iconGegessen">
            {mitessenCount}
          </PiForkKnifeDuotone>
        </div>
      </div>
    </div>
  );
};

export default Profile;
