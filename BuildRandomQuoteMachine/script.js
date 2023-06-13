const projectName = "random-quote-machine";

var colors = [       
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
    ];

var currentQuote = '', currentAuthor = '', twitterLink = '';

function getRandomQuote() {
    let randomIndex = Math.floor(Math.random() * QUOTEBANK.length);
    let quoteData = QUOTEBANK[randomIndex];
    
    //Add the Quote into Twitter Link 
    twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=";
    let quoteInApiForm = quoteData.quote.replace(/ /g, "%20");
    twitterLink += quoteInApiForm;

    let authorInApiForm = quoteData.quote.replace(/ /g, "%20");
    
    twitterLink += " - " + authorInApiForm;


    currentQuote = quoteData.quote; 
    currentAuthor = quoteData.author;

    $("#tweet-quote").attr(
        "href", twitterLink
    );
    
    console.log(currentAuthor + currentQuote)
    
    $('#author').text(currentAuthor);
    $('#text').text(currentQuote);
    let color = Math.floor(Math.random() * colors.length);
    

    $('body').animate(
        {
            backgroundColor: colors[color],
            color: colors[color]
          }, 1000   
    );

    /*

    $('#quote-text').animate({ opacity: 0 }, 500, function () {
        $(this).animate({ opacity: 1 }, 500);
        $('#text').text(currentQuote);
      });
    
    $('.card-text').animate({ opacity: 0 }, 500, function () {
        $(this).animate({ opacity: 1 }, 500);
        $('#author').text(currentAuthor);
      });   
    */ 

}

$(document).ready(function () {
    console.log("page loaded");
    getRandomQuote();
    console.log("post-functions")

    $('#new-quote').click(function(){
        console.log("click");
        getRandomQuote();
    });
});
