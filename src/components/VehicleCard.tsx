import { useState } from "react";

export default function VehicleCard({ vehicle }: object) {
  const [favourite, setFavourite] = useState(false);
  const slicedFeatures = vehicle.key_features.slice(0, 4);

  return (
    <>
      <div className="vehicle-container">
        <div className="img-container">
          {vehicle.media_urls.map((img: any) => {
            return <img className="car-img" src={img.thumb} />;
          })}
        </div>
        <div className="desk-tab-img-container">
          <img src={vehicle.media_urls[0].medium} />

          <ul className="mapped-feature-elements">
            {slicedFeatures.map((feature, index) => {
              return (
                <>
                  <li key={index}>{feature}</li>
                </>
              );
            })}
          </ul>
          <div className="classification-box">
            <div className="vehicle-classification">
              {vehicle.advert_classification}
            </div>
          </div>
        </div>
        <div className="car-main-info">
          <p>
            {vehicle.plate} {vehicle.make} {vehicle.model}
          </p>
          <div className="classification-container">
            <div className="classification-box-mobile">
              <p className="vehicle-classification-mobile">
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
        <div className="vehicle-main-info-desk">
          <p className="vehicle-derivative">{vehicle.derivative}</p>
          <div className="vehicle-details">
            <ul className="mapped-feature-elements-mobile">
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
                <span className="price-monthly-bold">
                  £{vehicle.monthly_payment}
                </span>{" "}
                /mo {vehicle.monthly_finance_type}
              </p>
              <p className="price-total">
                £{vehicle.price_when_new}{" "}
                <span className="finance-desk">Calculate Finance</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
