import { useEffect, useState } from "react";
import VehicleCard from "./VehicleCard";
import { getVehicles } from "../api";
import Pagination from "./Pagination";

export default function VehicleList() {
  const [vehiclesData, setVehiclesData] = useState<object>({});
  const [isLoading, setIsLoading] = useState(true);
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);
  const [displayPopup, setDisplayPopup] = useState(false);
  const totalPages = 4;
  useEffect(() => {
    getVehicles(currentPageNumber)
      .then(({ data }) => {
        setVehiclesData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [currentPageNumber]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPageNumber(pageNumber);
  };

  const formElementMobile = (
    <div>
      <p>Value Your Car</p>
      <p>Find out the value of your car in just a few minutes</p>
      <button>Get Valuation</button>
    </div>
  );

  const formElement = (
    <form>
      <p>Value Your Car</p>
      <p>Find out the value of your car in just a few minutes</p>
      <label htmlFor="vrm">VRM</label>
      <input type="text" id="vrm" name="vrm" placeholder="Enter VRM" required />
      <label htmlFor="mileage">Mileage</label>
      <input
        type="text"
        id="mileage"
        name="mileage"
        placeholder="Enter mileage"
        required
      />
      <button>Submit</button>
    </form>
  );

  const vehiclesArray = vehiclesData.data || [];
  const middleIndex = Math.floor(vehiclesArray.length / 2 - 1);

  const vehiclesWithForm = [
    ...vehiclesArray.slice(0, middleIndex),
    formElement,
    ...vehiclesArray.slice(middleIndex),
  ];

  return isLoading ? (
    <h1>loading</h1>
  ) : (
    <>
      <section>
        <div className="navbar">
          <p className="desktop-car-num"> number of cars</p>
          <ul className="selectors">
            <li>new</li>
            <li>used</li>
            <li>all</li>
            <li>offers</li>
          </ul>
        </div>
        <div className="controls">
          <p>
            {" "}
            showing {vehiclesData.meta.per_page} of {vehiclesData.meta.total}{" "}
            cars
          </p>
          <p>dropdown lowest</p>
        </div>
      </section>
      {vehiclesWithForm.map((vehicle: object) => {
        if (vehicle.type === "form") {
          return formElementMobile;
        } else {
          return <VehicleCard vehicle={vehicle} key={vehicle.vehicle_id} />;
        }
      })}

      <div className="nav-buttons">{}</div>
      <div className="top-navigation">
        <a>Back to top</a>
      </div>

      <Pagination
        currentPageNumber={currentPageNumber}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}
