import {HttpClient} from '../model/http-client/http-client';
import {HttpRequestParamsInterface} from '../model/http-client/http-request-params.interface';

class ReferenceService {
  public getRefsData(refType: string): Promise<any> {
    const params: HttpRequestParamsInterface = {
      requiresToken: true,
      url: `/reference/${refType}`,
    };
    return HttpClient.get(params);
  }

  public getRefsById(refType: string, id: string): Promise<any> {
    const params: HttpRequestParamsInterface = {
      requiresToken: true,
      url: `/reference/${refType}/${id}`,
    };
    return HttpClient.get(params);
  }
}

export default new ReferenceService();
