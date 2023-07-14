import { useEffect, useState } from "react";
import Avatar from "../components/common/Avatar";
import Navigatepage from "../components/home/Navigatepage";
import Cardplace from "../components/features/place/Cardplace";
import axios from "axios";
import { getAccessToken } from "../utils/localstorage";

function Rankingplace() {
  const [place, setPlace] = useState([]);
  useEffect(() => {
    try {
      const token = getAccessToken();
      const getPlace = async () => {
        const result = await axios.get("http://localhost:8888/place/ranking", {
          headers: { Authorization: `Bearer ${token}` },
        });
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
              HELLO Welcome to Your shared places [Ranking place]
            </div>
            <div className="divider font-bold text-lg">
              <p>It takes a miracle to find someplace.</p>
            </div>
            <div>
              <div className="rounded-box grid grid-cols-3 gap-2">
                {place.map((el) => (
                  <Cardplace
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
    </div>
  );
}

export default Rankingplace;
