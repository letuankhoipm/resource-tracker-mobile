import {API_ENDPOINT} from '../configs/auth';
import {HttpClient} from '../model/http-client/http-client';
import {HttpRequestParamsInterface} from '../model/http-client/http-request-params.interface';
import {
  LoginPayload,
  RegisterPayload,
  ResetPasswordPayload,
} from '../types/payload.type';

class AuthService {
  public login(loginPayload: LoginPayload): Promise<any> {
    const params: HttpRequestParamsInterface = {
      requiresToken: false,
      url: `${API_ENDPOINT}/auth/login`,
      payload: loginPayload,
    };
    return HttpClient.post(params);
  }

  public register(registerPayload: RegisterPayload): Promise<any> {
    const params: HttpRequestParamsInterface = {
      requiresToken: true,
      url: `${API_ENDPOINT}/auth/register`,
      payload: registerPayload,
    };
    return HttpClient.post(params);
  }

  public getVerifyCode(cccd: string): Promise<any> {
    const params: HttpRequestParamsInterface = {
      requiresToken: false,
      url: `${API_ENDPOINT}/auth/send-token-reset-password`,
      payload: {CCCD: cccd},
    };
    return HttpClient.post(params);
  }

  public confirmResetPassword(
    resetPayload: ResetPasswordPayload,
  ): Promise<any> {
    const params: HttpRequestParamsInterface = {
      requiresToken: false,
      url: `${API_ENDPOINT}/auth/confirm-reset-password`,
      payload: resetPayload,
    };

    return HttpClient.post(params);
  }
}

export default new AuthService();
