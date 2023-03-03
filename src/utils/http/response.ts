export interface ErrorResponse {
  error: number;
  message: string;
}
export interface BaseResponse extends ErrorResponse {
  data: any;
}
