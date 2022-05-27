import { watcherCountries } from "./watchers/countries";
export default function* rootSaga() {
  yield watcherCountries();
}
