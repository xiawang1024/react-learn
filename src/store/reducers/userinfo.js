import * as actionTypes from '../constants/userinfo';

const initialState = {
	name: 'wangxia',
	age: 27
};
export default function userinfo(state = initialState, action) {
	switch (action.type) {
		case actionTypes.USER_LOGIN:
			return action.data;
		case actionTypes.UPDATE_USER_INFO:
			return action.data;
		default:
			return state;
	}
}
