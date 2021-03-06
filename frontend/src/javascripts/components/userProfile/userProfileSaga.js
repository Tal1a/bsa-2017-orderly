import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as userApi from './userApi';


function* getCurrentUser(action) {
    try {
        const user = yield call(userApi.getCurrentUser);
        yield put({type: "GET_CURRENT_USER_SUCCEEDED", user: user});
    } catch (e) {
        console.log(e);
        yield put({type: "GET_CURRENT_USER_FAILED", message: e.message});
    }
}

function* updateUser(action) {
    try {
        let userNew =  yield call(userApi.updateUserById, action._id, action.updateData);
        yield put({ type: "CHANGE_USER_PROFILE_DATA_SUCCESS", user: userNew});
    } catch (err) {
        console.log(e);
        yield put({ type: "CHANGE_USER_PROFILE_DATA_FAILED", message: e.message});
    }
}

function* userProfileSaga() {
    yield takeEvery("GET_CURRENT_USER_REQUESTED", getCurrentUser);
    yield takeEvery("CHANGE_USER_PROFILE_DATA", updateUser);
}

export default userProfileSaga;