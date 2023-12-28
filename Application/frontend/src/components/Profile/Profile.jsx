import React, { useEffect, useState } from "react";
import "./Profile.css";

import { useKeycloak } from "@react-keycloak/web";

import { IoIosLogOut } from "react-icons/io";
import { PiCookingPotBold } from "react-icons/pi";
import { PiForkKnifeDuotone } from "react-icons/pi";

const Profile = () => {
  const { keycloak, initialized } = useKeycloak();

  var firstName = "xyz";
  var lastName = "xyz";

  if (initialized && keycloak.authenticated) {
    firstName = keycloak.tokenParsed.given_name;
    lastName = keycloak.tokenParsed.family_name;
  }

  const handleLogout = () => {
    keycloak.logout();
  };

  /*const [kontostand, setKontostand] = useState(100);
  const handleButtonBalance = () => {
    setKontostand(kontostand - 10);
  };*/

  const [kontostand, setKontostand] = useState();

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
          <div className="balance" onClick={handleButtonBalance}>
            {kontostand} €
          </div>
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
