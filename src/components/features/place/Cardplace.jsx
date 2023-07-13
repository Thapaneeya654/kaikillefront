import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { getAccessToken } from "../../../utils/localstorage";

export default function Cardplace({
  namePlace,
  detailsPlace,
  districtPlace,
  provincePlace,
  id,
  setPlace,
}) {
  const handleDelete = async () => {
    try {
      const token = getAccessToken();
      await axios.delete(`http://localhost:8888/place/deletePlace/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const getPlace = async () => {
        const result = await axios.get("http://localhost:8888/place/ranking", {
          headers: { Authorization: `Bearer ${token}` },
        });
        // console.log(result.data);
        setPlace(result.data);
      };
      getPlace();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="card bg-base-200 shadow-xl gap-2">
        <div className="card-body">
          <h2 className="card-title">{namePlace}</h2>
          <img src="/src/assets/logoplacemain.png" />
          <p className="text-start">
            provincePlace:{provincePlace}
            <br />
            districtPlace:{districtPlace}
            <br />
            detailsPlace:{detailsPlace}
          </p>
        </div>
        <button className="btn btn-neutral rounded-md" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
