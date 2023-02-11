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
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
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
        const findResult = this.books.find((item) => item[type] === value);
        return findResult || null;
    }
    giveBookByName(bookName) {
        const index = this.books.findIndex((elem) => elem.name === bookName)
        return index < 0 ? null: this.books.splice(index, 1)[0];
    }
}
