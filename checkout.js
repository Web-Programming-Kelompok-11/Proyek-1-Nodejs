var prevN = 0;

function findGetParameter(parameterName) { // Gets the GET variables
    var result = null,
        tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}

if(findGetParameter("item")) { // Check if parameter matches
   displayTheBox(findGetParameter("item"));
}
var prevN = 0;

function displayTheBox(n) { // Display the selected ticket/item
    var products = document.getElementsByClassName("displayBlock");

    products[prevN].className = products[prevN].className.replace(" show", "");
    products[n].className += " show";

    prevN = n;
}