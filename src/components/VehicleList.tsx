import { useEffect, useState } from "react";
import VehicleCard from "./VehicleCard";
import { getVehicles } from "../api";
import Pagination from "./Pagination";
import Navbar from "./Navbar";
import { vehicle, vehiclesData } from "../interfaces";

export default function VehicleList() {
  const [vehiclesData, setVehiclesData] = useState<vehiclesData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);
  const [classification, setClassification] = useState("All");
  const totalPages = 4;

  useEffect(() => {
    getVehicles(currentPageNumber, classification)
      .then(({ data }) => {
        setVehiclesData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [currentPageNumber, classification]);

  const handleSetClassification = (selectedClass: string) => {
    setClassification(selectedClass);
  };
  const handlePageChange = (pageNumber: number) => {
    setCurrentPageNumber(pageNumber);
  };

  const formElementMobile = (
    <div className="mobile-form">
      <div className="form-text">
        <p className="form-header">Value Your Car</p>
        <p className="form-subheading">Find out in just a few minutes</p>
      </div>
      <button className="valuation-btn">Get Valuation</button>
    </div>
  );

  const formElementDesktop = (
    <form>
      <div className="vehicle-container form-container ">
        <p className="desk-form-title">Value your car</p>
        <p className="desk-form-text">
          Find out the value of your car in just a few minutes.
        </p>

        <div className="form-group">
          <label className="desk-form-label" htmlFor="vrm">
            VRM <span className="asterisk">*</span>
          </label>
          <input type="text" id="vrm" placeholder="Enter VRM" />
        </div>

        <div className="form-group">
          <label className="desk-form-label" htmlFor="mileage">
            Mileage <span className="asterisk">*</span>
          </label>
          <input type="text" id="mileage" placeholder="Enter mileage" />
        </div>

        <button className="desk-form-btn" type="submit">
          Value my car
        </button>
      </div>
    </form>
  );

  const vehiclesArray = vehiclesData?.data || [];
  const middleIndex = Math.floor(vehiclesArray.length / 2 - 1);
  type VehicleOrForm = vehicle | { type: "form" };
  const vehiclesWithForm: VehicleOrForm[] = [
    ...vehiclesArray.slice(0, middleIndex),
    { type: "form" },
    ...vehiclesArray.slice(middleIndex),
  ];

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="wrapper">
      <Navbar
        onSetClassification={handleSetClassification}
        classification={classification}
      />
      <main>
        <div className="controls">
          <p className="mob-displayed-no-of-results">
            {" "}
            Showing {vehiclesData?.data.length} of {vehiclesData?.meta.total}{" "}
            cars
          </p>
          <p className="desk-tab-total-cars-no">
            Showing {vehiclesData?.meta.total} cars
          </p>
          <select name="orderBy" className="orderBy">
            <option value="lowest-price">Lowest Price</option>
            <option value="lowest-price">Highest Price</option>
          </select>
        </div>
        <div className="mob-vehicle-container">
          {vehiclesWithForm.map((item: VehicleOrForm, index: number) => {
            if ("type" in item && item.type === "form") {
              return formElementMobile;
            } else {
              return <VehicleCard vehicle={item} key={index} />;
            }
          })}
        </div>
        <div className="desk-vehicle-container">
          {vehiclesWithForm.map((item: VehicleOrForm, index: number) => {
            if ("type" in item && item.type === "form") {
              return formElementDesktop;
            } else {
              return <VehicleCard vehicle={item} key={index} />;
            }
          })}
        </div>

        <Pagination
          currentPageNumber={currentPageNumber}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
        <div className="order-footer-container">
          <div className="footer">
            <a href="#top">Back to top</a>
          </div>
          <select name="orderBy" className="orderBy-desktop-duplicate">
            <option value="lowest-price">Lowest Price</option>
            <option value="lowest-price">Highest Price</option>
          </select>
        </div>
      </main>
    </div>
  );
}
