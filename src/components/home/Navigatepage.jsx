import React from "react";
import { Link } from "react-router-dom";
import { removeAccessToken } from "../../utils/localstorage";
import { useAuth } from "../../contexts/auth-context";

export default function Navigatepage() {
  const { setUser } = useAuth();
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <ul className="menu w-80 h-full text-start bg-base-300 text-base-content font-bold rounded-md">
        <Link to={"/homepage"}>
          <li className="hover:bg-warning p-4 rounded-lg">Home</li>
        </Link>
        <Link to={"/favoriteplace"}>
          <li className="hover:bg-warning p-4 rounded-lg">
            Find your saved places
          </li>
        </Link>
        <Link to={"/rankingplace"}>
          <li className="hover:bg-warning p-4 rounded-lg">
            Your shared places
          </li>
        </Link>
        <Link to={"/addplace"}>
          <li className="hover:bg-warning p-4 rounded-lg">
            Create and share a list of places
          </li>
        </Link>
        <Link to={"/editinfomation"}>
          <li className="hover:bg-warning p-4 rounded-lg">Edit profile</li>
        </Link>
        <Link to={"/logout"}>
          <li
            className="hover:bg-warning p-4 rounded-lg"
            onClick={() => {
              removeAccessToken();
              setUser(null);
            }}
          >
            Logout
          </li>
        </Link>
      </ul>
    </div>
  );
}
