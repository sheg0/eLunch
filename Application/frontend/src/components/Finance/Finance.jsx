import React, { useState, useEffect } from "react";
import "./Finance.css";
import { useContext } from "react";
import { useFinanceContext } from "../../hooks/useFinanceContext";
import { useKeycloak } from "@react-keycloak/web";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Profile } from "../Profile/Profile.jsx";

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
  const [amount, setAmount] = useState("");
  const [amount2, setAmount2] = useState("");
  const [remark, setRemark] = useState("");
  const [remark2, setRemark2] = useState("");
  const [showDetails, setShowDetails] = useState(false);

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
  const handleTransfer = async (username, selectedAccount, amount) => {
    finance.map((fin) => {
      if (fin.userInfo.userName === username) {
        let newBalance =
          parseInt(fin.userInfo.balance.$numberDecimal) - parseInt(amount);
        updateBalance(username, newBalance);
      }
      if (fin.userInfo.userName === selectedAccount) {
        let newBalance =
          parseInt(fin.userInfo.balance.$numberDecimal) + parseInt(amount);
        updateBalance(selectedAccount, newBalance);
      }
    });

    setAmount("");
    setRemark("");
    setShowDetails(true);
  };

  // GUTHABEN AKTUALISIREN
  const handleSendMoney = (amount2) => {
    finance.map((fin) => {
      if (fin.userInfo.userName === selectedAccount2) {
        let newBalance =
          parseInt(fin.userInfo.balance.$numberDecimal) + parseInt(amount2);
        updateBalance(selectedAccount2, newBalance);
      }
    });

    setAmount2("");
    setRemark2("");
    setShowDetails(true);
  };

  const addActivites = async () => {
    console.log({
      account: selectedAccount,
      amount: parseInt(amount),
      remark: remark2,
      timestamp: new Date().toLocaleString(),
    });
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
                    <Select
                      value={selectedAccount}
                      onChange={handleAccountChange}
                      label="Mitarbeiter auswählen"
                    >
                      {finance.map((fin, index) => (
                        <MenuItem key={index + 1} value={index}>
                          {fin.userInfo.firstName}
                        </MenuItem>
                      ))}
                    </Select>
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
                    onClick={() => handleTransfer(amount)}
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
                    <Select
                      value={selectedAccount2}
                      onChange={handleAccountChange2}
                      label="Mitarbeiter auswählen"
                    >
                      {finance.map((fin, index) => (
                        <MenuItem key={index} value={index}>
                          {fin.userInfo.firstName}
                        </MenuItem>
                      ))}
                    </Select>
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
                    ></input>
                  </div>
                </div>
                <div className="finance-row4">
                  <button
                    className="finance-confirm"
                    onClick={() => handleSendMoney(amount2, remark2)}
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
                    <Select
                      value={selectedAccount}
                      onChange={handleAccountChange}
                      label="Mitarbeiter auswählen"
                    >
                      {finance.map((fin, index) => (
                        <MenuItem key={index + 1} value={index}>
                          {fin.userInfo.firstName}
                        </MenuItem>
                      ))}
                    </Select>
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
                    onClick={() => handleTransfer(amount)}
                  >
                    Bestätigen
                  </button>
                </div>
              </div>
            </>
          )}
          <h1>Letzte Aktivitäten</h1>
          <div className="finance-box3">
            <div className="finance-lastActivities">
              <div className="name">{selectedAccount}</div>
              <div className="finance-activity-remark">{remark}</div>
              <div className="finance-activity-amount">{amount} €</div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Finance;
