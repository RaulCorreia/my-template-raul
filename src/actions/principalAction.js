import { DEFAULT_ACTION, LOGIN } from "../store/types";


export function loadImages() {
    return {
        type: DEFAULT_ACTION,
        payload: {
            client: 'default',
            request: {
                url: '/',
                method: 'GET',
            }
        }
    }
}

export function login() {
    return {
        type: LOGIN,
        payload: true
    }
}

export function logout() {
    return {
        type: LOGIN,
        payload: false
    }
}