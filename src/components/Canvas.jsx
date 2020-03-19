import React from "react";

export default class Canvas extends React.Component{

    constructor(props) {
        super(props);
        this.onHitCanvas = this.onHitCanvas.bind(this);

    }
    componentDidMount() {
        this.drawGraphic(this.props.r);
    }

    onHitCanvas(event){

        let rect = this.refs.canvas.getBoundingClientRect();
        let c = this.refs.canvas.getContext("2d");
        let click_x, click_y;
        click_x = event.clientX - rect.left;
        click_y = event.clientY - rect.top;
        let x = (click_x - 200) / 60;
        let y = (-click_y + 200) / 60;
        c.fillStyle = this.checkArea(x, y, this.props.r) ? "#009900" : "#990000";
        c.beginPath();
        c.arc(click_x, click_y, 1.5, 0, Math.PI * 2);
        c.fill();


        this.props.hitCanvas([x, y, this.props.r]);
        this.sendCoordinates("куда то ")

    }
    sendCoordinates(url){
        const coordinates = this.getCoordinates();
        fetch(url,{
            method: "POST",
            body: coordinates,
            headers: new Headers({"Coordinates": 'Basic' + btoa(coordinates.x +  ":" + coordinates.y + ":" + coordinates.r) })
        })
            .then(response =>{if (response.status === 200) this.props.hitCanvas([this.props.x, this.props.y, this.props.r]);})
    }
    render() {
        return(
            <div className="canvas">
                <canvas width="400" height="400" ref='canvas' onClick={event => this.onHitCanvas(event)}>
                    Здесь должен был быть Canvas, но ваш браузер его не поддерживает.
                </canvas>
            </div>
        )
    }

    getCoordinates(){
        return{
            x: this.props.x,
            y: this.props.y,
            r: this.props.r
        }
    }

    drawGraphic(radius) {
        let c = this.refs.canvas.getContext("2d");
        let width = 400;
        let height = 400;
        let stockRadius = 60;
        let shiftRadius = radius * stockRadius;
        c.clearRect(0, 0, width, height);

        //2part
        c.fillStyle = "#99CCFF";
        c.beginPath();
        c.fillRect(width / 2 - shiftRadius/2, height / 2 - shiftRadius, shiftRadius/2, shiftRadius);

// 1part circle of 3 part r= r/2
        c.beginPath();
        c.moveTo(width / 2 + shiftRadius, height / 2);
        c.lineTo(width / 2, height / 2);
        c.lineTo(width / 2, height / 2 - shiftRadius);
        c.arc(width / 2, height / 2, shiftRadius, Math.PI * 1.5, Math.PI * 0);
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

    checkArea(x, y, r) {
        return (x <= 0 && y >= 0 && x >= -r/2 && y <= r) ||
            (x <= 0 && y <= 0 && y >= -x - r / 2) ||
            (x >= 0 && y >= 0 && r * r >= x * x + y * y);
    }


}