export default function VehicleCard({ vehicle }: object) {
  return (
    <>
      <div className="vehicle-container">
        <img src={vehicle.original_media_urls[0]} />
        <p>
          {vehicle.plate} {vehicle.make} {vehicle.model}
        </p>
        <div className="ad-classification">{vehicle.advert_classification}</div>
        <div>Star</div>
        <p>{vehicle.derivative}</p>
        <ul>
          {vehicle.key_features.map((feature) => {
            return <li>{feature}</li>;
          })}
        </ul>
        <p>
          {vehicle.monthly_payment} /mo {vehicle.monthly_finance_type}
        </p>
        <p>£{vehicle.price_when_new}</p>
      </div>
    </>
  );
}
