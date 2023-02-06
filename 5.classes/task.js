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
    set state(newNum) {
        if (newNum < 0) {
            this.state = 0;
        } else if (newNum > 100) {
            this._state = 100;
        } else return this._state = newNum;
    }
    get state() {
        return this._state;
    }
}

let Gorkiy = new PrintEditionItem('Gorkiy', '2312', '123');

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
        if(book.state > 30) {
            this.books.push(book)
        } return;
    }
    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            if (type === this.books[i] && value === this.books[i]) {
                return this.name;
            }
        }
        return null;
    }
    giveBookByName(bookName) {
        if(bookName === true) {
            this.books.splice(bookName);
        } else return null;
    }

}

if(type === true && value === true) {
    return this.name;
}
