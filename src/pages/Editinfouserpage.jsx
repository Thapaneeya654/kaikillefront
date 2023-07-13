import { useState } from "react";
import Avatar from "../components/common/Avatar";
import Navigatepage from "../components/home/Navigatepage";
import { getAccessToken } from "../utils/localstorage";
import axios from "axios";

const initialValue = {
  firstName: "",
  lastName: "",
  email: "",
  Tel: "",
  workOrSchool: "",
};

function Editinfouser() {
  const [input, setInput] = useState(initialValue);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = getAccessToken();
      await axios.put("http://localhost:8888/auth/update", input, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex flex-row gap-2">
        <div className="card w-96 bg-base-100 shadow-xl ">
          <Avatar />
          <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
              <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
                I have nothing to prove to you.
              </label>
            </div>
            <Navigatepage />
          </div>
        </div>
        <div className="basis-full">
          <form className="flex flex-col w-full gap-2" onSubmit={handleSubmit}>
            <div className="h-20 card rounded-box text-align: center place-items-center flex items-start justify-center">
              <p>Edit your profile - It takes a miracle to find someplace.</p>
            </div>
            <div className="divider font-bold text-lg">
              <p>It takes a miracle to find someone.</p>
            </div>
            <div className="collapse bg-base-100 text-left">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-base-300 text-primary-content [input:checked~&]:bg-primary [input:checked~&]:text-grey font-bold">
                1.Firstname
              </div>
              <div className="collapse-content bg-base-300 text-primary-content [input:checked~&]:bg-base-300 [input:checked~&]:text-black">
                <input
                  type="text"
                  placeholder="Firstname"
                  className="input input-bordered input-accent w-full max-w-xs"
                  name="firstName"
                  value={input.firstName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="collapse bg-base-100 text-left">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-base-300 text-primary-content [input:checked~&]:bg-primary [input:checked~&]:text-grey font-bold">
                2.Lastname
              </div>
              <div className="collapse-content bg-base-300 text-primary-content [input:checked~&]:bg-base-300 [input:checked~&]:text-black">
                <input
                  type="text"
                  placeholder="Lastname"
                  className="input input-bordered input-accent w-full max-w-xs"
                  name="lastName"
                  value={input.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="collapse bg-base-100 text-left">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-base-300 text-primary-content [input:checked~&]:bg-primary [input:checked~&]:text-grey font-bold">
                3.Email Address
              </div>
              <div className="collapse-content bg-base-300 text-primary-content [input:checked~&]:bg-base-300 [input:checked~&]:text-black">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="input input-bordered input-accent w-full max-w-xs"
                  name="email"
                  value={input.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="collapse bg-base-100 text-left">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-base-300 text-primary-content [input:checked~&]:bg-primary [input:checked~&]:text-grey font-bold">
                4.Telephone
              </div>
              <div className="collapse-content bg-base-300 text-primary-content [input:checked~&]:bg-base-300 [input:checked~&]:text-black">
                <input
                  type="text"
                  placeholder="Telephone"
                  className="input input-bordered input-accent w-full max-w-xs"
                  name="Tel"
                  value={input.Tel}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="collapse bg-base-100 text-left">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-base-300 text-primary-content [input:checked~&]:bg-primary [input:checked~&]:text-grey font-bold">
                5.Work or School
              </div>
              <div className="collapse-content bg-base-300 text-primary-content [input:checked~&]:bg-base-300 [input:checked~&]:text-black">
                <input
                  type="text"
                  placeholder="Work or School"
                  className="input input-bordered input-accent w-full max-w-xs"
                  name="workOrSchool"
                  value={input.workOrSchool}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div class="h-24 grid grid-cols-2 gap-10 content-center">
              <button className="btn btn-neutral">Save</button>
              {/* <button className="btn btn-base-300">Cancle</button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Editinfouser;

{
  /* <div className="collapse bg-base-100 text-left">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-base-300 text-primary-content [input:checked~&]:bg-primary [input:checked~&]:text-grey font-bold">
                6.Persistent Identifier
              </div>
              <div className="collapse-content bg-base-300 text-primary-content [input:checked~&]:bg-base-300 [input:checked~&]:text-black">
                <input
                  type="text"
                  placeholder="Persistent Identifier"
                  className="input input-bordered input-accent w-full max-w-xs"
                />
              </div>
            </div>
            <div className="collapse bg-base-100 text-left">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-base-300 text-primary-content [input:checked~&]:bg-primary [input:checked~&]:text-grey font-bold">
                7.Password
              </div>
              <div className="collapse-content bg-base-300 text-primary-content [input:checked~&]:bg-base-300 [input:checked~&]:text-black">
                <div className="grid">
                  <input
                    type="password"
                    placeholder="Current Password"
                    className="input input-bordered input-accent w-full max-w-xs"
                  />
                  <input
                    type="password"
                    placeholder="New Password"
                    className="input input-bordered input-accent w-full max-w-xs"
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="input input-bordered input-accent w-full max-w-xs"
                  />
                </div>
              </div>
            </div> */
}
