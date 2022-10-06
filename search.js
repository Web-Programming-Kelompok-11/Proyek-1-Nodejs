//extracting GET parameter from URL
function getUrlVars() {
    var vars = {***REMOVED***
    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {         vars[key] = value;     ***REMOVED***
    return vars;
}
var searchVar = getUrlVars()["search"];
console.log(searchVar);
search(searchVar);

//Using GET parameter to display the selected ticket/item
function search(getparm) {
    var filter, ul, li, a, i, txtValue;
    filter = getparm.toUpperCase();
    console.log("filter: "+filter);
    ul = document.getElementById("search-results");
    li = ul.getElementsByTagName('li');
    a, txtValue;
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
          console.log("display: showing");
        } else {
          li[i].style.display = "none";
          console.log("display: none")
        }
      }
}