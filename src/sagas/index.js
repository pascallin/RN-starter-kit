import { 
	call, 
	put, 
	takeLatest, 
	select, 
	take
} from 'redux-saga/effects'

function* watchAndLog() {
  while (true) {
    const action = yield take('*')
    const state = yield select()

    console.log('action: ', action)
    console.log('state after: ', state)
  }
}

function* watchFetchUser() {
  yield takeLatest('FETCH_REQUESTED', fetchData)
}
export function* fetchData(action) {
	console.log('--------> action',action);
  try {
      const data = yield fetch("http://localhost:4000/services/user/test").then((response)=>{
		  return response.json()
	  })
      yield put({type: "FETCH_SUCCEEDED", data})
   } catch (error) {
      yield put({type: "FETCH_FAILED", error})
   }
}

export default function* rootSaga() {
  yield [
    watchAndLog(),
	watchFetchUser()
  ]
}