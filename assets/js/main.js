var quotes = [
    {
        author: 'Marcus Tullius Cicero',
        quote: 'A room without books is like a body without a soul.',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1197881416i/13755._UX200_CR0,47,200,200_.jpg',
    },
    {
        author: 'Dr. Seuss',
        quote: 'You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1193930952i/61105._UX200_CR0,30,200,200_.jpg',
    },
    {
        author: 'Mae West',
        quote: 'You only live once, but if you do it right, once is enough.',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1198551937i/259666._UX200_CR0,16,200,200_.jpg',
    },
    {
        author: 'Mahatma Gandhi',
        quote: 'Be the change that you wish to see in the world.',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1356810912i/5810891._UX200_CR0,21,200,200_.jpg',
    },
    {
        author: 'Maya Angelou',
        quote: 'I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1379017377i/3503._UX200_CR0,6,200,200_.jpg',
    },
    {
        author: 'Mahatma Gandhi',
        quote: 'Live as if you were to die tomorrow. Learn as if you were to live forever.',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1356810912i/5810891._UX200_CR0,21,200,200_.jpg',
    },
    {
        author: 'Friedrich Nietzsche',
        quote: 'Without music, life would be a mistake.',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1651474065i/1938._UX200_CR0,35,200,200_.jpg',
    },
    {
        author: 'Albert Einstein',
        quote: 'There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1429114964i/9810._UX200_CR0,14,200,200_.jpg',
    },
    {
        author: 'Mark Twain',
        quote: 'Good friends, good books, and a sleepy conscience: this is the ideal life.',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1322103868i/1244._UX200_CR0,40,200,200_.jpg',
    },
    {
        author: 'Bill Keane',
        quote: 'Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1320885123i/3230608._UY200_CR21,0,200,200_.jpg',
    },
];
var quotesCopy = [];

function generateQuote() {
    var quoteIndex = Math.floor(Math.random() * quotes.length);

    if (quotes.length == 0) {
        quotes = quotesCopy;
        quotesCopy = [];
    }

    for (var i = 0; i < quotes.length; i++) {

        if (quoteIndex == i) {
            document.getElementById("quote").innerHTML = quotes[i].quote;
            document.getElementById("author").innerHTML = quotes[i].author;
            document.getElementById("image").innerHTML = '<img src="'+quotes[i].image+'" alt="'+quotes[i].author+' picture" class="w-50 rounded-circle"/>';
            quotesCopy.push(quotes[quoteIndex]);
            quotes.splice(quoteIndex, 1);
        }

    }
}