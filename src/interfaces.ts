export interface vehicle {
  // data: [array of vehicle data],
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
