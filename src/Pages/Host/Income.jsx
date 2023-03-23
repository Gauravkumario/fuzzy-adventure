import React from "react";
import Graph from "../../assets/images/graph.png";

const Income = () => {
  const transactionsData = [
    { amount: 720, date: "Jan 3, '23", id: "1" },
    { amount: 560, date: "Dec 12, '22", id: "2" },
    { amount: 980, date: "Dec 3, '22", id: "3" },
  ];
  return (
    <div>
      <div>
        <div className="host-income-top-section">
          <div className="host-dashboard-welcome-child">
            <h1 className="host-welcome-text">Income!</h1>
            <h2 className="host-welcome-income-summary">
              Last <span className="income-days">30 days</span>
            </h2>
            <h2 className="host-welcome-price">$2,260</h2>
          </div>
          <img className="graph" src={Graph} alt="graph" />
          <div className="host-income-transaction-section">
            <span className="host-dashboard-van-text">
              Your transactions (30)
            </span>
            <span>
              Last <span className="income-days">30 days</span>
            </span>
          </div>
          <div>
            {transactionsData.map((item) => (
              <div key={item.id} className="transactionData">
                <span className="amount">${item.amount}</span>
                <span className="date">{item.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Income;
