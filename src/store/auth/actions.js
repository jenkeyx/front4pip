export const CHANGE_USERNAME = "AUTH_CHANGE_USERNAME";
export const CHANGE_PASSWORD = "AUTH_CHANGE_PASSWORD";
export const AUTH_CHANGE_STATUS = "AUTH_CHANGE_STATUS";
export const CHANGE_REPEAT_PASSWORD = "REGISTRATION_CHANGE_REPEAT_PASSWORD";

export const setUsername = username =>({
    type: CHANGE_USERNAME,
    payload: username
});

export const setPassword = password =>({
    type: CHANGE_PASSWORD,
    payload: password
});

export const setAuthStatus = status =>({
    type: AUTH_CHANGE_STATUS,
    payload: status
});

export const setRepeatPassword = repeatPassword =>({
    type: CHANGE_REPEAT_PASSWORD,
    payload: repeatPassword
});

