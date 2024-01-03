import React, { useState } from "react";
import "./Finance.css";
import { useKeycloak } from "@react-keycloak/web";

const Finance = () => {
  const [accounts, setAccounts] = useState([
    { name: "Vivian", balance: 511.86 },
    { name: "Imran", balance: 465.99 },
    { name: "Esra", balance: 3.59 },
    { name: "Kaan", balance: 1598.78 },
    { name: "Selim", balance: 50.69 },
  ]);

  const [selectedAccount, setSelectedAccount] = useState(accounts[0]);
  const [amount, setAmount] = useState("");

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
          balance: account.balance - parseInt(amount),
        };
      }
      return account;
    });

    setAccounts(updatedAccounts);
    setAmount("");
  };

  console.log(accounts);

  return (
    <>
      <div className="finanzen-container">
        <div className="finanzen-content">
          <div className="row1">
            <div className="neueAusgabe">
              <label htmlFor="employee">Für</label>
              <select
                value={accounts.indexOf(selectedAccount)}
                onChange={handleAccountChange}
              >
                {accounts.map((account, index) => (
                  <option key={index} value={index}>
                    {account.name}
                  </option>
                ))}
              </select>

              <label htmlFor="money-input">Betrag (€)</label>
              <input type="text" value={amount} onChange={handleAmountChange} />
              <button onClick={handleSendMoney}>Send</button>
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
export { handleSendMoney, accounts };
