import React, { useState, useEffect } from "react";
import "./Finance.css";
import { useFinanceContext } from "../../hooks/useFinanceContext";
import { useKeycloak } from "@react-keycloak/web";

const Finance = ({ isAdmin, finances }) => {
  const { keycloak, initialized } = useKeycloak();
  const { finance, addFinance, updateBalance, addActivities } =
    useFinanceContext();
  const [selectedAccount, setSelectedAccount] = useState(
    finance[0].userInfo.userName
  );
  const [selectedAccount2, setSelectedAccount2] = useState(
    finance[0].userInfo.userName
  );
  let username = "";
  if (initialized && keycloak.authenticated) {
    username = keycloak.tokenParsed.preferred_username;
  }
  const [amount, setAmount] = useState("");
  const [amount2, setAmount2] = useState("");
  const [remark, setRemark] = useState("");
  const [remark2, setRemark2] = useState("");

  const handleAccountChange = (e) => {
    const selectedAccountIndex = e.target.value;
    setSelectedAccount(finance[selectedAccountIndex].userInfo.userName);
  };
  const handleAccountChange2 = (e) => {
    const selectedAccountIndex2 = e.target.value;
    setSelectedAccount2(finance[selectedAccountIndex2].userInfo.userName);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };
  const handleAmountChange2 = (e) => {
    setAmount2(e.target.value);
  };

  // NEUE AUSGABE
  const handleTransfer = (amount) => {
    finance.map((fin) => {
      if (fin.userInfo.userName === username) {
        let newBalance =
          parseInt(fin.userInfo.balance.$numberDecimal) - parseInt(amount);
        updateBalance(username, newBalance);
        addActivities(username, remark, amount, selectedAccount, "me");
      }
      if (fin.userInfo.userName === selectedAccount) {
        let newBalance =
          parseInt(fin.userInfo.balance.$numberDecimal) + parseInt(amount);
        updateBalance(selectedAccount, newBalance);
        addActivities(selectedAccount, remark, amount, "me", username);
      }
    });

    setAmount("");
    setRemark("");
  };

  // GUTHABEN AKTUALISIREN
  const handleSendMoney = (amount2) => {
    finance.map((fin) => {
      if (fin.userInfo.userName === selectedAccount2) {
        let newBalance =
          parseInt(fin.userInfo.balance.$numberDecimal) + parseInt(amount2);
        updateBalance(selectedAccount2, newBalance);
        addActivities("", remark2, amount2, selectedAccount2, "");
      }
    });

    setAmount2("");
    setRemark2("");
  };

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "long" };
    return new Date(dateString).toLocaleDateString("de-DE", options);
  };

  const bestätigt = true;
  const handleConfirmation = (amount, remark, amount2, remark2) => {
    if (bestätigt) {
      handleTransfer(amount, remark);
    } else {
      handleSendMoney(amount2, remark2);
    }
  };

  var firstName = "Max";
  var lastName = "Musterrmann";
  if (initialized && keycloak.authenticated) {
    firstName = keycloak.tokenParsed.given_name;
    lastName = keycloak.tokenParsed.family_name;

    var isAdmin = keycloak.tokenParsed.realm_access.roles.includes("admin");
    console.log(isAdmin);

    console.log(keycloak.token);
    console.log(keycloak.tokenParsed);
  }

  useEffect(() => {
    if (initialized && keycloak.authenticated) {
      const username = keycloak.tokenParsed.preferred_username;
      const firstName = keycloak.tokenParsed.given_name;
      const lastName = keycloak.tokenParsed.family_name;

      const userExists = finance.some(
        (fin) => fin.userInfo.userName === username
      );

      if (!userExists) {
        addFinance(username, firstName, lastName);
        console.log("user Created with the name: ", username);
      }
    }
  }, [initialized, keycloak.authenticated, finances, addFinance]);

  // noch hinzuzufügen ist das error handling!!!!!

  return (
    <>
      <div className="finance-container">
        <div className="finance-content">
          {isAdmin ? (
            <>
              <h1>Neue Ausgabe</h1>
              <div className="finance-box1">
                <div className="finance-row1">
                  <div className="finance-employee">An</div>
                  <div className="finance-employee-dropdownMenu">
                    <select
                      value={selectedAccount}
                      onChange={handleAccountChange}
                    >
                      <option value="">Mitarbeiter auswählen</option>
                      {finance.map((fin, index) => (
                        <option key={index + 1} value={index}>
                          {fin.userInfo.firstName} {fin.userInfo.lastName}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="finance-row2">
                  <div className="finance-balance">Betrag in €</div>
                  <div className="finance-balance-numberfield">
                    <input
                      className="balance-input"
                      type="text"
                      id="amount"
                      value={amount}
                      onChange={handleAmountChange}
                      placeholder="Betrag eingeben..."
                    />
                  </div>
                </div>
                <div className="finance-row3">
                  <div className="finance-remark">Anmerkung</div>
                  <div className="finance-remark-textfield">
                    <input
                      className="remark-textfield"
                      type="text"
                      value={remark}
                      onChange={(e) => setRemark(e.target.value)}
                      placeholder="Eintragen..."
                    />
                  </div>
                </div>
                <div className="finance-row4">
                  <button
                    className="finance-confirm"
                    onClick={() => handleConfirmation(amount, remark)}
                  >
                    Bestätigen
                  </button>
                </div>
              </div>
              <h1>Guthaben aktualisieren</h1>
              <div className="finance-box2">
                <div className="finance-row1">
                  <div className="finance-employee">An</div>
                  <div className="finance-employee-dropdownMenu">
                    <select
                      label="Mitarbeiter auswählen"
                      value={selectedAccount2}
                      onChange={handleAccountChange2}
                    >
                      <option value="">Mitarbeiter auswählen</option>
                      {finance.map((fin, index) => (
                        <option key={index + 1} value={index}>
                          {fin.userInfo.firstName} {fin.userInfo.lastName}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="finance-row2">
                  <div className="finance-balance">Betrag in €</div>
                  <div className="finance-balance-numberfield">
                    <input
                      className="balance-input"
                      type="text"
                      id="amount"
                      value={amount2}
                      onChange={handleAmountChange2}
                      placeholder="Betrag eingeben..."
                    />
                  </div>
                </div>
                <div className="finance-row3">
                  <div className="finance-remark">Anmerkung</div>
                  <div className="finance-remark-textfield">
                    <input
                      className="remark-textfield"
                      type="text"
                      value={remark2}
                      onChange={(e) => setRemark2(e.target.value)}
                      placeholder="Eintragen..."
                    />
                  </div>
                </div>
                <div className="finance-row4">
                  <button
                    className="finance-confirm"
                    onClick={() => handleConfirmation(amount2, remark2)}
                  >
                    Bestätigen
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <h1>Neue Ausgabe</h1>
              <div className="finance-box1">
                <div className="finance-row1">
                  <div className="finance-employee">An</div>
                  <div className="finance-employee-dropdownMenu">
                    <select
                      value={selectedAccount}
                      onChange={handleAccountChange}
                    >
                      <option value="">Mitarbeiter auswählen</option>
                      {finance.map((fin, index) => (
                        <option key={index + 1} value={index}>
                          {fin.userInfo.firstName} {fin.userInfo.lastName}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="finance-row2">
                  <div className="finance-balance">Betrag in €</div>
                  <div className="finance-balance-numberfield">
                    <input
                      className="balance-input"
                      type="text"
                      id="amount"
                      value={amount}
                      onChange={handleAmountChange}
                      placeholder="Betrag eingeben..."
                    />
                  </div>
                </div>
                <div className="finance-row3">
                  <div className="finance-remark">Anmerkung</div>
                  <div className="finance-remark-textfield">
                    <input
                      className="remark-textfield"
                      type="text"
                      value={remark}
                      onChange={(e) => setRemark(e.target.value)}
                      placeholder="Eintragen..."
                    ></input>
                  </div>
                </div>
                <div className="finance-row4">
                  <button
                    className="finance-confirm"
                    onClick={() => handleConfirmation(amount, remark)}
                  >
                    Bestätigen
                  </button>
                </div>
              </div>
            </>
          )}
          <h1>Letzte Aktivitäten</h1>
          <div className="finance-box3">
            {console.log(username)}
            {finance &&
              finance.map((fin) => {
                if (fin.userInfo.userName === username) {
                  return fin.userInfo.activities
                    .slice(-5)
                    .reverse()
                    .map((act, index) => (
                      <div className="finance-lastActivities" key={index}>
                        <div className="lastActivities-name">
                          {act.sendTo}
                          <div className="lastActivities-date">
                            {formatDate(act.date)}
                          </div>
                        </div>
                        <div className="finance-activity-remark">
                          {act.description}
                        </div>
                        <div className="finance-activity-amount">
                          {bestätigt ? (
                            <>
                              {act.amount} €
                              <div className="amount-description">
                                Geld gesendet
                              </div>
                            </>
                          ) : (
                            <>
                              {act.amount2} €
                              <div className="amount-description">
                                Geld erhalten
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    ));
                }
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Finance;
