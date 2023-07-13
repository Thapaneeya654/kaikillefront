import React from "react";
import Avatar from "../components/common/Avatar";
import Navigatepage from "../components/home/Navigatepage";

function Detailplace() {
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
              HELLO Detailplace
            </div>
            <div className="divider font-bold text-lg">
              <p>It takes a miracle to find someplace.</p>
            </div>
            <div>
              <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                  <img
                    src="/src/assets/logomain.png"
                    className="max-w-sm rounded-lg shadow-2xl"
                  />
                  <div>
                    <h1 className="text-4xl font-bold">Name Place</h1>
                    <p className="py-6 text-start">
                      Detail Place - Provident cupiditate voluptatem et in.
                      Quaerat fugiat ut assumenda excepturi exercitationem
                      quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-neutral mt-2">Save Place</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detailplace;
