import { call, put } from "redux-saga/effects";
import { setCountries } from "../../countriesSlice";
import { getAllCountries } from "../../../api/getCountries";

export function* workerCountries() {
  try {
    //@ts-ignore
    const response = yield call(getAllCountries);
    yield put(setCountries([response]));
  } catch (error) {
    console.log(error);
  }
}
