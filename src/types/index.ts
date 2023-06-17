import { AxiosRequestConfig, AxiosResponse } from 'axios';


export interface MyAxiosInstance {
  get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
  post<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;
  // Añade otros métodos que necesites (put, delete, etc.)
}

export interface ValidateAccessI {
  id: string
}
export interface RouterPathI {
  name: string, 
  params?: { 
            id: number 
          }
}