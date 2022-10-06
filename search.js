//extracting GET parameter from URL
function getUrlVars() {
    var vars = {};
    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {         vars[key] = value;     });
    return vars;
}
var searchVar = getUrlVars()["search"];
console.log(searchVar);

//Using GET parameter to display the selected ticket/item
