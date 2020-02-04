let quoteDiv = document.getElementById('quote');
let quoteButton = document.getElementById('get-quote');

function getQuote() {
    var xmlhttp = new XMLHttpRequest();
    var url = "https://api.chucknorris.io/jokes/random";
    xmlhttp.onreadystatechange = function() {
      if(this.readyState == 4 && this.status == 200) {
        var json = JSON.parse(this.responseText);
        // We parse the JSON response
        parseJson(json);
      }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
};

function parseJson(json) {
    var fact = "<b>" + json["value"] + "</b>";
    quoteDiv.innerHTML = fact;
}

quoteButton.addEventListener('click', getQuote);

getQuote();