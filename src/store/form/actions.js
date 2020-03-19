export const FORM_CHANGE_X = "FORM_CHANGE_X";
export const FORM_CHANGE_Y = "FORM_CHANGE_Y";
export const FORM_CHANGE_R = "FORM_CHANGE_R";

export const changeX = x =>({
    type: FORM_CHANGE_X,
    payload: x
});
export const changeY = y =>({
    type: FORM_CHANGE_Y,
    payload: y
});
export const changeR = r =>({
    type: FORM_CHANGE_R,
    payload: r
});
