import { all } from "redux-saga/effects";

import { OccupationSaga } from "./getOccupationListAction";
import { premiumSaga } from "./formSubmissionAction";

export function* rootSaga() {
  yield all({
    ...OccupationSaga,
    ...premiumSaga
  });
}
