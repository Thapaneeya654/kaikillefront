import React, { useState } from "react";
import axios from "axios";
import { setAccessToken } from "../utils/localstorage";
import { useAuth } from "../contexts/auth-context";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [registerInput, setRegisterInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    Tel: "",
    workOrSchool: "",
    PID: "",
    password: "",
    confirmPassword: "",
  });

  const handleInput = (event) => {
    console.log(event);
    console.log(event.target.name);
    console.log(event.target.value);
    // setRegisterInput({
    // [event.target.name]: event.target.value
    // })
    // #1
    // const newInput  = {...registerInput}
    // newInput[event.target.name] = event.target.value
    // setRegisterInput(newInput)
    // #2
    setRegisterInput((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8888/auth/register",
        registerInput
      );
      console.log(response.data);
      setAccessToken(response.data.accessToken);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className=" w-[50%] h-full flex items-center justify-center ">
          <img
            src="/src/assets/logomain.png"
            alt="KAIKILLE"
            className="rounded-xl"
          />
        </div>
        <div className="card w-[50%]  bg-base-100 shadow-xl ">
          <form
            className="card-body items-center text-center"
            onSubmit={handleSubmit}
          >
            <h2 className="card-title normal-case">
              Create a Kaikille Account
            </h2>
            <p>It's a marathon, not a sprint.</p>
            <input
              type="text"
              placeholder="Firstname"
              className="input input-bordered input-accent w-full max-w-xs"
              name="firstName"
              value={registerInput.firstName}
              onChange={handleInput}
            />
            <input
              type="text"
              placeholder="Lastname"
              className="input input-bordered input-accent w-full max-w-xs"
              name="lastName"
              value={registerInput.lastName}
              onChange={handleInput}
            />
            <input
              type="email"
              placeholder="Email Address"
              className="input input-bordered input-accent w-full max-w-xs"
              name="email"
              value={registerInput.email}
              onChange={handleInput}
            />
            <input
              type="text"
              placeholder="Telephone"
              className="input input-bordered input-accent w-full max-w-xs"
              name="Tel"
              value={registerInput.Tel}
              onChange={handleInput}
            />
            <input
              type="text"
              placeholder="Work or School"
              className="input input-bordered input-accent w-full max-w-xs"
              name="workOrSchool"
              value={registerInput.workOrSchool}
              onChange={handleInput}
            />
            <input
              type="text"
              placeholder="Persistent Identifier"
              className="input input-bordered input-accent w-full max-w-xs"
              name="PID"
              value={registerInput.PID}
              onChange={handleInput}
            />
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered input-accent w-full max-w-xs"
              name="password"
              value={registerInput.password}
              onChange={handleInput}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered input-accent w-full max-w-xs"
              name="confirmPassword"
              value={registerInput.confirmPassword}
              onChange={handleInput}
            />
            <div className="card-actions">
              <button className="btn capitalize btn-neutral">
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
