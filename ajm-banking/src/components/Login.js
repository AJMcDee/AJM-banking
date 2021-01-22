import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useState } from "react";

function Login({ setIsLoggedIn, setToken }) {
  const [loginDetails, setLoginDetails] = useState({});
  const [failAttempts, setFailAttempts] = useState(0);

  const history = useHistory();
  function handleInputChange(e) {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  }

  function handleLogin() {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginDetails),
    };

    fetch("/authenticate", options)
      .then((res) => {
        if (res.status == 200) {
          res.text().then((token) => {
            setToken(token);
            setIsLoggedIn(true);
          });
        } else {
          throw new Error("Authentication Failed");
        }
      })
      .then(() => {
        history.push("/myaccount");
      })
      .catch((err) => {
        setFailAttempts(failAttempts + 1);
        console.log(err);
      });
  }

  return (
    <div>
      <StyledForm>
        <label htmlFor="IBAN">IBAN:</label>
        <input
          type="text"
          name="IBAN"
          id="IBAN"
          onChange={handleInputChange}
          value={loginDetails.IBAN}
        />
        <label htmlFor="PIN">PIN:</label>
        <input
          type="password"
          name="PIN"
          id="PIN"
          onChange={handleInputChange}
          value={loginDetails.PIN}
        />
        <a onClick={handleLogin}>Log In</a>
        <FailMessage>
          {failAttempts > 0 && failAttempts < 3
            ? "Login failed. Please check your credentials and try again."
            : failAttempts >= 3
            ? "Have you tried 'DE123456' with password '123456'?"
            : null}
        </FailMessage>
      </StyledForm>
    </div>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  input {
    margin: 10px 0;
  }
  margin: 10px;
`;

const FailMessage = styled.p`
  color: black;
  font-size: 0.8em;
  text-align: center;
`;

export default Login;
