import React, { useEffect, useState } from "react";
import "./Profile.css";
import { useKeycloak } from "@react-keycloak/web";
import { useFinanceContext } from "../../hooks/useFinanceContext";
import { useContext } from "react";

import { IoIosLogOut } from "react-icons/io";
import { PiCookingPotBold } from "react-icons/pi";
import { PiForkKnifeDuotone } from "react-icons/pi";

const Profile = () => {
  const { keycloak, initialized } = useKeycloak();
  const [showTooltip, setShowTooltip] = useState(false);
  const [cooked, setCooked] = useState(0);
  const [ateOut, setAteOut] = useState(0);

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

  /*const logCookingActivity = () => {
    setActivities([...activities, "cooked"]);
    setCooked(cooked + 1);
  };


  const logEatingOutActivity = () => {
    setActivities([...activities, "ateOut"]);
    setAteOut(ateOut + 1);
  };

  const calculateProbability = () => {
    const last30Days = activities.slice(-30);
    const cookedCount = last30Days.filter(
      (activity) => activity === "cooked"
    ).length;
    const ateOutCount = last30Days.filter(
      (activity) => activity === "ateOut"
    ).length;

    const totalActivities = cookedCount + ateOutCount;
    const cookedProbability = (cookedCount / totalActivities) * 100;
    const ateOutProbability = (ateOutCount / totalActivities) * 100;

    return { cookedProbability, ateOutProbability };
  };

  const { cookedProbability, ateOutProbability } = calculateProbability();*/

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  /*const balance = () => {
    handleSendMoney();
  };*/

  /*const [kontostand, setKontostand] = useState();

  useEffect(() => {
    const fetchKontostand = async () => {
      try {
        const response = await keycloak.loadUserInfo();
        setKontostand(response.kontostand);
      } catch (error) {
        console.error("Error fetching account balance", error);
      }
    };
    fetchKontostand();
  }, [keycloak]);

  const handleButtonBalance = () => {
    setKontostand(kontostand - 10);
  };*/

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
          <div className="balance">{balance || "1453 €"}</div>
        </div>
        <div className="box3">
          <div className="statistic">Statistik:</div>
          <PiCookingPotBold
            className="icon-gekocht"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/*{ateOutProbability.toFixed(2)}*/}
          </PiCookingPotBold>
          <PiForkKnifeDuotone className="icon-gegessen">
            {/*{cookedProbability.toFixed(2)}*/}
          </PiForkKnifeDuotone>
        </div>
      </div>
    </div>
  );
};

export default Profile;
