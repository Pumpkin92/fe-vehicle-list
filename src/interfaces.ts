export interface Response {
  data: any | object;
}
export interface vehicle {
  advert_classification: string;
  attention_grabber: string | null;
  body_type: string;
  body_type_slug: string;
  colour: string;
  company: string;
  date_first_registered: string;
  derivative: string;
  description: string;
  doors: string;
  drivetrain: string;
  extra_description: string;
  fuel_type: string;
  fuel_type_slug: string;
  insurance_group: string;
  key_features: string[];
  location: string;
  location_slug: string;
  make: string;
  make_slug: string;
  media_urls: { [key: string]: any }[];
  model: string;
  model_year: number | null;
  monthly_finance_type: string;
  monthly_payment: string;
  name: string;
  odometer_units: string;
  odometer_value: number;
  original_media_urls: string[];
  original_price: string;
  plate: string;
  previous_keepers: number;
  price: string;
  price_ex_vat: string;
  price_when_new: string;
  range: string;
  range_slug: string;
  reserved: string;
  seats: string;
  site: string;
  site_slug: string;
  slug: string;
  status: string;
  stock_id: string;
  tax_rate_value: string;
  transmission: string;
  vat: string;
  vat_scheme: string;
  vat_when_new: string;
  vehicle_id: number;
  vin: string;
  vrm: string;
  year: string;
}

export interface vehiclesData {
  data: vehicle[];
  meta: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    all_total: number;
    total_new_vehicles: number;
    total_used_vehicles: number;
    offer_vehicles: number;
  };
}

export interface PaginationProps {
  currentPageNumber: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface NavbarProps {
  onSetClassification: (classificatiion: string) => void;
  classification: string;
}
