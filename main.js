var Library = function() {
    var books = []; //array of book objects

    var addBook = function(book) {
        books.push(book);
        //which simply adds new books to the library's private books array.
    }
    var checkOutBook = function(book) {
        var fakeBook = 0; //tracks if the book does not exist in the library
            for (var i=0; i<books.length;i++) {
                if (book.getAttribute('title') === books[i].getAttribute('title') && books[i].getAttribute('checkedOut') === false) {
                    book.setAttribute('checkedOut', true);  
                    fakeBook = 1;
                } else if (book.getAttribute('title') === books[i].getAttribute('title') && books[i].getAttribute('checkedOut') === true) {
                    console.log(book.getAttribute('title') + ' is already checked out');
                    fakeBook = 1;
                    }
            }
            if (fakeBook === 0) { //if the book was not found in the library, logs error msg
                console.log(book.getAttribute('title') + ' does not exist in the library');
            }
        //which takes a book object as an argument and changes it's checkedOut attribute to true, but ONLY if that book exists in the library. 
        //Otherwise, just console log some kind of error. --
    }

    
    var returnBook = function(book) {
        var fakeBook = 0; //tracks if the book does not exist in the library
        for (var i=0; i<books.length;i++) {           
            if (book.getAttribute('title') === books[i].getAttribute('title') && books[i].getAttribute('checkedOut') === true) {
                book.setAttribute('checkedOut', false);
                fakeBook = 1;
            } else if (book.getAttribute('title') === books[i].getAttribute('title') && books[i].getAttribute('checkedOut') === false) {
                console.log(book.getAttribute('title') + ' has not been checked out');
                fakeBook = 1;
                } 
        }
        if (fakeBook === 0) {  //if the book was not found in the library, logs error msg
            console.log(book.getAttribute('title') + " does not exist in the library.");
            }
            //returnBook which takes a book object as an argument and changes it's checkedOut attribute to false, but ONLY if that book exists in the library. 
            //Otherwise, just console log some kind of error.
}

    return {
        addBook: addBook,
        checkOutBook: checkOutBook,
        returnBook: returnBook
        }  
};

var Book = function(title, author) {
   var attributes = {
       title: title,
       author: author,
       checkedOut: false

   }; 
   var getAttribute = function(attribute) {
       if (attributes[attribute] != undefined) {
         return attributes[attribute];
       }
       //which should take one argument, the name of one of the book's attributes and return it, 
       //but only if that attribute is a key on the Book module's attributes object
   };

   var setAttribute = function(attribute, value) {
    if (attributes[attribute] != undefined) {
        attributes[attribute] = value;
        }
        //which should take one argument, the name of one of the book's attributes and set it on the 
        //book's attributes object but only if that attribute is a key on the Book module's attributes object      
   };
   return {
        getAttribute: getAttribute,
        setAttribute: setAttribute
   };
};
var library = Library();
var book1 = Book('A_book1', 'An_author1');
var book2 = Book('A_book2', 'An_author2');
var book3 = Book('A_book3', 'An_author3');
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.checkOutBook(book1);
library.returnBook(book1);