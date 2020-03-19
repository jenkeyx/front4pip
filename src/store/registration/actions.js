export const REGISTRATION_CHANGE_USERNAME = "REGISTRATION_CHANGE_USERNAME";
export const REGISTRATION_CHANGE_PASSWORD = "REGISTRATION_CHANGE_PASSWORD";
export const REGISTRATION_CHANGE_REPEAT_PASSWORD = "REGISTRATION_CHANGE_REPEAT_PASSWORD";

export const setUsername = username =>({
    type: REGISTRATION_CHANGE_USERNAME,
    payload: username
});

export const setPassword = password =>({
    type: REGISTRATION_CHANGE_PASSWORD,
    payload: password
});
export const setRepeatPassword = repeatPassword =>({
    type: REGISTRATION_CHANGE_REPEAT_PASSWORD,
    payload: repeatPassword
});