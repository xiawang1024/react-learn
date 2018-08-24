import * as actionTypes from '../constants/userinfo';

export function userLogin(data) {
	return {
		type: actionTypes.USER_LOGIN,
		data
	};
}

export function updateUserInfo(data) {
	return {
		type: actionTypes.UPDATE_USER_INFO,
		data
	};
}
