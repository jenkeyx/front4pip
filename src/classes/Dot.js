export class Dot{
    #x;
    #y;
    #r;
    #hit;

    constructor(x, y, r) {
        this.#x = x;
        this.#y = y;
        this.#r = r;
        this.#hit = this.checkArea(x,y,r);
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

    checkArea(x, y, r) {
        return (x <= 0 && y >= 0 && x >= -r / 2 && y <= r) ||
            (x <= 0 && y <= 0 && y >= -x - r / 2) ||
            (x >= 0 && y >= 0 && r * r >= x * x + y * y);
    }
}