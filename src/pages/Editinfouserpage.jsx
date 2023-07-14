import { useState } from "react";
import Avatar from "../components/common/Avatar";
import Navigatepage from "../components/home/Navigatepage";
import { getAccessToken } from "../utils/localstorage";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Editinfouser() {
  const navigate = useNavigate();
  //const { user } = useAuth();

  const { fetchMe, user } = useAuth();

  const initialValue = {
    firstName: user?.firstName ? user.firstName : "",
    lastName: user?.lastName ? user.lastName : "",
    //email: "",
    Tel: user?.Tel ? user.Tel : "",
    //workOrSchool: "",
  };
  const [input, setInput] = useState(initialValue);

  const handleChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    // setInput({ ...input, [e.target.name]: e.target.value });
    fetchMe();
    console.log(input);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = getAccessToken();
      await axios.put("http://localhost:8888/auth/update", input, {
        headers: { Authorization: `Bearer ${token}` },
      });
      navigate("/homepage");
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
              <div className="collapse-title bg-base-300 text-black [input:checked~&]:bg-primary [input:checked~&]:text-grey font-bold">
                1.Firstname
              </div>
              <div className="collapse-content bg-base-300 text-primary-content [input:checked~&]:bg-base-300 [input:checked~&]:text-black">
                <input
                  type="text"
                  placeholder="Firstname"
                  className="input input-bordered input-accent w-full max-w-xs"
                  name="firstName"
                  value={input.firstName}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <div className="collapse bg-base-100 text-left">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-base-300 text-black [input:checked~&]:bg-primary [input:checked~&]:text-grey font-bold">
                2.Lastname
              </div>
              <div className="collapse-content bg-base-300 text-primary-content [input:checked~&]:bg-base-300 [input:checked~&]:text-black">
                <input
                  type="text"
                  placeholder="Lastname"
                  className="input input-bordered input-accent w-full max-w-xs"
                  name="lastName"
                  value={input.lastName}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            {/* <div className="collapse bg-base-100 text-left">
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
            </div> */}
            <div className="collapse bg-base-100 text-left">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-base-300 text-black [input:checked~&]:bg-primary [input:checked~&]:text-grey font-bold">
                3.Telephone
              </div>
              <div className="collapse-content bg-base-300 text-primary-content [input:checked~&]:bg-base-300 [input:checked~&]:text-black">
                <input
                  type="text"
                  placeholder="Telephone"
                  className="input input-bordered input-accent w-full max-w-xs"
                  name="Tel"
                  value={input.Tel}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            {/* <div className="collapse bg-base-100 text-left">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-base-300 text-black [input:checked~&]:bg-primary [input:checked~&]:text-grey font-bold">
                4.Work or School
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
            </div> */}
            <div class="h-24 grid grid-cols-2 gap-10 content-center">
              <button className="btn btn-neutral">Save</button>
              <Link to={"/homepage"} className="btn btn-base-300">
                Cancle
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Editinfouser;
