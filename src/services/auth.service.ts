import {API_ENDPOINT} from '../configs/auth';
import {HttpClient} from '../model/http-client/http-client';
import {HttpRequestParamsInterface} from '../model/http-client/http-request-params.interface';
import {LoginPayload} from '../model/common/payload.model';

class AuthService {
  public login(loginPayload: LoginPayload): Promise<any> {
    const params: HttpRequestParamsInterface = {
      requiresToken: false,
      url: `${API_ENDPOINT}/auth/login`,
      payload: loginPayload,
    };
    return HttpClient.post(params);
  }

  public logout(): void {
    return;
  }
}

export default new AuthService();
