import React, { useState } from "react";
import "./Finance.css";
import { useKeycloak } from "@react-keycloak/web";

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
  };

  if (initialized && keycloak.authenticated) {
    var isAdmin = keycloak.tokenParsed.realm_access.roles.includes("admin");
    console.log(isAdmin);

    console.log(keycloak.token);
    console.log(keycloak.tokenParsed);
  }
  console.log(accounts, note);
  return (
    <>
      <div className="finanzen-container">
        <div className="finanzen-content">
          <h1>Neue Ausgabe</h1>
          <div className="finanzen-box1">
            <div className="finanzen-row1">
              <div className="finanzen-mitarbeiter">An</div>
              <div className="finanzen-dropdownMenu">
                <select
                  className="dropdown"
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
            <div className="finanzen-row2">
              <div className="finanzen-betrag">Betrag in €</div>
              <div className="finanzen-textfeld">
                {isAdmin ? (
                  <div className="x">
                    <br />
                    <input
                      className="eingabe"
                      type="number"
                      value={amount}
                      onChange={handleAmountChange}
                      placeholder="Betrag eingeben..."
                    />
                  </div>
                ) : (
                  <div>
                    <input
                      className="eingabe"
                      type="text"
                      id="amount"
                      value={amount}
                      onChange={handleAmountChange}
                      placeholder="Eintragen..."
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="finanzen-row3">
              <div className="finanzen-anmerkung">Anmerkung</div>
              <div className="finanzen-texteingabe">
                {/*onSubmit hinzufügen zu form */}
                <input
                  className="feld"
                  type="text"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Eintragen..."
                ></input>
              </div>
            </div>
            <div className="finanzen-row4">
              <button className="finanzen-button" onClick={handleSendMoney}>
                Bestätigen
              </button>
            </div>
          </div>
          <h1>Letzte Aktivitäten</h1>
          <div className="finanzen-box2">
            <div className="y">
              {amount}
              {note}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Finance;
