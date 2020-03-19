export const AUTH_CHANGE_USERNAME = "AUTH_CHANGE_USERNAME";
export const AUTH_CHANGE_PASSWORD = "AUTH_CHANGE_PASSWORD";
export const AUTH_CHANGE_STATUS = "AUTH_CHANGE_STATUS";

export const setUsername = username =>({
    type: AUTH_CHANGE_USERNAME,
    payload: username
});

export const setPassword = password =>({
    type: AUTH_CHANGE_PASSWORD,
    payload: password
});

export const setAuthStatus = status =>({
    type: AUTH_CHANGE_STATUS,
    payload: status
});
