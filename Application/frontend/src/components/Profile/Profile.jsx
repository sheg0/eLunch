import React from "react";
import "./Profile.css";
import { useKeycloak } from "@react-keycloak/web";

import { IoIosLogOut } from "react-icons/io";
import { PiCookingPotBold } from "react-icons/pi";
import { PiForkKnifeDuotone } from "react-icons/pi";

const Profile = () => {
  const { keycloak } = useKeycloak();

  const username = keycloak.tokenParsed.preferred_username;
  const firstName = keycloak.tokenParsed.given_name;
  const lastName = keycloak.tokenParsed.family_name;

  const handleLogout = () => {
    keycloak.logout();
  };

  return (
    <>
      <div className="container">
        <div className="content">
          <div className="row1">
            <div className="banner">
              {firstName[0]}
              {lastName[0]}
            </div>
            <IoIosLogOut className="logout" onClick={handleLogout}>
              Abmelden
            </IoIosLogOut>
          </div>
          <div className="row2">
            <div className="name">
              {firstName} {lastName}
            </div>
            <div className="balance">1045,65€</div>
          </div>
          <div className="row3">
            <div className="statistic">Statistik:</div>
            <PiCookingPotBold className="icon-gekocht"></PiCookingPotBold>
            <PiForkKnifeDuotone className="icon-gegessen"></PiForkKnifeDuotone>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
