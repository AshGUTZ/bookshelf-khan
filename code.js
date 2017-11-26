var bookW = 90;
var bookH = bookW + 3;
// ADJUST titleY for all INFO Y-placement
var titleY = 22;
// ADJUST titleX for all INFO X-placement
var titleX = 42;
var titleH = 38;
var starW = 20;
var starH = starW + 10;

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// STYLING
var drawBook = function(bookX, bookY, bookW, bookH) {
    ctx.rect(bookX, bookY, bookW, bookH);
    ctx.fillStyle = "#d2f7e2";
    ctx.fill();
};

ctx.textAlign = "center";
var bookTitle = function(bookTt, bookTx, bookTy) {
    ctx.font = "12px Arial";
    ctx.textAlign = "start";
    ctx.textBaseline = "top";
    ctx.fillStyle = "#000000";
    ctx.fillText(bookTt, bookTx, bookTy, bookW, titleH);
};

var bookAuthor = function(bookAt, bookAx, bookAy) {
    ctx.textAlign = "center";
    ctx.font = "11px Arial";
    ctx.textAlign = "start";
    ctx.textBaseline = "top";
    ctx.fillStyle = "#3cad75";
    ctx.fillText(bookAt, bookAx, bookAy, bookW, titleH);
};

// BOOK INFORMATION ENTER HERE
var book = [
    { title: "101 Best Vegan Foods", author: "Some Author", rating: 9, color: 'red' },
    { title: "The Outsiders", author: "Some Author 2", rating: 3 },
    { title: "Deceptively Delicious", author: "Some Author 3", rating: 2 },
    { title: "The Power Of Now", author: "Eckhart Tolle", rating: 5 },
    { title: "5", author: "Some Author 5", rating: 9 },
    { title: "6", author: "Some Author 666", rating: 4 },
    { title: "7", author: "Some Author 7", rating: 3 },
    { title: "8", author: "Some Author 8", rating: 2 },
    { title: "9", author: "Some Author 9", rating: 9 },
];


function image(param1, param2, param3, param4, param5) {
    var base_image = new Image();
    base_image.src = param1;
    base_image.onload = function() {
        ctx.drawImage(base_image, param2, param3, param4, param5);
    }
}

// DRAW BOOKS & SHELVES
for (var j = 0; j < 3; j++) {
for (var k = 0; k < 3; k++) {
    drawBook(k * 121 + 42, j * 112 + 18, bookW, bookH);
    ctx.fillStyle = "#ad7521";
    ctx.fillRect(0, k * 112 + 111, 400, 10);
}
}

// DRAW TITLE, AUTHOR, RANK
for (var i = 0; i < book.length; i++) {
    for (var j = 0; j < 1; j++) {
        var spacingX = i * 122;
        var spacingY = j * 114;


        if (i < 3) {
            bookTitle(book[i].title, titleX + spacingX, titleY + spacingY);
            bookAuthor(book[i].author, titleX + spacingX, titleY + 28 + spacingY);
            for (var s = 0; s < book[i].rating; s++) {
                image("./img/Star.png", titleX + 8 + spacingX + s * 14, titleY + 28 + 30, starW, starH);
                if (book[s] && book[s]['rating'] > 5) {
                    book[s]['rating'] = 5;
                }
            }
        } else if (i > 3, i < 6) {
            bookTitle(book[i].title, titleX - 368 + spacingX, titleY + 112 + spacingY);
            bookAuthor(book[i].author, titleX - 368 + spacingX, titleY + 140 + spacingY);
            for (var s = 0; s < book[i].rating; s++) {
                image("./img/Star.png", titleX - 359 + spacingX + s * 14, titleY + 168, starW, starH);
            }
        } else if (i > 6, i < 9) {
            bookTitle(book[i].title, titleX - 732 + spacingX, titleY + 231 + spacingY);
            bookAuthor(book[i].author, titleX - 732 + spacingX, titleY + 231 + 28 + spacingY);
            for (var s = 0; s < book[i].rating; s++) {
                image("./img/Star.png", titleX - 726 + spacingX + s * 14, titleY + 282, starW, starH);
                if (book[i].rating > 5) {
                    book[i].rating = 5;
                }
            }
        }
    }
}
