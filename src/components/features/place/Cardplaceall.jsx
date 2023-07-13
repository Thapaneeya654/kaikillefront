import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { getAccessToken } from "../../../utils/localstorage";

export default function Cardplaceall({
  namePlace,
  detailsPlace,
  districtPlace,
  provincePlace,
  id,
  setPlace,
}) {
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
      </div>
    </div>
  );
}
