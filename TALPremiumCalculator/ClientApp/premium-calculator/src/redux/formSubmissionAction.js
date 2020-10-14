import { put, takeEvery } from "redux-saga/effects";
import {Config} from '../config/index';

export const FORM_SUBMIT = "FORM_SUBMIT";
export const FORM_SUBMITREQ = "FORM_SUBMITREQ";

export const formSubmitAction = {
  formDataRequest: data => {
    return { type: FORM_SUBMITREQ, data: data };
  },
  formData: data => {
    return { type: FORM_SUBMIT, data: data };
  }
};
//redux-saga API call to get the calculated premium 
export function* getPremiumCalculated(value) {
  try {
    let data = [];
    console.log(value , "form data submitted");
    yield fetch(
                   Config.API_BASE_URL+"PremiumCalculator/CalculatePremium",
                    {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ age: value.data.age, sumInsured : value.data.sumInsured, Factor: value.data.Factor })
                    }
                )

      .then(response => response.json())
      .then(json => (data = json));
    yield put(formSubmitAction.formData(data));
  } catch (e) {
    console.log(e);
    let data = [{ errormsg: "error", errorCode: "123" }];
    yield put(formSubmitAction.formData(data));
  }
}

export const premiumSaga = {
  PremiumData: takeEvery(FORM_SUBMITREQ, getPremiumCalculated)
};
