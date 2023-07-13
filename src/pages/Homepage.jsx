import React from "react";
import Avatar from "../components/common/Avatar";
import Navigatepage from "../components/home/Navigatepage";
import Cardplaceall from "../components/features/place/Cardplaceall";
import { useEffect, useState } from "react";
import axios from "axios";

function Homepage() {
  const [place, setPlace] = useState([]);

  useEffect(() => {
    try {
      const getPlace = async () => {
        const result = await axios.get("http://localhost:8888/place/showplace");
        console.log(result.data);
        setPlace(result.data);
      };
      getPlace();
    } catch (err) {
      console.log(err);
    }
  }, []);

  console.log(place);
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
              <div>
                <p>Hello,welcome to Kaikille</p>
              </div>
              {/* <div className="flex flex-row items-center font-bold  ">
                <p className="p-2">Nearby Search</p>
                <select className="select select-bordered">
                  <option disabled selected>
                    Pick one
                  </option>
                  <option>Star Wars</option>
                  <option>Harry Potter</option>
                  <option>Lord of the Rings</option>
                  <option>Planet of the Apes</option>
                  <option>Star Trek</option>
                </select>
              </div> */}
            </div>
            <div className="divider font-bold text-lg">
              <p>It takes a miracle to find someone.</p>
            </div>
            <div className="rounded-box grid grid-cols-3 gap-2">
              {place.map((el) => (
                <Cardplaceall
                  namePlace={el.namePlace}
                  detailsPlace={el.detailsPlace}
                  districtPlace={el.districtPlace}
                  provincePlace={el.provincePlace}
                  id={el.id}
                  setPlace={setPlace}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
