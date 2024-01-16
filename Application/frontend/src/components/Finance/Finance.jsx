import React, { useState, useEffect } from "react";
import "./Finance.css";
import { useContext } from "react";
import { useFinanceContext } from "../../hooks/useFinanceContext";
import { useKeycloak } from "@react-keycloak/web";

const Finance = ({ isAdmin, finances }) => {
  const Gesendet = "Geld Gesendet";
  const Erhalten = "Geld Erhalten";

  const { keycloak, initialized } = useKeycloak();
  const { finance, addFinance, updateBalance, addActivities } =
    useFinanceContext();
  const [selectedAccount, setSelectedAccount] = useState(0);
  const [selectedAccount2, setSelectedAccount2] = useState(0);
  let username = "";
  if (initialized && keycloak.authenticated) {
    username = keycloak.tokenParsed.preferred_username;
  }
  const [amount, setAmount] = useState("");
  const [amount2, setAmount2] = useState("");
  const [remark, setRemark] = useState("");
  const [remark2, setRemark2] = useState("");
  const [showDetails, setShowDetails] = useState(false);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };
  const handleAmountChange2 = (e) => {
    setAmount2(e.target.value);
  };

  useEffect(() => {
    console.log(selectedAccount);
  }, []);

  const handleTransfer = (amount) => {
    if (finance) {
      let localSelectedUser = finance[selectedAccount].userInfo.userName;

      finance.map((fin) => {
        if (fin.userInfo.userName === username) {
          let newBalance =
            parseFloat(fin.userInfo.balance.$numberDecimal) -
            parseFloat(amount);

          updateBalance(username, newBalance);
          addActivities(
            username,
            remark,
            amount,
            "-",
            localSelectedUser,
            username
          );
        }

        if (fin.userInfo.userName === localSelectedUser) {
          let newBalance =
            parseFloat(fin.userInfo.balance.$numberDecimal) +
            parseFloat(amount);

          updateBalance(localSelectedUser, newBalance);
          addActivities(
            localSelectedUser,
            remark,
            amount,
            "+",
            username,
            localSelectedUser
          );
        }
      });

      setAmount("");
      setRemark("");
      setShowDetails(true);
    }
  };

  const handleSendMoney = (amount2) => {
    if (finance) {
      let localSelectedUser = finance[selectedAccount2].userInfo.userName;

      finance.map((fin) => {
        if (fin.userInfo.userName === localSelectedUser) {
          let newBalance =
            parseFloat(fin.userInfo.balance.$numberDecimal) +
            parseFloat(amount2);
          updateBalance(localSelectedUser, newBalance);
          addActivities(
            username,
            remark2,
            amount2,
            "aktualisiert",
            localSelectedUser,
            "admin"
          );
          addActivities(
            localSelectedUser,
            remark2,
            amount2,
            "+",
            "admin",
            localSelectedUser
          );
        }
      });

      setAmount2("");
      setRemark2("");
      setShowDetails(true);
    }
  };
  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "long" };
    return new Date(dateString).toLocaleDateString("de-DE", options);
  };

  var firstName = "Max";
  var lastName = "Musterrmann";
  if (initialized && keycloak.authenticated) {
    firstName = keycloak.tokenParsed.given_name;
    lastName = keycloak.tokenParsed.family_name;

    var isAdmin = keycloak.tokenParsed.realm_access.roles.includes("admin");
  }

  useEffect(() => {
    if (initialized && keycloak.authenticated) {
      const username = keycloak.tokenParsed.preferred_username;
      const firstName = keycloak.tokenParsed.given_name;
      const lastName = keycloak.tokenParsed.family_name;
      if (finance) {
        const userExists = finance.some(
          (fin) => fin.userInfo.userName === username
        );

        if (!userExists) {
          addFinance(username, firstName, lastName);
          console.log("user Created with the name: ", username);
        }
      }
    }
  }, [initialized, keycloak.authenticated, finances, addFinance]);

  return (
    <div className="finance-container">
      <div className="finance-content">
        {isAdmin ? (
          <>
            <div className="finance-outlay">
              <h1 className="finance-font">Neue Ausgabe</h1>
              <div className="outlay-content">
                <div className="finance-employee">
                  <div className="employee-text">An</div>

                  <select
                    className="employee-dropdown"
                    value={selectedAccount}
                    onChange={(e) => setSelectedAccount(e.target.value)}
                  >
                    {finance?.map((fin, index) => (
                      <option key={index + 1} value={index}>
                        {fin.userInfo.firstName} {fin.userInfo.lastName}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="finance-credit">
                  <div className="credit-text">Betrag in €</div>
                  <input
                    className="credit-input"
                    type="text"
                    id="amount"
                    value={amount}
                    onChange={handleAmountChange}
                    placeholder="Betrag eingeben..."
                  />
                </div>
                <div className="finance-note">
                  <div className="note-text">Anmerkung</div>
                  <input
                    className="note-input"
                    type="text"
                    value={remark}
                    onChange={(e) => setRemark(e.target.value)}
                    placeholder="Eintragen..."
                  ></input>
                </div>
                <button
                  className="finance-button"
                  onClick={() => handleTransfer(amount)}
                >
                  Bestätigen
                </button>
              </div>
            </div>

            <div className="finance-balance">
              <h1 className="finance-font">Guthaben aktualisieren</h1>
              <div className="balance-content">
                <div className="finance-employee">
                  <div className="employee-text">An</div>
                  <select
                    className="employee-dropdown"
                    value={selectedAccount2}
                    onChange={(e) => setSelectedAccount2(e.target.value)}
                  >
                    {finance?.map((fin, index) => (
                      <option key={index} value={index}>
                        {fin.userInfo.firstName} {fin.userInfo.lastName}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="finance-credit">
                  <div className="credit-text">Betrag in €</div>
                  <input
                    className="credit-input"
                    type="text"
                    id="amount"
                    value={amount2}
                    onChange={handleAmountChange2}
                    placeholder="Betrag eingeben..."
                  />
                </div>
                <div className="finance-note">
                  <div className="note-text">Anmerkung</div>

                  <input
                    className="note-input"
                    type="text"
                    value={remark2}
                    onChange={(e) => setRemark2(e.target.value)}
                    placeholder="Eintragen..."
                  ></input>
                </div>

                <button
                  className="finance-button"
                  onClick={() => handleSendMoney(amount2)}
                >
                  Bestätigen
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="finance-outlay">
            <h1 className="finance-font">Neue Ausgabe</h1>
            <div className="balance-content">
              <div className="finance-employee">
                <div className="employee-text">An</div>
                <select
                  value={selectedAccount}
                  onChange={(e) => setSelectedAccount(e.target.value)}
                  label="Mitarbeiter auswählen"
                >
                  {finance?.map((fin, index) => (
                    <option key={index + 1} value={index}>
                      {fin.userInfo.firstName} {fin.userInfo.lastName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="finance-credit">
                <div className="credit-text">Betrag in €</div>

                <input
                  className="credit-input"
                  type="text"
                  id="amount"
                  value={amount}
                  onChange={handleAmountChange}
                  placeholder="Betrag eingeben..."
                />
              </div>
              <div className="finance-note">
                <div className="note-text">Anmerkung</div>

                <input
                  className="note-input"
                  type="text"
                  value={remark}
                  onChange={(e) => setRemark(e.target.value)}
                  placeholder="Eintragen..."
                ></input>
              </div>

              <button
                className="finance-button"
                onClick={() => handleTransfer(amount)}
              >
                Bestätigen
              </button>
            </div>
          </div>
        )}

        <div className="finance-activities">
          <h1 className="finance-font">Letzte Aktivitäten</h1>
          <div className="activities-content">
            {finance &&
              finance.map((fin) => {
                if (fin.userInfo.userName === username) {
                  return fin.userInfo.activities
                    .slice(-5)
                    .reverse()
                    .map((act, index) => (
                      <div className="finance-activity" key={index}>
                        <div className="activity-name">
                          {act.sendTo}
                          <div className="activity-date">
                            {formatDate(act.date)}
                          </div>
                        </div>
                        <div className="activity-note">
                          <div className="activity-note-input">
                            {act.description}
                          </div>
                        </div>
                        <div className="activity-amount">
                          {act.amount.toFixed(2)} €
                          <div className="activity-description">
                            {act.sign !== "+" && act.sign !== "-"
                              ? "Guthaben aktualisiert"
                              : act.sign}
                            {act.sign === "+" && Erhalten}
                            {act.sign === "-" && Gesendet}
                          </div>
                        </div>
                      </div>
                    ));
                }
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finance;
