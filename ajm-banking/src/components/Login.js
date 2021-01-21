import { Link } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

function Login({ isLoggedIn, setIsLoggedIn, setToken }) {
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

    fetch("http://localhost:3552/authenticate", options)
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
      </StyledForm>

      <Link to="/myaccount" onClick={handleClick}>
        Log In
      </Link>
    </div>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  label,
  input {
    margin: 5px;
  }
  margin: 10px;
`;

export default Login;
