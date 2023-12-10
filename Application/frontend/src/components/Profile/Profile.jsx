import React, { useEffect, useState } from "react";
import "./Profile.css";
import { useKeycloak } from "@react-keycloak/web";

import { IoIosLogOut } from "react-icons/io";
import { PiCookingPotBold } from "react-icons/pi";
import { PiForkKnifeDuotone } from "react-icons/pi";

const Profile = () => {
  const { keycloak } = useKeycloak();

  //const username = keycloak.tokenParsed.preferred_username;
  //const firstName = keycloak.tokenParsed.given_name;
  //const lastName = keycloak.tokenParsed.family_name;

  const handleLogout = () => {
    keycloak.logout();
  };

  return (
    <div className="profile-container">
      <div className="profile-content">
        <div className="box1">
          <div className="profile-circle">MM</div>
          <div className="profile-logout" onClick={handleLogout}>
            <IoIosLogOut></IoIosLogOut>
          </div>
        </div>
        <div className="box2">
          <div className="name">Max Mustermann</div>
          <div className="balance">1045,65€</div>
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
