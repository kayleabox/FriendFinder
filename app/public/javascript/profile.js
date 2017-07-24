var path = window.location.pathname;
path = path.replace("/profile", "/api");
var user = path.replace("/api/", "")
console.log(path);
$("#sign-in").append(user);

$.get(path)
.done(function (data) {
    console.log(data);
    if(data.matches){
        for(i=0; i<data.matches.length; i++){
            $("#friend-peas").append("<p>"+data.matches[i]+"</p>");
        }
    }
    else{
        $("#friend-peas").append("<p>You don't have any peas!</p>");
    }
});