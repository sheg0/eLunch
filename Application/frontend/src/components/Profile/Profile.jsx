import React from "react";
import "./Profile.css";
//import SteinbeisLogo from "../../images/Logo_Steinbeis_EST_white.png";

const Profile = (initials) => {
  const handleLogout = () => {};

  return (
    <>
      {/* <div className="logo">
        <img
          src={SteinbeisLogo}
          alt="Steinbeis"
          style={{ width: "450%", height: "auto" }}
        />
      </div>
        <div className="box">
        <div className="profile">{initials}</div>
        {employee.map((employee) => (
          <div key={employee}>
            {employee.name.split(" ").map((namePart) => (
              <span key={namePart[0]}>{namePart[0]}</span>
            ))}
            <h2>{employee}</h2>
            <h3 className="kontostand">{balance}</h3>
            <h3 className="statistik">Statistiken: {statistics}</h3>
          </div>
        ))}
      </div>*/}

      <div className="container">
        <div className="side-to-side">
          <div className="kreis">MM</div>
          <div className="abmelden" onClick={handleLogout}>
            Abmelden
          </div>
        </div>
        <div className="side-by-side">
          <div className="name">Max Mustermann</div>
          <div className="balance">1045,65€</div>
        </div>
        <div className="nex-line">
          <div className="statistic">Statistik: 84x 153x</div>
        </div>
      </div>
    </>
  );
};

export default Profile;
