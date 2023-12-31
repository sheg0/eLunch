import React, { useState } from "react";
import "./Finance.css";

const Finance = ({ balance }) => {
  console.log(balance);

  const [selectedEmployee, setSelectedEmployee] = useState("");

  const employees = ["Esra", "Kaan", "Vivian", "Selim"];

  const handleEmployeeChange = (e) => {
    setSelectedEmployee(e.target.value);
  };

  const handleConfirm = () => {
    setSelectedEmployee();
  };

  return (
    <>
      <div className="finanzen-container">
        <div className="finanzen-content">
          <div className="row1">
            <div className="neueAusgabe">
              <label htmlFor="employee">Von</label>
              <label htmlFor="employee">Für</label>
              <select
                id="employee"
                value={selectedEmployee}
                onChange={handleEmployeeChange}
              >
                <option value="">Select</option>
                {employees.map((employee) => (
                  <option key={employee} value={employee}>
                    {employee}
                  </option>
                ))}
              </select>
              <label htmlFor="money-input">Betrag (€)</label>
              <input type="number" id="money-input" />
              <button onClick={handleConfirm}>Bestätigen</button>
            </div>
          </div>
          <div className="row2">
            <div className="letzteAktivitäten">500</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Finance;
