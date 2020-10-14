import { put, takeEvery } from "redux-saga/effects";
import {Config} from '../config/index';

export const OCCUPATION_LISTREQ = "OCCUPATION_LISTREQ";
export const OCCUPATION_LIST = "OCCUPATION_LIST";


export const getOccupationListAction = {
  getOccupationListDataRequest: data => {
    return { type: OCCUPATION_LISTREQ, data: data };
  },
  occupationListData: data => {
    return { type: OCCUPATION_LIST, data: data };
  }
};
//redux-saga API call to get the occupation list
export function* getOccupationListData() {
  try {
    let data = [];
    yield fetch(

      Config.API_BASE_URL+"PremiumCalculator/GetOccupationList"
    )
      .then(response => response.json())
      .then(json => (data = json));
    yield put(getOccupationListAction.occupationListData(data));
  } catch (e) {
    console.log(e);
    let data = [{ errormsg: "error", errorCode: "123" }];
    yield put(getOccupationListAction.occupationListData(data));
  }
}

export const OccupationSaga = {
  OccupationListData: takeEvery(OCCUPATION_LISTREQ, getOccupationListData)
};
