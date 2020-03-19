export const CANVAS_ON_HIT = "CANVAS_ON_HIT";

export const hitCanvas = coordinates =>({
    type: CANVAS_ON_HIT,
    payload: coordinates
});
