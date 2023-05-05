import {HttpRequestParamsInterface} from './http-request-params.interface';

/**
 * @Name HttpClientInterface
 * @description
 * Interface for our HttpClient wrapper
 */
export interface HttpClientInterface {
  get<T>(parameters: HttpRequestParamsInterface): Promise<T>;
  post<T>(parameters: HttpRequestParamsInterface): Promise<T>;
  delete<T>(parameters: HttpRequestParamsInterface): Promise<T>;
}
