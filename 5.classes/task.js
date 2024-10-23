class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
         this.state *= 1.5;
    }

    set state(number) {
        this._state = Math.max(0, Math.min(number, 100));
        /*
       1. Math.min(number, 100): 
        - Берется минимальное значение между `number` и 100. Это гарантирует, что `number` не превышает 100.
        - Если `number` больше 100, возвращается 100. В противном случае возвращается значение `number`.
     
       2. Math.max(0, ...):
        - Результат предыдущего расчета сравнивается с 0, и берется максимальное значение. Это гарантирет, что `_state` не будет меньше 0.
        - Если результат меньше 0, возвращается 0. В противном случае возвращается результат предыдущего минимального вычисления.
        */
    }

    get state() {
        return this._state;
    }
   
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
        
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
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
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if(book.state > 30){
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        const book = this.books.find(book => book[type] === value);
        /*
     - `this.books` - массив объектов, содержащий информацию о книгах. Он доступен в рамках объекта, в контексте которого вызывается этот метод.
     - Метод `.find()` ищет в массиве `this.books` первый элемент, удовлетворяющий условию.
     - `book => book[type] === value` - это функция (коллбэк), которая передается в `.find()`. Она проверяет, совпадает ли значение свойства `type` текущей книги `book` с `value`.
     - `const book` - результат работы `.find()`. Если книга найдена, `book` будет ссылаться на этот объект, иначе будет `undefined`.
        */
        return book || null;
    }

    giveBookByName(bookName) {
        const bookIndex = this.books.findIndex(book => book.name === bookName);
        if (bookIndex !== -1) {
           return this.books.splice(bookIndex, 1)[0];
        } else {
          return null;
        }
    }
}