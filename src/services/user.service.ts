import {HttpClient} from '../model/http-client/http-client';
import {HttpRequestParamsInterface} from '../model/http-client/http-request-params.interface';
import {getFirstDayOfWeek, getLastDayOfWeek} from '../utils/date.util';

export interface ScheduleParams {
  startDate: string;
  endDate: string;
}

class UserService {
  public getMyInformation(): Promise<any> {
    const scheduleParams: ScheduleParams = {
      startDate: getFirstDayOfWeek(),
      endDate: getLastDayOfWeek(),
    };
    const params: HttpRequestParamsInterface = {
      requiresToken: true,
      url: `/users/me/schedules?StartDate=${scheduleParams.startDate}&EndDate=${scheduleParams.endDate}`,
    };
    return HttpClient.get(params);
  }
}

export default new UserService();
