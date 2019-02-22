var Library = function() {
    var books = []; //array of book objects

    var addBook = function(book) {
        books.push(book);
        //which simply adds new books to the library's private books array.
    }
    var checkOutBook = function(book) {
        if (!book.getAttribute('checkedOut'))  {
            for (var i=0; i<books.length;i++) {
                if (book.getAttribute('title') === books[i].getAttribute('title')) {
             book.setAttribute('checkedOut', true);  
                }
            }
        }
                //which takes a book object as an argument and changes it's checkedOut attribute to true, but ONLY if that book exists in the library. 
        //Otherwise, just console log some kind of error. --
    }

    
    var returnBook = function(book) {
        for (var i=0; i<books.length;i++) {
            if (book.getAttribute('title') === books[i].getAttribute('title')) {
                book.setAttribute('checkedOut', false);
            }else {
                console.log(book.getAttribute('title') + " is not in the library.");
            }
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