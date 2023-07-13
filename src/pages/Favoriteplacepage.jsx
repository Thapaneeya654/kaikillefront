import React from "react";
import Avatar from "../components/common/Avatar";
import Navigatepage from "../components/home/Navigatepage";
import Cardplace from "../components/features/button/Cardplace";

function Favoriteplace() {
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
          <div className="flex flex-col w-full">
            <div className="h-20 card rounded-box place-items-center flex items-start justify-center">
              HELLO Welcome to Find your saved places [Favorite place]
            </div>
            <div className="divider font-bold text-lg">
              <p>It takes a miracle to find someone.</p>
            </div>
            <div className="rounded-box grid grid-cols-3 gap-2">
              <Cardplace />
              <Cardplace />
              <Cardplace />
              <Cardplace />
              <Cardplace />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Favoriteplace;
