import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { setAccessToken } from "../utils/localstorage";
import { useAuth } from "../contexts/auth-context";

function Login() {
  const navigate = useNavigate();
  const { user, fetchMe } = useAuth();

  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });
  const [token, setToken] = useState();
  const handleLogin = (event) => {
    console.log(event);
    console.log(event.target.name);
    console.log(event.target.value);
    setLoginInput((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8888/auth/login",
        loginInput
      );
      setToken(response?.data?.accessToken);
      console.log(response?.data?.accessToken);
      setAccessToken(response?.data?.accessToken);
      await fetchMe();
      // localStorage.setItem("accessToken", response.data.accessToken);
      navigate("/homepage");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="card w-96 bg-base-100 shadow-xl ">
          <figure className="px-14 pt-14">
            <img
              src="/src/assets/logomain.png"
              alt="KAIKILLE"
              className="rounded-xl"
            />
          </figure>
          <form onSubmit={handleSubmit}>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Welcome to Kaikille</h2>
              <p>It's a marathon, not a sprint.</p>
              <input
                type="email"
                placeholder="Email Address"
                className="input input-bordered input-primary w-full max-w-xs"
                name="email"
                value={loginInput.email}
                onChange={handleLogin}
              />
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered input-primary w-full max-w-xs"
                name="password"
                value={loginInput.password}
                onChange={handleLogin}
              />
              <div className="card-actions">
                <button className="btn capitalize btn-primary text-warning">
                  Sign In
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
