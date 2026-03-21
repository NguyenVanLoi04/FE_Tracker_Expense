export interface IBaseResponse<T> {
  meta: IBaseMetaResponse;
  response: T;
  pagination?: IBasePaginationResponse;
}

export interface IBaseResponseForm<T> extends IBaseResponse<any> {
  customFields?: Record<string, any>;
}

interface IBaseMetaResponse {
  status: number;
  msg?: string;
  error?: string;
  subInfo?: any;
}

interface IBasePaginationResponse {
  currentPage: number;
  last: boolean;
  recordsPerPage: number;
  totalPages: number;
  totalRecords: number;
}
