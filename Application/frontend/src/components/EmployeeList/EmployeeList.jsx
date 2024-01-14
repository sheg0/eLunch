import React, { useState, useEffect } from "react";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Lade Daten von der Datenbank beim Mounten der Komponente
    const fetchEmployees = async () => {
      try {
        const response = await fetch("/api/employees"); // Passe die API-Route an
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error("Fehler beim Laden der Mitarbeiterdaten:", error.message);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div>
      <h2>Mitarbeiterliste</h2>
      <table>
        <thead>
          <tr>
            <th>Benutzername</th>
            <th>Vorname</th>
            <th>Nachname</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.userInfo.userName}</td>
              <td>{employee.userInfo.firstName}</td>
              <td>{employee.userInfo.lastName}</td>
              <td>{employee.userInfo.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
