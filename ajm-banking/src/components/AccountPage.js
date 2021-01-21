import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const AccountPage = (token, setToken) => {
  const [balance, setBalance] = useState(0);
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  let balanceFloat;

  useEffect(fetchBalance, []);

  function fetchBalance() {
    if (!token) {
      setToken(localStorage.getItem("token")); //CHANGE IN PRODUCTION
    }
    fetch("http://localhost:3552/balance", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `token=${token.token}`,
    })
      .then((data) => data.text())
      .then((info) => {
        balanceFloat = parseFloat(info).toFixed(2);
        setBalance(balanceFloat);
        localStorage.setItem("token", token.token); //CHANGE IN PRODUCTION
        return info;
      })
      .then((newBalance) => {})
      .catch((err) => console.error(err));
  }

  function handleChange(e) {
    if (e.target.name === "deposit-amount") {
      setDepositAmount(e.target.value);
    } else {
      setWithdrawalAmount(e.target.value);
    }
  }

  function handleDeposit(e) {
    if (isNaN(parseInt(depositAmount))) {
      return;
    }
    fetch("http://localhost:3552/deposit", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `token=${token.token}&amount=${depositAmount}`,
    }).then((data) => {
      setDepositAmount("");
      fetchBalance();
    });
  }

  function handleWithdrawal(e) {
    fetch("http://localhost:3552/withdraw", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `token=${token.token}&amount=${withdrawalAmount}`,
    }).then((data) => {
      setWithdrawalAmount("");
      fetchBalance();
    });
  }

  return (
    <StyledAccountPage>
      <h2>Your balance is: ${balance}</h2>
      <UserActionsContainer>
        <ActionContainer>
          <h3>Deposit</h3>

          <label for="deposit-amount">Amount:</label>
          <input
            type="number"
            name="deposit-amount"
            id="deposit-amount"
            onChange={handleChange}
            value={depositAmount}
          />

          <button onClick={handleDeposit}>Deposit</button>
        </ActionContainer>
        <ActionContainer>
          <h3>Withdrawal</h3>

          <label for="withdrawal-amount">Amount:</label>
          <input
            type="number"
            name="withdrawal-amount"
            id="withdrawal-amount"
            value={withdrawalAmount}
            onChange={handleChange}
          />

          <button
            onClick={handleWithdrawal}
            disabled={+balance > withdrawalAmount ? "" : "true"}
          >
            {+balance > withdrawalAmount ? "Withdraw" : "Amount Too High"}
          </button>
        </ActionContainer>
      </UserActionsContainer>
    </StyledAccountPage>
  );
};

const StyledAccountPage = styled.main`
  color: black;
  padding-top: 100px;
  padding-left: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 130px);
  width: calc(100vw - 200px);
  max-width: 100%;
  position: absolute;
  top: 0;
  z-index: 0;
`;

const UserActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  input,
  button {
    margin: 5px;
  }
`;

export default AccountPage;
