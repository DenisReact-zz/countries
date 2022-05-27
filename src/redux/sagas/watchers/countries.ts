import { takeLatest } from "redux-saga/effects";
import { workerCountries } from "../workers/countries";
import { getCountries } from "../../countriesSlice";

export function* watcherCountries() {
  yield takeLatest(getCountries.type, workerCountries);
}
