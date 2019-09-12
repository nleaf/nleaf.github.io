function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
var matchlist = {
  // query name     : element id
  "first_name"      : "first_name",
  "last_name"       : "last_name",
  "email"           : "inputEmail",
  "company"         : "company",
  "contact_number"  : "contact_number",
  "address1"        : "address1",
  "address2"        : "address2",
  "city"            : "city",
  "state"           : "state",
  "zipcode"         : "zipcode",
  "country"         : "country"
}
window.onload = function() {
  for(key in matchlist) { 
    var queryName = getParameterByName(key);
    document.getElementById(matchlist[key]).value = queryName;
  }
};
