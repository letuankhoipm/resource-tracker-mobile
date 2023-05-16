import {API_ENDPOINT} from '../../configs/env';
import {HttpClientInterface} from './http-client.interface';
import {HttpClientModel} from './http-client.model';

// export instance of HttpClientModel (injector)
export const HttpClient: HttpClientInterface = new HttpClientModel({
  baseURL: API_ENDPOINT,
});
