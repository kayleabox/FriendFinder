var path = window.location.pathname;
path = path.replace("/profile", "/api");
var user = path.replace("/api/", "")
console.log(path);
$("#sign-in").append(user);

$.get(path)
.done(function (data) {
    console.log(data);
    if(data.matches){
        var matches = data.matches
        for(i=0; i<matches.length; i++){
            $.get("/api/"+matches[i])
            .done(function(data){
                $("#friend-peas").append("<div><p>"+data.name+"</p><img style='width:60px;' src='" + data.photo + "'></div>");
            })
        }
    }
    else{
        $("#friend-peas").append("<p>You don't have any peas!</p>");
    }
});