export interface BaseQuery {
  search?: string | null;
  page?: number | null;
  pageSize?: number | null;
  orderBy?: string | null;
  sortDirection?: 'asc' | 'desc' | null;
}

export interface PaginatedResult<T> {
  pagination: Pagination;
  items: T[];
}

export interface Pagination {
  page: number;
  pageSize: number;
  total: number;
  pageCount: number;
}

export interface ErrorResult {
  message: string;
  errors?: {
    [key: string]: string[];
  };
}
