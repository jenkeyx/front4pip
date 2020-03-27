import {Dot} from "./Dot";

export class DotArray {
    #dots = [];
    constructor(array) {
        if(!(array===undefined)){
            Array.from(array).forEach(
                dot => this.add(dot.getX(),dot.getY(),dot.getR()));
        }

    }

    add(x,y,r){
        this.#dots.push(new Dot(x,y,r));
        while(this.#dots.length>5){
            this.#dots.shift();
        }
    }
    getDots(){
        return this.#dots;
    }
    getArray(){
        const array = this.#dots;
        array.push(new Dot());
        return array
    }
}