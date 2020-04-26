import {
    DEFAULT_ACTION_SUCCESS, DEFAULT_ACTION_FAIL, LOGIN
} from '../types';

const INITIAL_STATE = {
    loading: false,
    stateLogin: false,
    thirdTitle: 'Third Page',
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case DEFAULT_ACTION_SUCCESS:
            return { ...state, loading: true };

        case DEFAULT_ACTION_FAIL:
            return { ...state, loading: false };

        case LOGIN:
            return { ...state, stateLogin: action.payload }

        default:
            return state;
    }
};
