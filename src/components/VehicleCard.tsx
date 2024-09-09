import { useState } from "react";

export default function VehicleCard({ vehicle }: object) {
  const [favourite, setFavourite] = useState(false);
  return (
    <>
      <div className="vehicle-container">
        <div className="img-container">
          {vehicle.media_urls.map((img: any) => {
            return <img className="car-img" src={img.thumb} />;
          })}
        </div>
        <div className="car-main-info">
          <p>
            {vehicle.plate} {vehicle.make} {vehicle.model}
          </p>
          <div className="classification-container">
            <div className="classification-box">
              <p className="vehicle-classification">
                {vehicle.advert_classification}
              </p>
            </div>
            <div
              className={`star ${favourite ? "active" : ""}`}
              onClick={() => {
                setFavourite(!favourite);
              }}
            >
              ★
            </div>
          </div>
        </div>
        <p className="vehicle-derivative">{vehicle.derivative}</p>
        <div className="vehicle-details">
          <ul className="mapped-feature-elements">
            {vehicle.key_features.map((feature, index) => {
              return (
                <>
                  <li key={index}>{feature}</li>
                  <span className="divider">|</span>
                </>
              );
            })}
          </ul>

          <div className="vehicle-pricing">
            <p className="price-monthly">
              £{vehicle.monthly_payment} /mo {vehicle.monthly_finance_type}
            </p>
            <p className="price-total">£{vehicle.price_when_new}</p>
          </div>
        </div>
      </div>
    </>
  );
}
