class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {
      return  this.state = (this.state * 1.5);
    }

}

new PrintEditionItem('Gorkiy', '2312', '123');
let editItem = new PrintEditionItem();

editItem = {
    set state(newNum) {
        if (newNum < 0) {
            this._state = 0;
        } else if (newNum > 100) {
            this._state = 100;
        } else return this._state = newNum;
    },
    get state() {
        return this._state;
    }
}