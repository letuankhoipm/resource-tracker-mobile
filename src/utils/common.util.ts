export function generateColor(status: STATUS): string {
  switch (status) {
    case STATUS.IN_PROGRESS:
      return 'info';
    case STATUS.RETIRED:
      return 'default';
    case STATUS.APPROVED:
      return 'success';
    case STATUS.PENDING:
      return 'info';
    case STATUS.REJECTED:
      return 'error';

    default:
      return 'default';
  }
}

export const enum STATUS {
  IN_PROGRESS = 'IN_PROGRESS',
  RETIRED = 'RETIRED',
  FIRED = 'FIRED',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  PENDING = 'PENDING',
}
