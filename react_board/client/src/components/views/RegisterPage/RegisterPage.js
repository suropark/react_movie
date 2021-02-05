import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../_actions/user_action";
import { reactRouter, withRouter } from "react-router-dom";
function RegisterPage(props) {
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [isMatched, setisMatched] = useState(true);

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onConfimrPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault(); // submit 할 때 page refresh 막기

    if (Password !== ConfirmPassword) {
      setisMatched(false);
      return ;
    } else {
      setisMatched(true);
    }

    let body = {
      email: Email,
      password: Password,
      name: Name,
    }; // 이 형태를 백엔드에 보내는 거임

    dispatch(registerUser(body)) // to action
      .then((response) => {
        if (response.payload.success) {
          props.history.push("/login");
        } else {
          console.log(response);
          alert("에러1")
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
        <label>Name</label>
        <input type="text" value={Name} onChange={onNameHandler} />
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />
        <label>Confirm Password</label>
        <input
          type="password"
          value={ConfirmPassword}
          onChange={onConfimrPasswordHandler}
        />
        <br />
        {isMatched ? <h4>일치</h4> : <h4>불일치</h4>}
        <button>회원 가입</button>
      </form>
    </div>
  );
}

export default withRouter(RegisterPage);
