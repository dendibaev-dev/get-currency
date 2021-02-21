import axios from "axios";
import { Dispatch } from "redux";
import { DataAction, DataActionType } from "../../types/data";

export const fetchCurrencies = () => {
  return async (dispatch: Dispatch<DataAction>) => {
    try {
      dispatch({ type: DataActionType.FETCH_CURRENCY });
      const response = await axios.get(
        `${process.env.REACT_APP_HOST}latest?access_key=${process.env.REACT_APP_API_KEY}&symbols=USD,AUD,CAD,PLN,MXN`
      );
      dispatch({
        type: DataActionType.FETCH_CURRENCY_SUCCESS,
        payload: Object.keys(response.data.rates).map((item) => ({
          label: item,
          value: response.data.rates[item],
        })),
      });
    } catch (e) {
      dispatch({ type: DataActionType.FETCH_CURRENCY_FAILED, payload: "404" });
    }
  };
};
