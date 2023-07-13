import React, { useState } from "react";
import Avatar from "../components/common/Avatar";
import Navigatepage from "../components/home/Navigatepage";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getAccessToken } from "../utils/localstorage";

function Addplace() {
  const navigate = useNavigate();
  const [addplaceInput, setAddplaceInput] = useState({
    namePlace: "",
    provincePlace: "",
    districtPlace: "",
    detailsPlace: "",
  });

  const handleInput = (event) => {
    console.log(event);
    console.log(event.target.name);
    console.log(event.target.value);
    setAddplaceInput((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = getAccessToken();
      const response = await axios.post(
        "http://localhost:8888/place",
        addplaceInput,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(response.data);
      navigate("/rankingplace");
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
          <div className="flex flex-col w-full gap-2">
            <div className="h-20 card rounded-box place-items-center flex items-start justify-center">
              HELLO Welcome to Create and share a list of places [Add Place]
            </div>
            <div className="divider font-bold text-lg">
              <p>It takes a miracle to find someplace.</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text"> </span>
                    <span className="label-text-alt"> </span>
                  </label>
                  <input
                    type="file"
                    className="file-input file-input-bordered w-full max-w-xs"
                  />
                  <label className="label">
                    <span className="label-text-alt"> </span>
                    <span className="label-text-alt"> </span>
                  </label>
                </div>
              </div>
              <div className="text-start flex flex-col w-full gap-2">
                <div>
                  <div className="collapse bg-base-100 text-left">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-base-300 text-primary-content [input:checked~&]:bg-base-600 [input:checked~&]:text-grey font-bold">
                      1.Name Place
                    </div>
                    <div className="collapse-content bg-base-300 text-primary-content [input:checked~&]:bg-base-200 [input:checked~&]:text-black">
                      <input
                        type="text"
                        placeholder="Name Place"
                        className="input input-bordered input-accent w-full max-w-xs"
                        name="namePlace"
                        value={addplaceInput.namePlace}
                        onChange={handleInput}
                      />
                    </div>
                  </div>
                  {/* <div
                    tabIndex={0}
                    className="collapse collapse-arrow border border-base-300 bg-base-200"
                  >
                    <div className="collapse-title font-medium">
                      1.Name Place
                    </div>
                    <div className="collapse-content">
                      <input
                        type="text"
                        placeholder="Name Place"
                        className="input input-bordered w-full max-w-xs"
                        name="namePlace"
                        value={addplaceInput.namePlace}
                        onChange={handleInput}
                      />
                    </div>
                  </div> */}
                </div>
                <div>
                  <div className="collapse bg-base-100 text-left">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-base-300 text-primary-content [input:checked~&]:bg-base-600 [input:checked~&]:text-grey font-bold">
                      2.Province Place
                    </div>
                    <div className="collapse-content bg-base-300 text-primary-content [input:checked~&]:bg-base-200 [input:checked~&]:text-black">
                      <input
                        type="text"
                        placeholder="Province Place"
                        className="input input-bordered input-accent w-full max-w-xs"
                        name="provincePlace"
                        value={addplaceInput.provincePlace}
                        onChange={handleInput}
                      />
                    </div>
                  </div>
                  {/* <div
                    tabIndex={0}
                    className="collapse collapse-arrow border border-base-300 bg-base-200"
                  >
                    <div className="collapse-title font-medium">
                      2.Province Place
                    </div>
                    <div className="collapse-content">
                      <input
                        type="text"
                        placeholder="Province Place"
                        className="input input-bordered w-full max-w-xs"
                        name="provincePlace"
                        value={addplaceInput.provincePlace}
                        onChange={handleInput}
                      />
                    </div>
                  </div> */}
                </div>
                <div>
                  <div className="collapse bg-base-100 text-left">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-base-300 text-primary-content [input:checked~&]:bg-base-600 [input:checked~&]:text-grey font-bold">
                      3.District Place
                    </div>
                    <div className="collapse-content bg-base-300 text-primary-content [input:checked~&]:bg-base-200 [input:checked~&]:text-black">
                      <input
                        type="text"
                        placeholder="District Place"
                        className="input input-bordered input-accent w-full max-w-xs"
                        name="districtPlace"
                        value={addplaceInput.districtPlace}
                        onChange={handleInput}
                      />
                    </div>
                  </div>
                  {/* <div
                    tabIndex={0}
                    className="collapse collapse-arrow border border-base-300 bg-base-200"
                  >
                    <div className="collapse-title font-medium">
                      3.District Place
                    </div>
                    <div className="collapse-content">
                      <input
                        type="text"
                        placeholder="District Place"
                        className="input input-bordered w-full max-w-xs"
                        name="districtPlace"
                        value={addplaceInput.districtPlace}
                        onChange={handleInput}
                      />
                    </div>
                  </div> */}
                </div>
                <div>
                  <div className="collapse bg-base-100 text-left">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-base-300 text-primary-content [input:checked~&]:bg-base-600 [input:checked~&]:text-grey font-bold">
                      4.Details Place
                    </div>
                    <div className="collapse-content bg-base-300 text-primary-content [input:checked~&]:bg-base-200 [input:checked~&]:text-black">
                      <input
                        type="text"
                        placeholder="4.Details Place"
                        className="input input-bordered input-accent w-full max-w-xs"
                        name="detailsPlace"
                        value={addplaceInput.detailsPlace}
                        onChange={handleInput}
                      />
                    </div>
                  </div>
                  {/* <div
                    tabIndex={0}
                    className="collapse collapse-arrow border border-base-300 bg-base-200"
                  >
                    <div className="collapse-title font-medium">
                      4.Details Place
                    </div>
                    <div className="collapse-content">
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        name="detailsPlace"
                        value={addplaceInput.detailsPlace}
                        onChange={handleInput}
                      />
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="card-actions justify-center mt-2">
                <button className="btn capitalize btn-neutral">
                  Create Place
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Addplace;
