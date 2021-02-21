import { DataState, DataActionType, DataAction } from "../../types/data";

const initialState: DataState = {
  loading: false,
  data: [],
  error: null,
};

export const dataReducer = (
  state: DataState = initialState,
  action: DataAction
): DataState => {
  switch (action.type) {
    case DataActionType.FETCH_CURRENCY:
      return { loading: true, data: [], error: null };
    case DataActionType.FETCH_CURRENCY_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: null,
      };
    case DataActionType.FETCH_CURRENCY_FAILED:
      return { loading: false, data: [], error: action.payload };
    default:
      return state;
  }
};
