import { Link } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

function Login({ setIsLoggedIn, setToken }) {
  const [input, setInput] = useState({});

  function handleInputChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  function handleClick() {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    };

    fetch("/authenticate", options)
      .then((res) => {
        if (res.status == 200) {
          res.text().then((token) => {
            setToken(token);
            setIsLoggedIn(true);
          });
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <StyledForm>
        <label htmlFor="IBAN">IBAN:</label>
        <input type="text" name="IBAN" id="IBAN" onChange={handleInputChange} />
        <label htmlFor="PIN">PIN:</label>
        <input
          type="password"
          name="PIN"
          id="PIN"
          onChange={handleInputChange}
        />
        <Link to="/myaccount" onClick={handleClick}>
          Log In
        </Link>
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

export default Login;
