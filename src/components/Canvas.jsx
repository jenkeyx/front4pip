import React from "react";
import {DotArray} from "../classes/DotArray";



export function drawGraphic(radius, canvas) {
    let c = canvas.getContext("2d");
    let width = 400;
    let height = 400;
    let stockRadius = 60;
    let shiftRadius = radius * stockRadius;
    c.clearRect(0, 0, width, height);

    //2part
    c.fillStyle = "#99CCFF";
    c.beginPath();
    c.fillRect(width / 2 - shiftRadius / 2, height / 2 - shiftRadius, shiftRadius / 2, shiftRadius);

// 1part circle of 3 part r= r/2
    c.beginPath();
    c.moveTo(width / 2 + shiftRadius, height / 2);
    c.lineTo(width / 2, height / 2);
    c.lineTo(width / 2, height / 2 - shiftRadius);
    c.arc(width / 2, height / 2, shiftRadius, Math.PI * 1.5, 0);
    c.closePath();
    c.fill();

// 3part triangle 0 r/2 r/2
    c.beginPath();
    c.moveTo(width / 2, height / 2 + shiftRadius / 2);
    c.lineTo(width / 2 - shiftRadius / 2, height / 2);
    c.lineTo(width / 2, height / 2);
    c.lineTo(width / 2, height / 2 + shiftRadius / 2);
    c.closePath();
    c.fill();

    // x-line
    c.beginPath();
    c.moveTo(5, height / 2);
    c.lineTo(width - 5, height / 2);
    c.moveTo(width / 2 - stockRadius, height / 2 - 3);
    c.lineTo(width / 2 - stockRadius, height / 2 + 3);
    c.moveTo(width / 2 - stockRadius * 2, height / 2 - 3);
    c.lineTo(width / 2 - stockRadius * 2, height / 2 + 3);
    c.moveTo(width / 2 + stockRadius * 2, height / 2 - 3);
    c.lineTo(width / 2 + stockRadius * 2, height / 2 + 3);
    c.moveTo(width / 2 + stockRadius, height / 2 - 3);
    c.lineTo(width / 2 + stockRadius, height / 2 + 3);
    c.moveTo(width - 10, height / 2 - 5);
    c.lineTo(width - 6, height / 2);
    c.lineTo(width - 10, height / 2 + 5);
    c.closePath();
    c.stroke();


//y-line
    c.beginPath();
    c.moveTo(width / 2, 5);
    c.lineTo(width / 2, height - 5);
    c.moveTo(width / 2 - 3, height / 2 - stockRadius);
    c.lineTo(width / 2 + 3, height / 2 - stockRadius);
    c.moveTo(width / 2 - 3, height / 2 - stockRadius * 2);
    c.lineTo(width / 2 + 3, height / 2 - stockRadius * 2);
    c.moveTo(width / 2 - 3, height / 2 + stockRadius * 2);
    c.lineTo(width / 2 + 3, height / 2 + stockRadius * 2);
    c.moveTo(width / 2 - 3, height / 2 + stockRadius);
    c.lineTo(width / 2 + 3, height / 2 + stockRadius);
    c.moveTo(width / 2 - 5, 10);
    c.lineTo(width / 2, 6);
    c.lineTo(width / 2 + 5, 10);
    c.closePath();
    c.stroke();

//text
    c.font = "14px Arial";
    c.fillStyle = "#000000";
    c.fillText("X", width - 13, height / 2 - 5);
    c.fillText('2', width / 2 + stockRadius * 2, height / 2 - 5);
    c.fillText('1', width / 2 + stockRadius, height / 2 - 5);
    c.fillText('-1', width / 2 - stockRadius, height / 2 - 5);
    c.fillText('-2', width / 2 - stockRadius * 2, height / 2 - 5);
    c.fillText("Y", width / 2 + 5, 13);
    c.fillText('-1', width / 2 + 5, height / 2 + stockRadius);
    c.fillText('-2', width / 2 + 5, height / 2 + stockRadius * 2);
    c.fillText('2', width / 2 + 5, height / 2 - stockRadius * 2);
    c.fillText("1", width / 2 + 5, height / 2 - stockRadius);

}

export function drawDot(x, y, r, canvas){
    let c = canvas.getContext("2d");
    c.fillStyle = checkArea(x, y, r) ? "#009900" : "#990000";
    c.beginPath();
    c.arc(x, y, 1.5, 0, Math.PI * 2);
    c.fill();
}
export function drawDots(dotsData, canvas) {
    if (!(dotsData === undefined)) {
        const dots = new DotArray(dotsData);
        dots.getDots().forEach((dot) => {
            drawDot(dot.getX(), dot.getY(), canvas)
        });
    }

}


export function checkArea(x, y, r) {
    return (x <= 0 && y >= 0 && x >= -r / 2 && y <= r) ||
        (x <= 0 && y <= 0 && y >= -x - r / 2) ||
        (x >= 0 && y >= 0 && r * r >= x * x + y * y);
}
