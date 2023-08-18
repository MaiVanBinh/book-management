import { useState } from "react";
import { styled } from "styled-components";

const Container = styled("div")`
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }

  button {
    background-color: #04aa6d;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
  }

  button:hover {
    opacity: 0.8;
  }

  .cancelbtn {
    width: auto;
    padding: 10px 18px;
    background-color: #f44336;
  }

  .imgcontainer {
    text-align: center;
    margin: 24px 0 12px 0;
    position: relative;
  }

  img.avatar {
    width: 40%;
    border-radius: 50%;
  }

  .container {
    padding: 16px;
  }

  span.psw {
    float: right;
    padding-top: 16px;
  }

  .modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
    padding-top: 60px;
  }

  .modal-content {
    background-color: #fefefe;
    margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */
  }
`;

const Login = () => {
  const [authData, setAuthData] = useState({
    username: {
      value: "",
      isError: false,
      errMessage: "Tên đăng nhập cần ít nhất 1 ký tự",
    },
    password: {
      value: "",
      isError: false,
      errMessage: "Mật khẩu cần ít nhất 1 ký tự",
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const username = data.get("username");
    const password = data.get("password");
    if (username !== "" && password !== "") {
      localStorage.setItem('token', 'token_value');
      window.location.href = "/"

      // dispatch(
      //   login({
      //     username: data.get("username"),
      //     password: data.get("password"),
      //   })
      // );
    }
  };

  const onChangeInputHandler = (event) => {
    const { name, value } = event.target;
    const newAuthData = {
      ...authData,
      [name]: {
        ...authData[name],
        value: value,
      },
    };
    setAuthData(newAuthData);
  };

  const checkAuthDataValid = (event) => {
    const { name, value } = event.target;
    if (value === "") {
      const newAuthData = {
        ...authData,
        [name]: {
          ...authData[name],
          isError: true,
        },
      };
      setAuthData(newAuthData);
    }
  };

  const onFocusHandler = (event) => {
    const { name } = event.target;
    const newAuthData = {
      ...authData,
      [name]: {
        ...authData[name],
        isError: false,
      },
    };
    setAuthData(newAuthData);
  };

  return (
    <Container className="modal">
      <form
        className="modal-content animate"
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="container">
          <label htmlFor="username">
            <b>Tên đăng nhập</b>
          </label>
          <input
            type="text"
            placeholder="Nhập tên đăng nhập"
            name="username"
            required
            onInvalid={(e) =>
              e.target.setCustomValidity("Tên đăng nhập cần ít nhất 1 ký tự")
            }
            onInput={(F) => F.target.setCustomValidity("")}
          />

          <label htmlFor="password">
            <b>Mật khẩu</b>
          </label>
          <input
            type="password"
            placeholder="Nhập mật khẩu"
            name="password"
            required
            onInvalid={(e) =>
              e.target.setCustomValidity("Mật khẩu cần ít nhất 1 ký tự")
            }
            onInput={(F) => F.target.setCustomValidity("")}
          />

          <button type="submit">Đăng nhập</button>
        </div>
      </form>
    </Container>
  );
};

export default Login;
