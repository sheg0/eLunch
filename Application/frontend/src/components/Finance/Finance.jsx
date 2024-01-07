import React, { useState } from "react";
import "./Finance.css";
import { useKeycloak } from "@react-keycloak/web";

import { IoMdInformationCircle } from "react-icons/io";

const Finance = ({ isAdmin }) => {
  const [accounts, setAccounts] = useState([
    { name: "Vivian", balance: 100 },
    { name: "Imran", balance: 100 },
    { name: "Esra", balance: 100.5 },
    { name: "Kaan", balance: 100.5 },
    { name: "Selim", balance: 0 },
  ]);

  const { keycloak, initialized } = useKeycloak();
  const [selectedAccount, setSelectedAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleAccountChange = (e) => {
    const selectedAccountIndex = e.target.value;
    setSelectedAccount(accounts[selectedAccountIndex]);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSendMoney = () => {
    const updatedAccounts = accounts.map((account) => {
      if (account === selectedAccount) {
        return {
          ...account,
          balance: account.balance + parseInt(amount),
        };
      }
      return account;
    });

    setAccounts(updatedAccounts);
    setAmount("");
    setShowDetails(true);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  if (initialized && keycloak.authenticated) {
    var isAdmin = keycloak.tokenParsed.realm_access.roles.includes("admin");
    console.log(isAdmin);

    console.log(keycloak.token);
    console.log(keycloak.tokenParsed);
  }
  console.log(accounts, note);

  // noch hinzuzufügen ist das error handling!!!!!
  // onSubmit bei anmerkung und betrag noch machen!!!!

  return (
    <>
      <div className="finance-container">
        <div className="finance-content">
          <h1>Neue Ausgabe</h1>
          <div className="finance-box1">
            <div className="finance-row1">
              <div className="finance-employee">An</div>
              <div className="finance-employee-dropdownMenu">
                <select
                  className="employee-dropdown"
                  value={accounts.indexOf(selectedAccount)}
                  onChange={handleAccountChange}
                >
                  {accounts.map((account, index) => (
                    <option key={index + 1} value={index}>
                      {account.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="finance-row2">
              <div className="finance-balance">Betrag in €</div>
              <div className="finance-balance-numberfield">
                {isAdmin ? (
                  <div className="finance-numberfield">
                    <br />
                    <input
                      className="balance-input"
                      type="number"
                      value={amount}
                      onChange={handleAmountChange}
                      placeholder="Betrag eingeben..."
                    />
                  </div>
                ) : (
                  <div>
                    <input
                      className="balance-input"
                      type="text"
                      id="amount"
                      value={amount}
                      onChange={handleAmountChange}
                      placeholder="Betrag eingeben..."
                    />
                  </div>
                )}
                <div className="finance-balance-info" onClick={togglePopup}>
                  <IoMdInformationCircle></IoMdInformationCircle>
                </div>
                {showPopup && (
                  <div className="balance-popup">
                    Um an Mitarebiter Geld zu senden
                  </div>
                )}
              </div>
            </div>
            <div className="finance-row3">
              <div className="finance-remark">Anmerkung</div>
              <div className="finance-remark-textfield">
                <input
                  className="remark-textfield"
                  type="text"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Eintragen..."
                ></input>
              </div>
            </div>
            <div className="finance-row4">
              <button className="finance-confirm" onClick={handleSendMoney}>
                Bestätigen
              </button>
            </div>
          </div>
          <h1>Letzte Aktivitäten</h1>
          <div className="finance-box2">
            <div className="finance-lastActivities">
              {showDetails && (
                <div>
                  {amount}
                  {note}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Finance;
