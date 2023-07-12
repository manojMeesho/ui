import { Action, ActionCreator } from "redux";
import { AUTH, AuthAction } from "./auth/types";

export interface ApiCallAction extends Action {
  type: "@app/API_CALL";
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  payload?: any;
  params?: any;
  onRequest?: ActionCreator<ApplicationActions>;
  onSuccess?: ActionCreator<ApplicationActions>;
  onFailure?: ActionCreator<ApplicationActions>;
  isJuspay?: boolean;
  extraHeaders?: Record<string, string>;
}

export interface ApplicationState {
  auth: AUTH;
}

export interface CommonError {
  error: boolean;
  message: string;
  data?: null;
}

export interface PaginationPayload {
  page: number;
  limit: number;
}
export type ApplicationActions = AuthAction;

export type ResponseBody = {
  status: number;
  message: string;
};
