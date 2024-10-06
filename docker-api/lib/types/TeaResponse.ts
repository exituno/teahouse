export interface TeaResponse<T> {
  code: number;
  success: boolean;
  message?: string;
  data?: T;
}
