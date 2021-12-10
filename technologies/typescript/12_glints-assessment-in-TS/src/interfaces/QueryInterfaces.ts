export interface RequestQueryItem {
  price_min?: number;
  price_max?: number;
  stock_min?: number;
  stock_max?: number;
  category?: string;
  sortBy?: string;
  orderBy?: string;
  page?: number;
  limit?: number;
}

export interface FilterQueryItem{
    price: {$gte: number, $lte: number};
    stock: {$gte: number, $lte: number};
    category?: string | undefined;
}