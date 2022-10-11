export interface CustomResponse<T> {
  data: T & BaseData;
  status: number;
}

export interface BaseData {
  msg?: string;
  code?: number;
}

export interface PaginationOptions {
  identity?: string;
  page?: string;
  size?: string;
}
