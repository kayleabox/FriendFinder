var path = window.location.pathname;
path = path.replace("/profile", "/api");
console.log(path);

$.get(path)
.done(function (data) {
    console.log(data);
    for(i=0; i<data.matches.length; i++){
        $("#friend-peas").append("<p>"+data.matches[i]+"</p>");
    }
});