import { useEffect, useState } from "react";
import styled from "styled-components";

const AccountPage = ({ token, setImageIndex }) => {
  const [balance, setBalance] = useState(0);
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");

  let balanceFloat;
  useEffect(() => {
    setImageIndex(2);
  }, []);
  useEffect(fetchBalance, [token]);

  function fetchBalance() {
    fetch("http://localhost:3552/balance", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `token=${token}`,
    })
      .then((data) => data.text())
      .then((info) => {
        if (info.length > 3) {
          let formatThousands = info
            .split("")
            .map((num, index) => {
              if (index % info.length === info.length - 3) {
                return `,${num}`;
              } else {
                return num;
              }
            })
            .join("");
        }
        balanceFloat = parseFloat(info).toFixed(2);
        setBalance(balanceFloat);
        localStorage.setItem("token", token); //CHANGE IN PRODUCTION
        return balanceFloat;
      })
      .then((newBalance) => {
        console.log(newBalance);
      })
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
      body: `token=${token}&amount=${depositAmount}`,
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
      body: `token=${token}&amount=${withdrawalAmount}`,
    }).then((data) => {
      setWithdrawalAmount("");
      fetchBalance();
    });
  }

  return (
    <StyledAccountPage>
      <AccountPageMain>
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
      </AccountPageMain>
    </StyledAccountPage>
  );
};

const StyledAccountPage = styled.main`
  grid-area: main;
  color: black;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;

  max-width: 100%;

  /* background: rgba(255, 255, 255, 0.6);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(17.5px);
  -webkit-backdrop-filter: blur(17.5px); */
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

const AccountPageMain = styled.main`
  text-align: center;
  color: black;
`;
export default AccountPage;
