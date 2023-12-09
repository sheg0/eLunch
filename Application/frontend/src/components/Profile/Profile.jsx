import React, { useEffect, useState } from "react";
import "./Profile.css";
import { useKeycloak } from "@react-keycloak/web";

import { IoIosLogOut } from "react-icons/io";
import { PiCookingPotBold } from "react-icons/pi";
import { PiForkKnifeDuotone } from "react-icons/pi";

const Profile = () => {
  const { keycloak } = useKeycloak();
  //const [keycloak, setKeycloak] = useState("");
  //console.log(keycloak);

  /*const [username, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

   const [gegessen, setGegessen] = useState("");*/

  /*if (keycloak.tokenParsed !== null) {
    const username = keycloak.tokenParsed.preferred_username;
    const firstName = keycloak.tokenParsed.given_name;
    const lastName = keycloak.tokenParsed.family_name;
  }*/

  /*if (keycloak.authenticated) {
    console.log("User is logged in");
  } else {
    console.log("User is not logged in");
  }*/

  /*const [gekocht, setGekocht] = useState("");*/

  /*const username = keycloak.tokenParsed.preferred_username;
  const firstName = keycloak.tokenParsed.given_name;
  const lastName = keycloak.tokenParsed.family_name;

  const gegessen = keycloak.tokenParsed.gegessen;*/

  /*useEffect(() => {
    const initKeycloak = async () => {
      await keycloak.init({ onLoad: "login-required" });
      setKeycloak(keycloak);

      //setUserName(keycloak.tokenParsed.preferred_username);
      firstName(keycloak.tokenParsed.given_name);
      //setLastName(keycloak.tokenParsed.family_name);

      //setGegessen(keycloak.tokenParsed.gegessen_stat);
      //setGekocht(keycloak.tokenParsed.gekocht_stat);
    };
    initKeycloak();
  }, []);*/

  const handleLogout = () => {
    keycloak.logout();
  };

  return (
    <>
      <div className="container">
        <div className="content">
          <div className="row1">
            <div className="banner">MM</div>
            <IoIosLogOut className="logout" onClick={handleLogout}>
              Abmelden
            </IoIosLogOut>
          </div>
          <div className="row2">
            <div className="name">Max Mustermann</div>
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
