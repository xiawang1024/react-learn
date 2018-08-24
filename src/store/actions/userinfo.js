import * as actionTypes from '../constants/userinfo';

export const login = (data) => {
	return {
		type: actionTypes.USER_LOGIN,
		data
	};
};

export const updateUserInfo = (data) => {
	return {
		type: actionTypes.UPDATE_USER_INFO,
		data
	};
};
