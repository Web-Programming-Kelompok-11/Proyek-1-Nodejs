//extracting GET parameter from URL
function getUrlVars() {
    var vars = {***REMOVED***
    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {         vars[key] = value;     ***REMOVED***
    return vars;
}
var searchVar = getUrlVars()["search"];
console.log(searchVar);

//Using GET parameter to display the selected ticket/item
