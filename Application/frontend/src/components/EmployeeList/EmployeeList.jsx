import React, { useState, useEffect, useContext } from "react";
import "./EmployeeList.css";
import { FinanceContext } from "../../context/FinanceContext";

const EmployeeList = ({ finances }) => {
  const { finance } = useContext(FinanceContext);

  if (!finances || Object.keys(finances).length === 0) {
    console.log("leeeer");
    return null;
  }

  return (
    <div className="EL-Container">
      <h2 className="EL-Header">Mitarbeiterliste</h2>
      <div className="EL-Content">
        <table className="EL-Table">
          <thead>
            <tr className="EL-Table-Header">
              <th>Vorname</th>
              <th>Nachname</th>
              <th>Benutzername</th>
              <th>Kontostand in €</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(finances).map((keyName, i) => (
              <tr className="EL-Table-Body" key={i}>
                <td>{finances[keyName].userInfo.firstName}</td>
                <td>{finances[keyName].userInfo.lastName}</td>
                <td>{finances[keyName].userInfo.userName}</td>
                <td>{finances[keyName]?.userInfo?.balance?.$numberDecimal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
