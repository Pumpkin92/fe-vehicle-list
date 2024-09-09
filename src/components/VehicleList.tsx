import { useEffect, useState } from "react";
import VehicleCard from "./VehicleCard";
import { getVehicles } from "../api";
import Pagination from "./Pagination";
import Navbar from "./Navbar";

export default function VehicleList() {
  const [vehiclesData, setVehiclesData] = useState<object>({});
  const [isLoading, setIsLoading] = useState(true);
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);
  const [classification, setClassification] = useState("All");
  const totalPages = 4;

  useEffect(() => {
    getVehicles(currentPageNumber, classification)
      .then(({ data }) => {
        setVehiclesData(data);
        console.log(data);
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
    <h1>Loading...</h1>
  ) : (
    <>
      <Navbar
        onSetClassification={handleSetClassification}
        classification={classification}
      />
      <main>
        <div className="controls">
          <p>
            {" "}
            Showing {vehiclesData.data.length} of {vehiclesData.meta.total} cars
          </p>
          <select name="orderBy" className="orderBy">
            <option value="lowest-price">Lowest Price</option>
            <option value="lowest-price">Highest Price</option>
          </select>
        </div>

        {vehiclesWithForm.map((vehicle: object) => {
          if (vehicle.type === "form") {
            return formElementMobile;
          } else {
            return <VehicleCard vehicle={vehicle} key={vehicle.vehicle_id} />;
          }
        })}

        <Pagination
          currentPageNumber={currentPageNumber}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />

        <div className="footer">
          <a href="#top">Back to top</a>
        </div>
      </main>
    </>
  );
}
