export interface LoginPayload {
  CCCD: string;
  password: string;
}

export interface RegisterPayload {
  CCCD: string;
  FirstName: string;
  LastName: string;
  BirthDate: string;
  PositionIds: any[];
  Description: string;
  Email: string;
}

export interface ResetPasswordPayload {
  CCCD: string;
  Token: string;
  OldPassword: string;
  NewPassword: string;
}

export interface LeaveRequestPayload {
  workingTypeOptionId: string;
  dateFrom: string;
  dateTo: string;
  reason: string;
  attachments?: any;
}

export interface RolePayload {
  roleIds: string[];
}

export interface NotePayLoad {
  title: string;
  description: string;
}
