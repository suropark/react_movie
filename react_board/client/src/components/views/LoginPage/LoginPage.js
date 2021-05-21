import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_action";
import { withRouter } from "react-router-dom";

function LoginPage(props) {
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordHander = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault(); // submit 할 때 page refresh 막기

    let body = {
      email: Email,
      password: Password,
    }; // 이 형태를 백엔드에 보내는 거임

    dispatch(loginUser(body)) // to action using redux-chunk
      .then((response) => {
        if (response.payload.loginSuccess) {
          props.history.push("/");
        } else {
          alert("Error");
        }
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHander} />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
}

export default withRouter(LoginPage);
