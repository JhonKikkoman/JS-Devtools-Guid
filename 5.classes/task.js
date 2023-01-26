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

let Gorkiy = new PrintEditionItem('Gorkiy', '2312', '123');

 let editItem = {
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

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.author = author;
        this.type = "book";
    }
    
}

class NovelBook extends Book {
    constructor() {
        super();
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor() {
        super();
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor() {
        super();
        this.type = "detective";
    }
}

class Library {
    constructor(name, books) {
        this.name = "";
        this.books = [];
    }
    addBook(book) {
        if(state > 30) {
            this.books.push(book)
        }
    }
    findBookBy(type, value) {
        if(type === true && value === true) {
            return this.name;
        }
    }
    giveBookByName(bookName) {
        if(bookName === true) {
            this.books.splice(bookName);
        } else return null;
    }

}

