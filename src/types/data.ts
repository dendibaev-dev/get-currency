export interface DataState {
  data: any[];
  loading: boolean;
  error: null | string;
}

export enum DataActionType {
  FETCH_CURRENCY = "FETCH_CURRENCY",
  FETCH_CURRENCY_SUCCESS = "FETCH_CURRENCY_SUCCESS",
  FETCH_CURRENCY_FAILED = "FETCH_CURRENCY_FAILED",
}

interface FetchDataAction {
  type: DataActionType.FETCH_CURRENCY;
}
interface FetchSuccessDataAction {
  type: DataActionType.FETCH_CURRENCY_SUCCESS;
  payload: any[];
}
interface FetchFailedDataAction {
  type: DataActionType.FETCH_CURRENCY_FAILED;
  payload: null | string;
}

export type DataAction =
  | FetchDataAction
  | FetchSuccessDataAction
  | FetchFailedDataAction;
