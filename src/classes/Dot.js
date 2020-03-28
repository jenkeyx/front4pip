import {checkArea} from "../components/Canvas";

export class Dot{
    #x;
    #y;
    #r;
    #hit;

    constructor(x, y, r) {
        this.#x = x;
        this.#y = y;
        this.#r = r;
        this.#hit = checkArea(x,y,r);
    }

    getX(){
        return this.#x;
    }
    getY(){
        return this.#y;
    }
    getR(){
        return this.#r;
    }
    isHit(){
        return this.#hit;
    }
}
