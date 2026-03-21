export interface IOverViewDataUser {
  ALL: number;
  LOGGED_IN: number;
  NOT_LOGGED_IN: number;
}
export interface ILineChartDataUser {
  ALL: number;
  LoggedIn: number;
  NotLoggedIn: number;
  date: string;
}

export interface IOverViewDataUserParams {
  dateType?: string;
  statusLoggedIn?: boolean | string;
  startDate?: string;
  endDate?: string;
}

export interface IOverViewDataEventParams {
  eventId?: string | number;
  startDate?: string;
  endDate?: string;
}

export interface IResLineChart {
  [key: string]: string | number;
  date: string;
}

// EVENT

export interface IOverViewDataEvent {
  ALL: number;
  CHECKED_IN: number;
  SUCCESS: number;
  PENDING: number;
}
export interface ILineChartDataEvent {
  ALL: number;
  CHECKED_IN: number;
  SUCCESS: number;
  PENDING: number;
  date: string;
}
