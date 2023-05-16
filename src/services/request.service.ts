import {API_ENDPOINT} from '../configs/env';
import {LeaveRequestPayload} from '../model/common/payload.model';
import {HttpClient} from '../model/http-client/http-client';
import {HttpRequestParamsInterface} from '../model/http-client/http-request-params.interface';

class RequestService {
  public getMyLeaveRequests(): Promise<any> {
    const params: HttpRequestParamsInterface = {
      requiresToken: true,
      url: `${API_ENDPOINT}/users/me/leave-requests`,
    };
    return HttpClient.get(params);
  }

  public getLeaveRequests(pageNumber: number, pageSize: number): Promise<any> {
    const params: HttpRequestParamsInterface = {
      requiresToken: true,
      url: `${API_ENDPOINT}/leave-requests?pageNumber=${pageNumber}&pageSize=${pageSize}`,
    };
    return HttpClient.get(params);
  }

  public createLeaveRequest(payload: LeaveRequestPayload): Promise<any[]> {
    const params: HttpRequestParamsInterface = {
      requiresToken: true,
      url: `${API_ENDPOINT}/leave-requests`,
      payload,
      contentType: 'multipart/form-data',
    };
    return HttpClient.post(params);
  }

  public confirmLeaveRequest(
    requestId: string,
    decisionStatus: string,
  ): Promise<any[]> {
    const params: HttpRequestParamsInterface = {
      requiresToken: true,
      url: `${API_ENDPOINT}/leave-requests/${requestId}/confirm`,
      payload: {status: decisionStatus},
    };
    return HttpClient.post(params);
  }
}

export default new RequestService();
