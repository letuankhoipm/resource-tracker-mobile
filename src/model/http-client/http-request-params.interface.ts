import {AxiosRequestConfig} from 'axios';

/**
 * @name HttpRequestParamsInterface
 * @description
 * HttpClient requests parameters for get/post/put etc operations
 */
export type HttpRequestParamsInterface<D = any> = AxiosRequestConfig<D> & {
  url: string;
  requiresToken: boolean;
  payload?: any;
  contentType?: string;
};
